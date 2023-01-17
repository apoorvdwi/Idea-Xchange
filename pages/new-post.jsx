import {
  Button,
  Flex,
  Image,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useState } from 'react';

import { useGlobalContext } from '../context';

const randomstring = require('randomstring');

const NewPost = () => {
  const toast = useToast();
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState({ label: 'All', value: 'All' });
  const [loading, setLoading] = useState(false);
  const { user, databases } = useGlobalContext();

  const handleSubmit = async () => {
    setLoading(true);
    if (idea.trim() === '') {
      if (!toast.isActive('Idea cannot be empty')) {
        toast({
          id: 'Idea cannot be empty',
          title: 'Idea cannot be empty',
          position: 'bottom-left',
          status: 'error',
          isClosable: true,
        });
      }

      setLoading(false);
      return;
    }

    if (!user) {
      if (!toast.isActive('Login Required')) {
        toast({
          id: 'Login Required',
          title: 'Login Required',
          position: 'bottom-left',
          status: 'error',
          isClosable: true,
        });
      }

      setLoading(false);
      return;
    }

    try {
      const ideaId = randomstring.generate({
        length: 20,
        charset: 'alphanumeric',
      });

      const discussionId = randomstring.generate({
        length: 20,
        charset: 'alphanumeric',
      });

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        ideaId,
        {
          title: idea,
          upvotes: [],
          pay: [],
          userId: user.$id,
          username: user.name,
          discussionId,
          category: category.value,
        },
      );

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_DISCUSSIONS_ID,
        discussionId,
        {
          ideaId,
          comments: [],
        },
      );

      setLoading(false);
      setIdea('');
      setCategory({ label: 'All', value: 'All' });

      toast({
        id: 'Idea added successfully',
        title: 'Idea added successfully',
        position: 'bottom-left',
        status: 'success',
        isClosable: true,
      });
    } catch (err) {
      console.log(err);

      toast({
        id: 'Error occurred',
        title: 'Error occurred',
        position: 'bottom-left',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      gap='4%'
      width='75%'
      margin='auto'
      minH='88.5vh'
    >
      <Flex
        alignItems='center'
        justifyContent='center'
        p='7'
        h='fit-content'
        minW='48%'
        flexDir='column'
        bgColor='#f8f1fe'
        borderRadius='2xl'
      >
        <Text mb='5' color='brand.900' fontSize='2xl' fontWeight='bold'>
          Share your Idea
        </Text>
        <Textarea
          _focusVisible={{
            borderColor: 'brand.600',
            boxShadow: '0 0 0 1px #0B0014',
          }}
          placeholder='Describe your Idea'
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          mb='5'
          rows='10'
          resize='none'
          borderColor='brand.600'
        />
        <Select
          size='lg'
          chakraStyles={{
            container: (provided, state) => ({
              ...provided,
              width: '100%',
            }),
            control: (provided, state) => ({
              ...provided,
              bg: '#f6edfe',
              color: '#220D6D',
              borderColor: '#0B0014',
              borderWidth: '1px',
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
          value={category}
          onChange={(e) => setCategory(e)}
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
        <Button
          onClick={handleSubmit}
          isLoading={loading}
          h='45px'
          w='40%'
          mt='5'
        >
          Submit
        </Button>
      </Flex>
      <Image maxW='48%' src='/images/newPost.svg' alt='new post' />
    </Flex>
  );
};

export default NewPost;
