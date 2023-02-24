import React, { ReactNode } from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  if (router.pathname.includes("/login")) return children;
  if (router.pathname.includes("/register")) return children;
  if (router.pathname.includes("/forgot-password")) return children;
  if (router.pathname.includes("/reset-password")) return children;
  return (
    // <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
    <Box minH="100vh" bg={"gray.100"}>
      <NavBar />
      <SideBar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
