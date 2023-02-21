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
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";

export default function Login() {
  const [input, setInput] = useState("");
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const handleInputChange = (e: any) => setInput(e.target.value);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const isError = input === "";
  return (
    <Center mt={"200px"} bgColor="#d9d9d9">
      <Box w={"400px"} bg="white" borderRadius={"15px"} p="20px">
        <FormControl as={Stack} spacing={1.5}>
          <Center>
            <Heading as="h2">Logo</Heading>
          </Center>
          <Center>
            <Text>Sign in!</Text>
          </Center>
          <VStack spacing={8} align="stretch">
            <Input
              type="email"
              value={input}
              onChange={handleInputChange}
              borderTop="0"
              borderLeft={0}
              borderRight="0"
              placeholder="Email"
            />
            <Input
              type="password"
              value={input}
              onChange={handleInputChange}
              borderTop="0"
              borderLeft={0}
              borderRight="0"
              placeholder="Password"
            />
            <Checkbox
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
            >
              Remember Me
            </Checkbox>
            <Button bgColor="#7A60C6" color={"white"}>
              Sing into Account
            </Button>
          </VStack>
          <Text>
            Forgot password?{" "}
            <span style={{ fontWeight: "bold", color: "#7A60C6" }}>Reset</span>
          </Text>
        </FormControl>
      </Box>
    </Center>
  );
}
