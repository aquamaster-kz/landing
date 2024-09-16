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
} from "@chakra-ui/react";
import {
  AttachmentIcon,
  ChatIcon,
  PhoneIcon,
  TimeIcon,
} from "@chakra-ui/icons";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex align={"center"} justify={"center"} rounded={"full"} mb={5}>
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign={"center"}>
        {title}
      </Text>
      <Text color={"gray.600"} textAlign={"center"}>
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
        textColor={"rgb(22, 65, 148)"}
      >
        Сделать заказ проще
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <Feature
          icon={<Icon as={PhoneIcon} w={12} h={12} />}
          title={"1 ШАГ"}
          text={"Звонок по номеру телефона или письмо на электронную почту"}
        />
        <Feature
          icon={<Icon as={ChatIcon} w={12} h={12} />}
          title={"2 ШАГ"}
          text={"Обсуждение деталей заказа, консультации по необходимости"}
        />
        <Feature
          icon={<Icon as={AttachmentIcon} w={12} h={12} />}
          title={"3 ШАГ"}
          text={"Выбор способа оплаты и доставки"}
        />
        <Feature
          icon={<Icon as={TimeIcon} w={12} h={12} />}
          title={"4 ШАГ"}
          text={"Финальное оформление заказа и отправка его клиенту"}
        />
      </SimpleGrid>
    </Box>
  );
}
