import React, { ReactNode } from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Text,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { IconType } from "react-icons";
import { useState } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
interface LinkItemProps {
  name: string;
  //   icon: ComponentWithAs<"svg", IconProps>;
  href: string;
}
const DashboardLinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", href: "/dashboard", icon: AiOutlineDashboard },
];
const PurchasingLinkItems: Array<LinkItemProps> = [
  { name: "Purchasing", href: "/purchasing", icon: SlBasket },
  { name: "Vendor Mgt", href: "/purchasing/vendor-mgt", icon: SlBasket },
  {
    name: "Stock Transfer",
    href: "/purchasing/stock-transfer",
    icon: SlBasket,
  },
  {
    name: "Receiving Orders",
    href: "/purchasing/receiving-orders",
    icon: SlBasket,
  },
];
const ProductLinkItems: Array<LinkItemProps> = [
  { name: "Product", href: "#", icon: FiCompass },
];

const SalesLinkItems: Array<LinkItemProps> = [
  { name: "Sales", href: "/sales", icon: FiStar },
];
const ReportLinkItems: Array<LinkItemProps> = [
  { name: "Report", href: "/report", icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SideBar({ onClose, ...rest }: SidebarProps) {
  const [peopleMenuVisible, setPeopleMenuVisible] = useState(false);
  return (
    <Box
      borderRight="1px"
      borderRightColor="gray.300"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="#7A60C6"
        >
          Welcome!
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {DashboardLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      {PurchasingLinkItems.map(
        (link, index) =>
          !(index !== 0 && !peopleMenuVisible) && (
            <NavItem
              key={link.name}
              icon={link.icon}
              // href={link.href}
              peopleMenuVisible={peopleMenuVisible}
              setPeopleMenuVisible={setPeopleMenuVisible}
              pl={index !== 0 ? "10" : ""}
              onClick={() => {
                if (index === 0) {
                  setPeopleMenuVisible(!peopleMenuVisible);
                }
              }}
            >
              {link.name}
            </NavItem>
          )
      )}
      {ProductLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      {SalesLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      {ReportLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  peopleMenuVisible?: boolean;
  setPeopleMenuVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  icon: IconType;
  children: ReactNode;
}
const NavItem = ({
  icon,
  children,
  setPeopleMenuVisible,
  peopleMenuVisible,
  ...rest
}: NavItemProps) => {
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
      color={"#7A60C6"}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#7A60C6",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            color="#7A60C6"
            fontSize="16"
            _groupHover={{
              color: "white",
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
