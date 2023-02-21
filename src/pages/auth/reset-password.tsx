import {
  FormControl,
  Input,
  Center,
  Button,
  Heading,
  Box,
  Stack,
  InputRightElement,
  InputGroup,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function ResetPassword() {
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
            <Text>Reset Password</Text>
          </Center>
          <VStack spacing={8} align="stretch">
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="email"
                value={input}
                placeholder="OTP Code"
                borderTop="0"
                borderLeft={0}
                borderRight="0"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="New Password"
                borderTop="0"
                borderLeft={0}
                borderRight="0"
                onChange={handleInputChange}
              />
              <InputRightElement onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                borderTop="0"
                borderLeft={0}
                borderRight="0"
                placeholder="Confirm Password"
                mb="10px"
                onChange={handleInputChange}
              />
              <InputRightElement onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
            <Button bgColor="#7A60C6" color={"white"}>
              Reset Password
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </Center>
  );
}
