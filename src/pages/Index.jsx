import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
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
      </VStack>
    </Container>
  );
};

export default Index;