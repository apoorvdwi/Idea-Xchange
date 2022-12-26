import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Flex align='center' gap='2'>
        <Image src='/images/logo.svg' h={['2rem', '3rem']} alt='Logo' />
      </Flex>
    </Link>
  );
};

export default Logo;
