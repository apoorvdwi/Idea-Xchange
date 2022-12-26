import { Box, Flex } from '@chakra-ui/react';

const FutureScopeCard = ({ heading, content }) => {
  return (
    <Flex
      flexDir='column'
      w={['80%', '80%', '40%']}
      p={['6', '6', '10', '14']}
      mx='4'
      my={['2', '4', '6']}
      bgColor='white'
      borderColor='gray.100'
      borderWidth='thin'
      borderRadius='lg'
    >
      <Box
        bg='brand.200'
        w='fit-content'
        p='2'
        fontSize='xs'
        color='brand.600'
        borderRadius='md'
      >
        COMING SOON
      </Box>
      <Box
        fontSize={['lg', 'lg', 'xl']}
        fontWeight='bold'
        my={['4', '5', '6']}
        color='brand.600'
      >
        {heading}
      </Box>
      <Box fontSize={['sm', 'sm', 'md']}>{content}</Box>
    </Flex>
  );
};

export default FutureScopeCard;
