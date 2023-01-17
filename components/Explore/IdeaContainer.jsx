import { Box, Flex, IconButton, Tag, Text } from '@chakra-ui/react';
import _ from 'lodash';
import { BsSuitHeart } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';

const IdeaContainer = ({
  content,
  author,
  category,
  timeDiff,
  upvotes,
  pay,
}) => {
  return (
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
      <Flex minW='90px' align='flex-start' justify='center' flexDir='column'>
        <Flex
          w='full'
          justify='flex-start'
          gap='3'
          align='center'
          py='2'
          pl='2'
        >
          <IconButton bg='brand.150' _hover={{ bg: 'brand.200' }}>
            <BsSuitHeart color='#220D6D' size='20' />
          </IconButton>{' '}
          <Text fontSize='large' color='brand.900' fontWeight='bold'>
            {upvotes.length}
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
          <IconButton bg='brand.150' _hover={{ bg: 'brand.200' }}>
            <GiReceiveMoney color='#220D6D' size='20' />
          </IconButton>{' '}
          <Text fontSize='large' color='brand.900' fontWeight='bold'>
            {pay.length}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IdeaContainer;
