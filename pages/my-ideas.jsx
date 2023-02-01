import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { Query } from 'appwrite';
import moment from 'moment';
import { useEffect, useState } from 'react';

import FiltersContainer from '../components/Explore/FiltersContainer';
import IdeaContainer from '../components/Explore/IdeaContainer';
import { useGlobalContext } from '../context';

const MyIdeas = () => {
  const { user, databases } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    sort: 'Latest',
    category: 'All',
  });
  const [data, setData] = useState(null);

  const queryMap = {
    Latest: '$createdAt',
    Money: 'payCount',
    Likes: 'likesCount',
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    setLoading(true);
    databases
      .listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        [
          Query.orderDesc(queryMap[filters.sort]),
          ...(filters.category !== 'All'
            ? [
                Query.equal('category', [filters.category]),
                Query.equal('userId', [user.$id]),
              ]
            : [Query.equal('userId', [user.$id])]),
        ],
      )
      .then((res) => {
        const modifiedData = res.documents.map((item) => ({
          id: item.$id,
          discussionId: item.discussionId,
          upvotes: item.upvotes,
          pay: item.pay,
          upvotesCount: item.likesCount || 0,
          payCount: item.payCount || 0,
          content: item.title,
          category: item.category,
          timeDiff: moment(item.$createdAt).from(moment()),
          author: item.username,
        }));
        setData(modifiedData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [databases, filters, user]);

  return !loading ? (
    <Flex justifyContent='left' position='relative' margin='auto' width='75%'>
      <FiltersContainer filters={filters} setFilters={setFilters} />
      {data && data.length > 0 ? (
        <Box marginLeft='auto' width='73.8%'>
          {data.map((item, index) => (
            <IdeaContainer {...item} key={item.id} noShow />
          ))}
        </Box>
      ) : (
        <Flex
          marginLeft='auto'
          width='73.8%'
          h='85vh'
          alignItems='center'
          justifyContent='center'
          flexDir='column'
        >
          <img src='/images/noData.svg' alt='no data' width='200px' />
          <Text mt='3'>No Ideas Found!! Mind adding some :&#41;</Text>
        </Flex>
      )}
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

export default MyIdeas;
