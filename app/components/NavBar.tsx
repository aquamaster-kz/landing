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
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { trackEvent } from "../utils/analytics";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Links = [
  { text: "Главная", href: "#heroRef" },
  { text: "О нас", href: "#companyRef" },
  { text: "Популярные вопросы", href: "#FAQRef" },
  { text: "Контакты", href: "#contactRef" },
];

const NavLink = (props: Props) => {
  const { children, href } = props;

  const sendAnalytics = () => {
    trackEvent("Navigation", children);
  };

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
      onClick={sendAnalytics}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const colorToggleButtonHover = useColorModeValue(
    "brand.tertiary.200",
    "brand.secondary.500"
  );
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
            variant={"ghost"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box mr={4}>АКВАМАСТЕР</Box>
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
          <Button
            variant={"solid"}
            size={{ base: "sm", md: "sm", lg: "sm" }}
            bg={"brand.secondary.500"}
            mr={4}
            _hover={{
              bg: "brand.tertiary.300",
            }}
            textColor={"white"}
            rightIcon={<ExternalLinkIcon />}
            onClick={handleClick}
            whiteSpace={{ base: "normal", md: "nowrap" }}
            width={"auto"}
            ml={"auto"}
          >
            Интернет-магазин
          </Button>
          <Button
            onClick={toggleColorMode}
            size={{ base: "sm", md: "sm", lg: "sm" }}
            bg={backgroundColor}
            mr={4}
            _hover={{
              bg: colorToggleButtonHover,
            }}
            width={"auto"}
            display={{ base: "none", md: "inline-flex" }}
          >
            {colorMode === "light" ? (
              <BsMoonStarsFill size={"20px"} />
            ) : (
              <BsSun color={"yellow"} size={"20px"} />
            )}
          </Button>
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
            <Button
              onClick={toggleColorMode}
              size={{ base: "md", md: "md", lg: "md" }}
              bg={backgroundColor}
              mt={4}
              _hover={{
                bg: colorToggleButtonHover,
              }}
              width={"auto"}
            >
              {colorMode === "light" ? (
                <BsMoonStarsFill size={"20px"} />
              ) : (
                <BsSun color={"yellow"} size={"20px"} />
              )}
            </Button>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
