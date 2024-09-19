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
  useColorModeValue,
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
  const textColor = useColorModeValue("light.text", "dark.text");
  return (
    <Box
      id="companyRef"
      maxW="7xl"
      mx={"auto"}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        py={20}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          textColor={useColorModeValue(
            "brand.primary.500",
            "brand.primary.200"
          )}
        >
          АКВАМАСТЕР — очистка воды на профессиональном уровне
        </chakra.h1>
        <Text color={textColor}>
          Наша компания существует с 2007 года и зарекомендовала себя как
          надежный поставщик высококачественных фильтров для воды.
        </Text>
        <Text color={textColor}>
          Мы доставим ваш заказ по Астане и по Казахстану, осуществим подробную
          консультацию по товарам и поможем с выбором.
        </Text>
      </Stack>

      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.500"} px={2}>
                <Icon as={feature.icon} />
              </Box>
              <VStack align={"start"}>
                <Text color={textColor} fontWeight={600} fontSize={"lg"}>
                  {feature.title}
                </Text>
                <Text color={textColor}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
