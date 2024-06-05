import { Container, Box, VStack, HStack, Text, Input, Button, Link, IconButton, Image } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaUpload, FaEye, FaEnvelope, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <HStack width="100%" spacing={0} align="stretch">
        {/* Left Section */}
        <Box flex="1" bg="white" p={10} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Image src="/path/to/logo.png" alt="FINOTIC" mb={10} />
          <VStack spacing={6} align="stretch" width="100%">
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <Text fontSize="lg" fontWeight="bold">CURRENT BALANCE</Text>
              <Text fontSize="3xl" color="blue.500">$24,359</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <Text fontSize="lg" fontWeight="bold">34% Food</Text>
              <Box as="span" display="inline-block" width="100px" height="100px" bg="blue.500" borderRadius="full" />
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <IconButton aria-label="Upload" icon={<FaUpload />} size="lg" mb={4} />
              <Text fontSize="lg" fontWeight="bold">New transaction</Text>
              <Text>or upload .xls file</Text>
            </Box>
          </VStack>
        </Box>

        {/* Right Section */}
        <Box flex="1" bg="gray.50" p={10} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <VStack spacing={6} align="stretch" width="100%">
            <Text fontSize="2xl" fontWeight="bold">Welcome back!</Text>
            <Text>Start managing your finance faster and better</Text>
            <Input placeholder="you@example.com" size="lg" icon={<FaEnvelope />} />
            <Input placeholder="At least 8 characters" size="lg" type="password" icon={<FaLock />} />
            <Link color="blue.500" alignSelf="flex-end">Forgot password?</Link>
            <Button colorScheme="blue" size="lg" width="100%">Login</Button>
            <Text textAlign="center">or</Text>
            <HStack spacing={4} justify="center">
              <IconButton aria-label="Login with Google" icon={<FaGoogle />} size="lg" />
              <IconButton aria-label="Login with Facebook" icon={<FaFacebook />} size="lg" />
            </HStack>
            <Text textAlign="center">
              Don’t you have an account? <Link color="blue.500">Sign Up</Link>
            </Text>
          </VStack>
        </Box>
      </HStack>
      <Text mt={10}>&copy; 2022 ALL RIGHTS RESERVED</Text>
    </Container>
  );
};

export default Index;