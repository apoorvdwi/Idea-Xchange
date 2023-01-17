import { Box, Flex, Spinner } from '@chakra-ui/react';
import moment from 'moment';
import { useEffect, useState } from 'react';

import FiltersContainer from '../components/Explore/FiltersContainer';
import IdeaContainer from '../components/Explore/IdeaContainer';
import { useGlobalContext } from '../context';

const Explore = () => {
  const { databases } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    databases
      .listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
      )
      .then((res) => {
        const modifiedData = res.documents.map((item) => ({
          id: item.$id,
          discussionId: item.discussionId,
          upvotes: item.upvotes,
          pay: item.pay,
          content: item.title,
          category: item.category,
          timeDiff: moment(item.$createdAt).from(moment()),
          author: item.username,
        }));
        setData(modifiedData);
        setLoading(false);
      });
  }, [databases]);

  return data && !loading ? (
    <Flex justifyContent='left' position='relative' margin='auto' width='75%'>
      <FiltersContainer />
      <Box marginLeft='auto' width='73.8%'>
        {data.map((item) => (
          <IdeaContainer {...item} key={item.id} />
        ))}
      </Box>
    </Flex>
  ) : (
    <Flex alignItems='center' justifyContent='center' w='100%' h='88.8vh'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='brand.500'
        size='xl'
      />
    </Flex>
  );
};

export default Explore;
