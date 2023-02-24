import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { IconType } from "react-icons";
import { useState } from "react";
import { useRouter } from "next/router";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: AiOutlineDashboard },
  { name: "Purchasing", icon: SlBasket },
  { name: "Product", icon: FiCompass },
  { name: "Sales", icon: FiStar },
  { name: "Reports", icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SideBar({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      transition="3s ease"
      bg={"#7A60C6"}
      borderRight="1px"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const [toggleChevron, setToggleChevron] = useState(true);
  const changeBtnState = () => {
    setToggleChevron(!toggleChevron);
  };

  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      fontWeight="bold"
      color={"white"}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "white",
          color: "#7A60C6",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "#7A60C6",
            }}
            as={icon}
          />
        )}
        {children}
        <Box onClick={changeBtnState}>
          {" "}
          {toggleChevron ? (
            <Box fontSize="30px" ml="12px">
              <BiChevronDown />
            </Box>
          ) : (
            <Box fontSize="30px" ml="12px">
              <BiChevronUp />
            </Box>
          )}
        </Box>
      </Flex>
    </Link>
  );
};
