import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    100: '#FEFEFE',
    150: '#EDDAFD',
    200: '#D8B6FC',
    300: '#BE90F7',
    400: '#A673EF',
    500: '#8247E5',
    550: '#6433C4',
    600: '#0B0014',
    700: '#4A23A4',
    800: '#331684',
    900: '#220D6D',
  },
};

const theme = extendTheme({
  colors,
  config: { initialColorMode: 'light', useSystemColorMode: false },
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
        _hover: {
          bg: 'brand.400',
          color: 'brand.600',
        },
      },
      variants: {
        base: {
          bg: 'brand.500',
          color: 'brand.100',
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Tooltip: {
      baseStyle: {
        bg: 'brand.600',
        fontSize: 'xs',
      },
    },
  },
});

export default theme;
