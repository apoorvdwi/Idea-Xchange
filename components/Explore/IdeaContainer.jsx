import { Box, Flex, IconButton, Tag, Text } from '@chakra-ui/react';
import _ from 'lodash';
import Link from 'next/link';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';

import { useGlobalContext } from '../../context';

const IdeaContainer = ({
  id,
  content,
  author,
  category,
  timeDiff,
  upvotes,
  upvotesCount,
  payCount,
  pay,
  toggleLike,
  togglePay,
  noShow,
  noLink,
}) => {
  const { user } = useGlobalContext();
  return (
    <Link style={noLink ? { pointerEvents: 'none' } : {}} href={`/idea/${id}`}>
      <Flex
        justifyContent='space-between'
        gap='6'
        bgColor='#f8f1fe'
        py='6'
        px='8'
        my='6'
        borderRadius='xl'
      >
        <Flex justifyContent='center' flexDir='column'>
          <Text textAlign='justify' lineHeight='7' fontWeight='medium'>
            {content}
          </Text>
          <Flex mt='4' gap='6'>
            <Tag px='2' py='1' bg='brand.200' color='brand.600'>
              {_.startCase(_.toLower(author))}
            </Tag>
            <Tag px='2' py='1' bg='#4e3d8a' color='white'>
              {_.startCase(_.toLower(category))}
            </Tag>
            <Tag px='2' py='1' bg='brand.200' color='brand.600'>
              {_.startCase(_.toLower(timeDiff))}
            </Tag>
          </Flex>
        </Flex>
        {!noShow && (
          <Flex
            minW='90px'
            align='flex-start'
            justify='center'
            flexDir='column'
          >
            <Flex
              w='full'
              justify='flex-start'
              gap='3'
              align='center'
              py='2'
              pl='2'
            >
              <IconButton
                disabled={!user}
                onClick={(e) => {
                  e.preventDefault();
                  toggleLike();
                }}
                bg={
                  user && upvotes && upvotes.includes(user.$id)
                    ? 'brand.900'
                    : 'brand.150'
                }
                _hover={
                  user && upvotes.includes(user.$id) ? {} : { bg: 'brand.200' }
                }
              >
                {user && upvotes && upvotes.includes(user.$id) ? (
                  <BsSuitHeartFill color='#fff' size='20' />
                ) : (
                  <BsSuitHeart size='20' color='#220D6D' />
                )}
              </IconButton>{' '}
              <Text fontSize='large' color='brand.900' fontWeight='bold'>
                {upvotesCount}
              </Text>
            </Flex>
            <Flex
              w='full'
              justify='flex-start'
              gap='3'
              align='center'
              py='2'
              pl='2'
            >
              <IconButton
                disabled={!user}
                onClick={(e) => {
                  e.preventDefault();
                  togglePay();
                }}
                bg={user && pay.includes(user.$id) ? 'brand.900' : 'brand.150'}
                _hover={
                  user && pay.includes(user.$id) ? {} : { bg: 'brand.200' }
                }
              >
                <GiReceiveMoney
                  color={user && pay.includes(user.$id) ? '#fff' : '#220D6D'}
                  size='20'
                />
              </IconButton>{' '}
              <Text fontSize='large' color='brand.900' fontWeight='bold'>
                {payCount}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Link>
  );
};

export default IdeaContainer;
