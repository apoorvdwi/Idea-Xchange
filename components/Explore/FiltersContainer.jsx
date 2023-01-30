import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useRouter } from 'next/navigation';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { SiClockify } from 'react-icons/si';
import { TbArrowsSort } from 'react-icons/tb';

const FiltersContainer = ({ filters, setFilters }) => {
  const router = useRouter();

  return (
    <Flex
      mt='7'
      left='12.5%'
      height='fit-content'
      position='fixed'
      flexDir='column'
      justify='flex-start'
      align='left'
      w='18%'
    >
      <Button
        onClick={() => router.push('/new-post')}
        bg='brand.200'
        color='brand.900'
        py='3'
        height='fit-content'
        w='full'
        leftIcon={<FiShare />}
      >
        Share your Idea
      </Button>
      <Flex gap='1' align='center' mt='5'>
        <Text fontWeight='semibold' fontSize='md'>
          Sort By
        </Text>
        <TbArrowsSort size='20' />
      </Flex>
      <Button
        bg={filters.sort === 'Latest' ? 'brand.900' : '#f6edfe'}
        _hover={filters.sort === 'Latest' ? {} : { bg: 'brand.200' }}
        color={filters.sort === 'Latest' ? '#fff' : 'brand.900'}
        onClick={() => {
          setFilters((prev) => ({ ...prev, sort: 'Latest' }));
        }}
        py='3'
        height='fit-content'
        justifyContent='left'
        mt='3'
        w='full'
        leftIcon={<SiClockify />}
      >
        Latest
      </Button>
      <Button
        py='3'
        height='fit-content'
        bg={filters.sort === 'Likes' ? 'brand.900' : '#f6edfe'}
        _hover={filters.sort === 'Likes' ? {} : { bg: 'brand.200' }}
        color={filters.sort === 'Likes' ? '#fff' : 'brand.900'}
        onClick={() => {
          setFilters((prev) => ({ ...prev, sort: 'Likes' }));
        }}
        justifyContent='left'
        mt='3'
        w='full'
        leftIcon={<BsSuitHeartFill />}
      >
        Likes
      </Button>
      <Button
        py='3'
        height='fit-content'
        bg={filters.sort === 'Money' ? 'brand.900' : '#f6edfe'}
        _hover={filters.sort === 'Money' ? {} : { bg: 'brand.200' }}
        color={filters.sort === 'Money' ? '#fff' : 'brand.900'}
        onClick={() => {
          setFilters((prev) => ({ ...prev, sort: 'Money' }));
        }}
        justifyContent='left'
        mt='3'
        w='full'
        leftIcon={<GiReceiveMoney />}
      >
        Take my money
      </Button>
      <Flex gap='1' align='center' mt='5' mb='3'>
        <Text fontWeight='semibold' fontSize='md'>
          Filter By
        </Text>
        <FaFilter size='15' />
      </Flex>
      <Select
        chakraStyles={{
          control: (provided, state) => ({
            ...provided,
            bg: '#f6edfe',
            color: '#220D6D',
            _hover: {
              bg: '#D8B6FC',
            },
            ...(state.isFocused ? { borderColor: '#0B0014 !important' } : {}),
          }),
          placeholder: (provided, state) => ({
            ...provided,
            color: '#220D6D',
            fontWeight: 'semibold',
            fontSize: 'md',
          }),
          option: (provided, state) => ({
            ...provided,
            color: '#220D6D',
            ...(state.isSelected ? { bg: '#D8B6FC !important' } : {}),
            ...(state.isFocused ? { bg: '#f6edfe' } : {}),
            _hover: {
              bg: '#f6edfe',
            },
          }),
        }}
        variant='filled'
        selectedOptionColor='purple'
        useBasicStyles
        closeMenuOnSelect
        value={{ label: filters.category, value: filters.category }}
        onChange={(e) => setFilters((prev) => ({ ...prev, category: e.value }))}
        options={[
          'All',
          'Producitivity',
          'Social',
          'Tech',
          'Education',
          'Health',
          'Tool',
          'Fun',
          'Entertainment',
          'Extension',
          'Buisness',
          'Design',
          'Others',
        ].map((item) => ({ value: item, label: item }))}
      />
    </Flex>
  );
};

export default FiltersContainer;
