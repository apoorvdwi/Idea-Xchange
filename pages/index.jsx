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
        content='pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam'
      />
      <ProcessBlock
        flexD='row-reverse'
        imageSrc='/images/validate.svg'
        animatedHead='Validate'
        nonAnimatedHead=' Your Idea'
        content='pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam'
      />
    </Flex>
    <Footer />
  </Flex>
);

export default Home;
