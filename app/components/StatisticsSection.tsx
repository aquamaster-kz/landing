"use client";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue(
        "brand.secondary.500",
        "brand.secondary.300"
      )}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function StatisticsSection() {
  return (
    <Box maxW="7xl" mx={"auto"} pb={20} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        pb={20}
        fontWeight={"bold"}
        textColor={useColorModeValue("brand.primary.500", "brand.primary.200")}
      >
        Почему мы?
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ base: 5, lg: 8 }}
        textColor={useColorModeValue("light.text", "dark.text")}
      >
        <StatsCard title={"Гарантия"} stat={"6 месяцев на все оборудование"} />
        <StatsCard
          title={"Возможность"}
          stat={"безусловного возврата - 14 дней"}
        />
        <StatsCard title={"Рассрочка"} stat={"2 месяца"} />
        <StatsCard title={"Обслуженных клиентов"} stat={"1 000 000"} />
      </SimpleGrid>
    </Box>
  );
}
