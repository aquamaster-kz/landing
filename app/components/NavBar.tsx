"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import ColorModeToggle from "./ColorModeToggle";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Links = [
  { text: "Главная", href: "#heroRef" },
  { text: "О нас", href: "#companyRef" },
  { text: "Контакты", href: "#contactRef" },
];

const NavLink = (props: Props) => {
  const { children, href } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("brand.tertiary.200", "brand.secondary.500"),
      }}
      href={href}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );

  const toast = useToast();

  const handleClick = () => {
    toast({
      title: "Наш онлайн-магазин скоро откроется!",
      description:
        "Следите за обновлениями и будьте первыми в курсе новых товаров и предложений.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box bg={backgroundColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>АКВАМАСТЕР</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              size={"sm"}
              bg={"brand.secondary.500"}
              mr={4}
              _hover={{
                bg: "brand.tertiary.300",
              }}
              textColor={"white"}
              rightIcon={<ExternalLinkIcon />}
              onClick={handleClick}
            >
              Интернет-магазин
            </Button>
            <ColorModeToggle />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
