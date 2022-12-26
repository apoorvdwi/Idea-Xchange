import { Box, Circle, Flex, Image } from '@chakra-ui/react';

const About = ({ aboutRef }) => (
  <Flex
    flexDirection='column'
    alignItems='center'
    ref={aboutRef}
    pos='relative'
    mt={['8', null]}
    mb='20'
  >
    <Flex
      flexDirection='column'
      alignItems='center'
      bgColor='brand.600'
      className='slanted'
      h={['xl', '2xl', '3xl', '4xl']}
    >
      <Box
        fontSize={['xl', 'xl', '2xl']}
        fontWeight='bold'
        color='brand.100'
        mt='20'
        mb='10'
      >
        About Us
      </Box>
      <Box
        color='brand.200'
        w={['80%', '80%', '60%', '60%', '40%']}
        textAlign='center'
        mb='2'
        fontSize={['sm', 'md', 'lg']}
      >
        <span className='highlightSecond'>Idea Exchange</span> is a platform for
        people who have trouble finding ideas for their side projects or are
        finding a buisness problem to solve and build their startup.
        Alternatively, people can post their ideas/problem statements and let
        other users to interact with the idea in form of comments, upvotes,
        downvotes and if they would like to pay for the product around that
        problem/idea statement.
      </Box>
    </Flex>

    <Flex
      flexDirection='column'
      width={['80%', '80%', '60%', '60%', '60%']}
      bgColor='brand.500'
      borderRadius='lg'
      position='absolute'
      top={['25rem', '24rem', '24rem']}
      px='6'
      pb='6'
    >
      <Flex p={['2', '2', '4']}>
        <Circle size={['3', '3', '4']} bgColor='brand.600' mx='1' />
        <Circle size={['3', '3', '4']} bgColor='brand.200' mx='1' />
        <Circle size={['3', '3', '4']} bgColor='brand.100' mx='1' />
      </Flex>
      <Image
        src='/images/landingImage.png'
        alt='Sample Dashboard'
        borderRadius='10'
        boxShadow='md'
      />
    </Flex>
  </Flex>
);

export default About;
