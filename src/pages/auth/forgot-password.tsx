import {
  FormControl,
  Input,
  Center,
  Button,
  Heading,
  Box,
  Stack,
  Text,
  VStack,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";

export default function ForgotPassword() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Center mt={"200px"} bgColor="#d9d9d9">
      <Box w={"400px"} bg="white" borderRadius={"15px"} p="20px">
        <FormControl as={Stack} spacing={1.5}>
          <Center>
            <Heading as="h2">Logo</Heading>
          </Center>
          <Center>
            <Text>Forgot Password</Text>
          </Center>
          <Center>
            {" "}
            <Text>
              Remembered Password?{" "}
              <span style={{ fontWeight: "bold", color: "#7A60C6" }}>
                Login
              </span>
            </Text>
          </Center>
          <VStack spacing={8} align="stretch">
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="email"
                value={input}
                placeholder="Email"
                borderTop="0"
                borderLeft={0}
                borderRight="0"
                onChange={handleInputChange}
              />
              <InputRightElement onClick={handleClick}>
                <EmailIcon />
              </InputRightElement>
            </InputGroup>

            <Button bgColor="#7A60C6" color={"white"}>
              Request OTP
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </Center>
  );
}
