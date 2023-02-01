import { Flex } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = ({ footerRef }) => {
  return (
    <Flex
      ref={footerRef}
      flexDir='column'
      alignItems='center'
      color='brand.300'
      fontSize='sm'
      bgColor='brand.600'
      mt='8'
    >
      <Flex
        alignItems='center'
        justifyContent='center'
        w='100%'
        px={['7', '10', '16']}
        py={['6', '8', '10']}
      >
        <Flex
          w='50%'
          flexDir='column'
          justifyContent='space-between'
          alignItems='center'
          mr={['4', '4', null]}
          color='brand.100'
        >
          <Flex fontSize={['md', 'lg']} fontWeight='semibold' m='2'>
            Idea Xchange
          </Flex>
          <Flex fontSize={['sm', 'md']} textAlign='center'>
            Finding and Sharing Ideas Simplified
          </Flex>
          <Flex
            mt={['0', '2', '4']}
            py='4'
            justifyContent='space-between'
            w={['100%', '70%', '60%', '45%', '30%']}
          >
            <a
              href='mailto:apoorvd14@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope size={20} style={{ cursor: 'pointer' }} />{' '}
            </a>
            <a
              href='https://github.com/apoorvdwi/Idea-Xchange'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ cursor: 'pointer' }} />
            </a>
            <a
              href='https://linkedin.com/in/apoorvdwi'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin size={20} style={{ cursor: 'pointer' }} />
            </a>
            <a
              href='https://twitter.com/Apoorvdwi'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter size={20} style={{ cursor: 'pointer' }} />
            </a>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w='100%'
        bgColor='brand.150'
        color='brand.600'
        p='2'
        justifyContent='center'
      >
        Made with ❤️ by&nbsp;
        <a
          style={{ fontWeight: '500', color: '#0B0014' }}
          href='https://apoorvdwivedi.live/'
          target='_blank'
          rel='noreferrer'
        >
          Apoorv Dwivedi
        </a>
      </Flex>
    </Flex>
  );
};

export default Footer;
