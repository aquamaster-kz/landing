"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcInTransit,
  FcMoneyTransfer,
  FcPhone,
} from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        align={"center"}
        justify={"center"}
        rounded={"full"}
        mb={5}
        color={useColorModeValue("brand.secondary.500", "brand.secondary.200")}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign={"center"}>
        {title}
      </Text>
      <Text
        color={useColorModeValue("light.text", "dark.text")}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function OrderFeatures() {
  return (
    <Box maxW="7xl" mx={"auto"} py={20} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        pb={20}
        fontWeight={"bold"}
        textColor={useColorModeValue("brand.primary.500", "brand.primary.200")}
      >
        Сделать заказ проще
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <Feature
          icon={<Icon as={FcPhone} w={12} h={12} />}
          title={"1 ШАГ"}
          text={"Звонок по номеру телефона или письмо на электронную почту"}
        />
        <Feature
          icon={<Icon as={FcAssistant} w={12} h={12} />}
          title={"2 ШАГ"}
          text={"Обсуждение деталей заказа, консультации по необходимости"}
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={12} h={12} />}
          title={"3 ШАГ"}
          text={"Выбор способа оплаты и доставки"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={12} h={12} />}
          title={"4 ШАГ"}
          text={"Финальное оформление заказа и отправка его клиенту"}
        />
      </SimpleGrid>
    </Box>
  );
}
