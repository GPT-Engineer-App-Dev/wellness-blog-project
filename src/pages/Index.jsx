import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, Textarea, Button, List, ListItem, Flex } from "@chakra-ui/react";

const Index = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Your Health and Wellness Blog
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/health-wellness.jpg" alt="Health and Wellness" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover tips, articles, and resources to help you live a healthier and happier life.
        </Text>
        <Link href="/articles" color="teal.500" fontSize="lg">
          Read Our Latest Articles
        </Link>
        <Box w="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Comments
          </Heading>
          <Textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment here..."
            size="sm"
            mb={4}
          />
          <Button colorScheme="teal" onClick={handleCommentSubmit}>
            Submit
          </Button>
          <List spacing={3} mt={6}>
            {comments.map((comment) => (
              <ListItem key={comment.id} p={3} border="1px" borderColor="gray.200" borderRadius="md">
                <Flex justify="space-between">
                  <Text>{comment.text}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {comment.timestamp}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;