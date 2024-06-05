import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, Textarea, Button, List, ListItem, Flex, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const Index = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setSubscriptionSuccess(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscriptionSubmit = () => {
    setIsSubmitting(true);
    if (validateEmail(email)) {
      setTimeout(() => {
        setSubscriptionSuccess(true);
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    } else {
      setEmailError("Please enter a valid email address.");
      setIsSubmitting(false);
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
        {/* Newsletter Subscription Section */}
        <Box w="100%" mt={10} p={5} borderWidth="1px" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Subscribe to Our Newsletter
          </Heading>
          <Text fontSize="md" mb={4} textAlign="center">
            Get the latest updates and articles directly in your inbox.
          </Text>
          <FormControl isInvalid={emailError} mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && <FormErrorMessage>{emailError}</FormErrorMessage>}
          </FormControl>
          <Button
            colorScheme="teal"
            onClick={handleSubscriptionSubmit}
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Subscribe
          </Button>
          {subscriptionSuccess && (
            <Text color="green.500" mt={4}>
              Subscription successful! Thank you for subscribing.
            </Text>
          )}
        </Box>

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