"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Большой выбор",
    icon: CheckIcon,
    text: "В нашем каталоге представлены различные аппараты для фильтрации воды, а также картриджи. Проведя исходный анализ, можно скомпоновать идеальную систему по индивидуальным параметрам.",
  },
  {
    id: 2,
    title: "Доступные цены",
    icon: CheckIcon,
    text: "Наша продукция обладает высоким качеством, при этом стоимость всей продукции является весьма доступной. Это достигается за счет прямых поставок от производителей, с многими из которых заключены дилерские договора.",
  },
  {
    id: 3,
    title: "Рассрочка",
    icon: CheckIcon,
    text: "Мы понимаем, насколько важна очистка воды для здоровья и жизни каждого, поэтому идем на встречу тем, кто не может сразу оплатить полную стоимость аппарата для фильтрации воды. Рассрочка на 2 месяца доступна всем клиентам.",
  },
  {
    id: 4,
    title: "Гарантия",
    icon: CheckIcon,
    text: "На все приобретенное оборудование: фильтры для очистки воды, картриджи и т.д распространяется гарантия на условиях производителей, а также регламентируемая нормами действующего законодательства.",
  },
];

export default function CompanyFeatures() {
  return (
    <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={20}
          fontWeight={"bold"}
          textColor={"rgb(22, 65, 148)"}
        >
          АКВАМАСТЕР — очистка воды на профессиональном уровне
        </chakra.h1>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={feature.icon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
