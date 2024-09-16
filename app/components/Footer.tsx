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
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
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
          <Box as="a" href={"#"}>
            Главная
          </Box>
          <Box as="a" href={"#"}>
            О нас
          </Box>
          <Box as="a" href={"#"}>
            Блог
          </Box>
          <Box as="a" href={"#"}>
            Контакты
          </Box>
        </Stack>
        <Text>© 2007 - {currentYear} Аквамастер. Все права защищены.</Text>
      </Container>
    </Box>
  );
}
