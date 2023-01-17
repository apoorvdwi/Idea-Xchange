import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiLogOut, FiShare } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useGlobalContext } from '../../context';
import TopBorder from '../Landing/TopBorder';
import Logo from './Logo';

const Navbar = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout, loginWithGoogle, user } = useGlobalContext();

  useEffect(() => {
    const isSticky = () => {
      setSticky(Boolean(window.scrollY >= 15));
    };

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <>
      <TopBorder borderH='0.5rem' />
      <Flex
        py='4'
        px={['8', '16', '20', '10%']}
        justifyContent='space-between'
        alignItems='center'
        position='sticky'
        top='0'
        zIndex='10'
        bgColor='brand.100'
        boxShadow={sticky ? '0px 19px 14px -17px rgba(0,0,0,0.1)' : 'none'}
      >
        <Logo />

        <Flex alignItems='center' display={['none', 'none', 'flex']} ml='auto'>
          {user && (
            <Link href='/my-ideas'>
              <Text
                ml={['1', '4', '4', '8', '12']}
                fontWeight='bold'
                cursor='pointer'
                fontSize='18px'
                _hover={{ color: 'brand.550' }}
              >
                My Ideas
              </Text>
            </Link>
          )}
          {((router.pathname !== '/' && router.pathname !== '/explore') ||
            !user) && (
            <Link href='/explore'>
              <Text
                ml={['1', '4', '4', '8', '12']}
                fontWeight='bold'
                cursor='pointer'
                fontSize='18px'
                _hover={{ color: 'brand.550' }}
              >
                Explore
              </Text>
            </Link>
          )}
          {user && (
            <Link href='/new-post'>
              <Text
                ml={['1', '4', '4', '8', '12']}
                fontWeight='bold'
                cursor='pointer'
                fontSize='18px'
                _hover={{ color: 'brand.550' }}
              >
                Share Idea
              </Text>
            </Link>
          )}
          {!user ? (
            <Button onClick={loginWithGoogle} ml={['1', '4', '4', '8', '12']}>
              <Flex align='center' justify='center'>
                <FiShare style={{ marginRight: '10px' }} />
                Share Idea
              </Flex>
            </Button>
          ) : (
            <Flex
              onClick={logout}
              align='center'
              justify='center'
              cursor='pointer'
              fontSize='18px'
              gap='2'
              _hover={{ color: 'brand.550' }}
              ml={['1', '4', '4', '8', '12']}
            >
              {user.name} <FiLogOut size='20' />
            </Flex>
          )}
        </Flex>
        <IconButton
          aria-label='Hamburger'
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          display={['flex', 'flex', 'none']}
        />
        <Drawer
          placement='right'
          size='xs'
          onClose={onClose}
          isOpen={isOpen}
          returnFocusOnClose={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton top='4' _focus={{}} />
            <DrawerHeader
              borderBottomWidth='1px'
              color='brand.500'
              fontSize={['lg', 'lg', 'xl']}
            >
              Idea Xchange
            </DrawerHeader>
            <DrawerBody fontSize={['sm', 'md', 'md']}>
              <Box mb='3' cursor='pointer' _hover={{ color: 'brand.550' }}>
                Explore Ideas
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
