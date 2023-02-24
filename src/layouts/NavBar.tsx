import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiBell, FiChevronDown } from "react-icons/fi";
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"white"} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Logo
            </Text>
          </HStack>
          <InputGroup w="400px">
            <Input type="tel" placeholder="Search..." rounded={"lg"} />
          </InputGroup>
          <HStack spacing={{ base: "0", md: "6" }}>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">Justina Clark</Text>
                      <Text fontSize="xs" color="gray.600">
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
