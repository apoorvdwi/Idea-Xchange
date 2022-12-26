import { Box, Flex } from '@chakra-ui/react';

const TopBorder = ({ borderH }) => (
  <Flex>
    <Box
      w='100%'
      h={borderH}
      bg='linear-gradient(90deg, #4A23A4 0%, #8247E5 25%, #A673EF 50%, #BE90F7 75%, #EDDAFD 100%);'
    />
  </Flex>
);

export default TopBorder;
