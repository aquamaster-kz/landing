"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Container id="heroRef" maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("brand.primary.200", "brand.primary.500"),
                zIndex: -1,
              }}
              textColor={useColorModeValue(
                "brand.secondary.500",
                "brand.secondary.100"
              )}
            >
              Современные фильтры
            </Text>
            <br />
            <Text
              as={"span"}
              color={useColorModeValue(
                "brand.primary.500",
                "brand.primary.200"
              )}
            >
              для очистки воды
            </Text>
          </Heading>
          <Text color={useColorModeValue("light.text", "dark.text")}>
            Качественная очистка воды — залог здоровья и долголетия. Предлагаем
            самые современные фильтры для очистки воды «Аквафор», Aqualife,
            Aquavit, Hubert. Все они отличаются высокой эффективностью,
            увеличенным ресурсом фильтрующих элементов, а также доступной
            стоимостью. Мы поможем подобрать аппараты для фильтрации воды на
            профессиональном уровне, с учетом особенностей состава в каждом
            конкретном участке водогона.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"brand.primary.500"}
              bg={useColorModeValue("brand.primary.500", "brand.secondary.500")}
              textColor={"white"}
              _hover={{
                bg: useColorModeValue(
                  "brand.tertiary.300",
                  "brand.tertiary.500"
                ),
              }}
              leftIcon={
                isPlaying ? (
                  <FaPause color={"gray.300"} />
                ) : (
                  <FaPlay color={"gray.300"} />
                )
              }
              onClick={togglePlay}
            >
              {isPlaying ? "Остановить видео" : "Как это работает"}
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"340px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=Sa4tCwfybUQ"}
              playing={isPlaying}
              controls={true}
              volume={0.5}
              width={"100%"}
              height={"100%"}
              onPause={handlePause}
              onPlay={handlePlay}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
