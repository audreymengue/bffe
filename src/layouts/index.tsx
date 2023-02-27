import type { ReactNode } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function ViewLayout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const { onClose } = useDisclosure();
  const router = useRouter();
  if (router.pathname.includes("/login")) return children;
  if (router.pathname.includes("/register")) return children;
  if (router.pathname.includes("/forgot-password")) return children;
  if (router.pathname.includes("/reset-password")) return children;

  return (
    <Box minH="100vh" bg={"#F7F7F7"}>
      {/* <NavBar /> */}
      {/* mobilenav */}
      {/* <SideBar onClose={onClose} title={title} /> */}
      <Box ml={60} p="4">
        {children}
      </Box>
    </Box>
  );
}
