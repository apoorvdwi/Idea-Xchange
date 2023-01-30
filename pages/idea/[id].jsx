import { Box, Flex, IconButton, Input, Text, useToast } from '@chakra-ui/react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import IdeaContainer from '../../components/Explore/IdeaContainer';
import CommentContainer from '../../components/IdeaPage/CommentContainer';
import { useGlobalContext } from '../../context';

const IdeaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, databases } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [idea, setIdea] = useState(null);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const handleAddComment = (e) => {
    e.preventDefault();

    const commentObj = {
      content: input.trim(),
      timestamp: moment(),
      name: user.name,
    };

    databases
      .getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_DISCUSSIONS_ID,
        idea.discussionId,
      )
      .then((res) => {
        const newComments = [JSON.stringify(commentObj), ...res.comments];
        console.log(newComments);
        setComments(
          newComments
            .map((item) => JSON.parse(item))
            .sort((a, b) => moment(b.timestamp).diff(a.timestamp)),
        );
        databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_DISCUSSIONS_ID,
          idea.discussionId,
          {
            comments: newComments,
          },
        );

        if (!toast.isActive('Comment added')) {
          toast({
            id: 'Comment added',
            title: 'Comment added',
            position: 'bottom-left',
            status: 'success',
            isClosable: true,
          });
        }
        setInput('');
      });
  };

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    databases
      .getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_IDEAS_ID,
        id,
      )
      .then((res) => {
        setIdea(res);
        databases
          .getDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID,
            process.env.NEXT_PUBLIC_DISCUSSIONS_ID,
            res.discussionId,
          )
          .then((res2) => {
            setComments(
              (res2.comments || [])
                .map((item) => JSON.parse(item))
                .sort((a, b) => moment(b.timestamp).diff(a.timestamp)),
            );
            setLoading(false);
          });
      });
  }, [id]);

  return (
    <Box w='75%' margin='auto'>
      {idea && (
        <IdeaContainer
          author={idea.username}
          timeDiff={moment(idea.$createdAt).from(moment())}
          content={idea.title}
          category={idea.category}
          upvotes={idea.upvotes}
          upvotesCount={idea.likesCount || 0}
          pay={idea.pay}
          payCount={idea.payCount}
          noShow
          noLink
        />
      )}
      {comments && comments.length > 0 && (
        <Text color='brand.900' fontSize='2xl' fontWeight='bold'>
          Comments
        </Text>
      )}
      {comments &&
        comments.length > 0 &&
        comments.map((item, index) => (
          <CommentContainer key={index} {...item} />
        ))}
      <form onSubmit={handleAddComment}>
        <Flex mb='5' alignItems='center' gap='4'>
          <Input
            disabled={!user}
            borderRadius='xl'
            _focusVisible={{
              borderColor: 'brand.600',
              boxShadow: '0 0 0 1px #0B0014',
            }}
            placeholder='Write your comment'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            borderColor='brand.600'
          />
          <IconButton disabled={!user} type='submit' borderRadius='xl'>
            <AiOutlineSend color='#fff' size={20} />
          </IconButton>
        </Flex>
      </form>
    </Box>
  );
};

export default IdeaPage;
