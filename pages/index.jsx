import { Flex } from '@chakra-ui/react';

import About from '../components/Landing/About';
import Footer from '../components/Landing/Footer';
import Hero from '../components/Landing/Hero';
import ProcessBlock from '../components/Landing/ProcessBlock';

const Home = () => (
  <Flex flexDirection='column' bg='brand.100' h='100%'>
    <Hero />
    {/* Process Flow */}
    <Flex
      flexDirection='column'
      alignItems='center'
      color='brand.600'
      mt={['8', null]}
    >
      <About />
      <ProcessBlock
        flexD='row'
        imageSrc='/images/explore.svg'
        animatedHead='Explore'
        nonAnimatedHead=' Ideas'
        content="Welcome to the world of endless ideas and limitless creativity! Our platform offers an online community where you can discover, explore, and share unique and innovative ideas posted by people from all over the globe. You'll find a diverse array of topics, from scientific breakthroughs to artistic endeavors, and everything in between. Whether you're looking for inspiration, want to contribute your own thoughts, or just enjoy learning about new concepts, this platform is the perfect place for you. Join us today and be a part of a growing community of curious minds who are constantly pushing the boundaries of what's possible!"
      />
      <ProcessBlock
        flexD='row-reverse'
        imageSrc='/images/validate.svg'
        animatedHead='Validate'
        nonAnimatedHead=' Your Idea'
        content="Introducing a platform where you can share your innovative ideas and get valuable feedback from a community of diverse and knowledgeable individuals. Our platform provides a space where you can post your thoughts, concepts, and proposals and receive constructive comments and suggestions from other members. Whether you're an individual with a passion for creativity or a professional seeking validation for your work, this platform offers a supportive and inclusive environment to help bring your ideas to life. With a community of enthusiasts from around the world, you'll have the opportunity to get a fresh perspective, and refine your ideas. Join us now and take the first step towards turning your vision into reality."
      />
    </Flex>
    <Footer />
  </Flex>
);

export default Home;
