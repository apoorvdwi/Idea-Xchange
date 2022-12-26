import { Box, Flex, Image } from '@chakra-ui/react';

import TopBorder from './TopBorder';

const ProcessBlock = ({
  flexD,
  imageSrc,
  animatedHead,
  nonAnimatedHead,
  content,
}) => (
  <Flex
    w={['100%', '90%', '85%', '80%']}
    alignItems={['center', 'center', 'normal']}
    flexDirection={['column', 'column', flexD]}
  >
    <Image
      src={imageSrc}
      alt='Login Illustration'
      w={['65%', '60%', '50%']}
      p={['2', '2', '4', '7']}
    />
    <Flex
      flexDirection='column'
      justifyContent='center'
      w={['100%', '100%', '50%']}
      px={['8', '6', '8', '12', '14']}
      py={['2', '6', '12', '14']}
    >
      <Box
        fontSize={['lg', 'xl', '2xl']}
        fontWeight='bold'
        textAlign={['center', 'center', 'left']}
      >
        <span className='highlight'>{animatedHead}</span>
        {nonAnimatedHead}
      </Box>
      <Box
        fontSize={['sm', 'md']}
        my={['4', '6', '8']}
        textAlign={['center', 'center', 'left']}
      >
        {content}
      </Box>
      <TopBorder borderH='0.35rem' />
    </Flex>
  </Flex>
);

export default ProcessBlock;
