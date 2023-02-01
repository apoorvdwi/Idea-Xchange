import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { Query } from 'appwrite';
import moment from 'moment';
import { useEffect, useState } from 'react';

import FiltersContainer from '../components/Explore/FiltersContainer';
import IdeaContainer from '../components/Explore/IdeaContainer';
import { useGlobalContext } from '../context';

const Explore = () => {
  const { user, databases } = useGlobalContext();
  const [loading, setLoading] = useState(true);
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

  const handleLike = (id, action) => {
    databases
      .getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        id,
      )
      .then((res) => {
        databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_IDEAS_ID,
          id,
          {
            upvotes:
              action === 'decrease'
                ? res.upvotes.filter((item) => item !== user.$id)
                : [...(res.upvotes || []), user.$id],
            likesCount:
              action === 'decrease'
                ? res.likesCount - 1
                : (res.likesCount || 0) + 1,
          },
        );
      })
      .catch((err) => console.log(err));
  };

  const handlePay = (id, action) => {
    databases
      .getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        id,
      )
      .then((res) => {
        databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_IDEAS_ID,
          id,
          {
            pay:
              action === 'decrease'
                ? res.pay.filter((item) => item !== user.$id)
                : [...(res.pay || []), user.$id],
            payCount:
              action === 'decrease'
                ? res.payCount - 1
                : (res.payCount || 0) + 1,
          },
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    databases
      .listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        [
          Query.orderDesc(queryMap[filters.sort]),
          ...(filters.category !== 'All'
            ? [Query.equal('category', [filters.category])]
            : []),
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
  }, [databases, filters]);

  return data && !loading ? (
    <Flex justifyContent='left' position='relative' margin='auto' width='75%'>
      <FiltersContainer filters={filters} setFilters={setFilters} />
      {data.length > 0 ? (
        <Box marginLeft='auto' width='73.8%'>
          {data.length > 0 ? (
            data.map((item, index) => (
              <IdeaContainer
                {...item}
                key={item.id}
                toggleLike={() => {
                  if (item.upvotes.includes(user.$id)) {
                    handleLike(item.id, 'decrease');
                    setData((prev) =>
                      prev.map((prevData, index1) => {
                        if (index1 === index) {
                          return {
                            ...prevData,
                            upvotes:
                              prevData.upvotes.filter(
                                (doc) => doc !== user.$id,
                              ) || [],
                            upvotesCount: prevData.upvotesCount - 1,
                          };
                        }

                        return prevData;
                      }),
                    );
                  } else {
                    handleLike(item.id, 'increase');
                    setData((prev) =>
                      prev.map((prevData, index1) => {
                        if (index1 === index) {
                          return {
                            ...prevData,
                            upvotes: [
                              ...(prevData.upvotes ? prevData.upvotes : []),
                              user.$id,
                            ],
                            upvotesCount: prevData.upvotesCount + 1,
                          };
                        }

                        return prevData;
                      }),
                    );
                  }
                }}
                togglePay={() => {
                  if (item.pay.includes(user.$id)) {
                    handlePay(item.id, 'decrease');
                    setData((prev) =>
                      prev.map((prevData, index1) => {
                        if (index1 === index) {
                          return {
                            ...prevData,
                            pay:
                              prevData.pay.filter((doc) => doc !== user.$id) ||
                              [],
                            payCount: prevData.payCount - 1,
                          };
                        }

                        return prevData;
                      }),
                    );
                  } else {
                    handlePay(item.id, 'increase');
                    setData((prev) =>
                      prev.map((prevData, index1) => {
                        if (index1 === index) {
                          return {
                            ...prevData,
                            pay: [
                              ...(prevData.pay ? prevData.pay : []),
                              user.$id,
                            ],
                            payCount: prevData.payCount + 1,
                          };
                        }

                        return prevData;
                      }),
                    );
                  }
                }}
              />
            ))
          ) : (
            <Flex>NO Ideas to Display</Flex>
          )}
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

export default Explore;
