import { Avatar, Box, Flex, Tag, Text } from '@chakra-ui/react';
import _ from 'lodash';
import moment from 'moment';

const CommentContainer = ({ name, content, timestamp }) => {
  return (
    <Box bgColor='#f8f1fe' py='6' px='8' my='6' borderRadius='xl'>
      <Flex justifyContent='center' flexDir='column'>
        <Text textAlign='justify' lineHeight='7' fontWeight='medium'>
          {content}
        </Text>
        <Flex mt='3' gap='6'>
          <Tag px='2' py='1' bg='brand.200' color='brand.600'>
            {_.startCase(_.toLower(name))}
          </Tag>
          <Tag px='2' py='1' bg='brand.200' color='brand.600'>
            {_.startCase(_.toLower(moment(timestamp).from(moment())))}
          </Tag>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommentContainer;
