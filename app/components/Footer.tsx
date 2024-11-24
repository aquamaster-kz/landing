"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Box
            as="a"
            href={"#heroRef"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue(
                "brand.tertiary.200",
                "brand.secondary.500"
              ),
            }}
          >
            Главная
          </Box>
          <Box
            as="a"
            href={"#companyRef"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue(
                "brand.tertiary.200",
                "brand.secondary.500"
              ),
            }}
          >
            О нас
          </Box>
          <Box
            as="a"
            href={"#FAQRef"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue(
                "brand.tertiary.200",
                "brand.secondary.500"
              ),
            }}
          >
            Популярные вопросы
          </Box>
          <Box
            as="a"
            href={"#contactRef"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue(
                "brand.tertiary.200",
                "brand.secondary.500"
              ),
            }}
          >
            Контакты
          </Box>
        </Stack>
        <Text>© 2009 - {currentYear} Аквамастер. Все права защищены.</Text>
      </Container>
    </Box>
  );
}
