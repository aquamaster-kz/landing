"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  chakra,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FAQ() {
  return (
    <Flex
      w={"auto"}
      minH={"auto"}
      align={"space-between"}
      justify={"space-between"}
      py={20}
    >
      <Container maxW={"container.xl"}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          textColor={"rgb(22, 65, 148)"}
          pb={20}
        >
          Часто задаваемые вопросы?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Accordion allowMultiple rounded="lg">
              <AccordionItem>
                <AccordionButton
                  sx={{
                    "&:before": {
                      display: "none", // Hide the divider line
                    },
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    1. Какие существуют виды фильтров для воды?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <UnorderedList color="gray.600">
                    <ListItem>
                      Механические фильтры – очищают воду от крупных частиц,
                      таких как песок, ржавчина, грязь.
                    </ListItem>
                    <ListItem>
                      Угольные фильтры – удаляют хлор, органические вещества, и
                      улучшают вкус и запах воды.
                    </ListItem>
                    <ListItem>
                      Обратноосмотические фильтры – очищают воду на молекулярном
                      уровне, удаляя даже мельчайшие загрязнения, включая соли и
                      бактерии.
                    </ListItem>
                    <ListItem>
                      Ультрафиолетовые фильтры – уничтожают бактерии и вирусы,
                      используя ультрафиолетовое излучение.
                    </ListItem>
                    <ListItem>
                      Ионообменные фильтры – устраняют соли тяжёлых металлов и
                      смягчают воду.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    2. Какой фильтр выбрать для квартиры?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Выбор фильтра зависит от качества воды, поступающей в
                    квартиру. Если вода содержит много механических загрязнений
                    (ржавчина, песок), подойдёт механический фильтр. Для воды с
                    неприятным запахом и привкусом — угольный фильтр. Если вы
                    хотите максимальной очистки, лучше выбрать фильтр с системой
                    обратного осмоса.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    3. Как часто нужно менять картриджи в фильтрах?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Частота замены зависит от типа фильтра и качества воды.
                    Обычно:
                  </Text>
                  <UnorderedList color="gray.600">
                    <ListItem>
                      Механические и угольные фильтры меняют каждые 3-6 месяцев.
                    </ListItem>
                    <ListItem>
                      Мембраны обратного осмоса служат от 1 до 2 лет.
                    </ListItem>
                    <ListItem>
                      Ионообменные смолы и ультрафиолетовые лампы требуют замены
                      каждые 12 месяцев.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    4. Как понять, что фильтр пора менять?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Признаки того, что фильтр нужно заменить:
                  </Text>
                  <UnorderedList color="gray.600">
                    <ListItem>Замедленный поток воды.</ListItem>
                    <ListItem>
                      Появление запаха или изменения вкуса воды.
                    </ListItem>
                    <ListItem>
                      Возникновение накипи на чайнике или бытовых приборах.
                    </ListItem>
                    <ListItem>
                      Если вы замечаете ухудшение качества воды.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    5. Можно ли самому установить фильтр?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Да, большинство фильтров можно установить самостоятельно,
                    если следовать инструкции. Однако для сложных систем, таких
                    как обратный осмос, лучше обратиться к специалисту.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    6. Очищает ли фильтр воду от всех загрязнений?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Каждый фильтр решает определённые задачи. Например, угольные
                    фильтры не удаляют соли жёсткости или вирусы, а механические
                    фильтры не справляются с растворёнными химическими
                    веществами. Для максимальной очистки используют комплексные
                    системы.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box>
            <Accordion allowMultiple rounded="lg">
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    7. Может ли фильтр для воды улучшить вкус и качество воды
                    из-под крана?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Да, большинство фильтров, особенно угольные и системы
                    обратного осмоса, могут существенно улучшить вкус и запах
                    воды, удалив хлор и органические примеси.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    8. Что такое обратный осмос и чем он лучше других фильтров?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Обратный осмос — это процесс фильтрации, при котором вода
                    проходит через специальную мембрану, которая задерживает
                    почти все виды загрязнений. Эта система способна удалять
                    соли, бактерии, вирусы и химические вещества, обеспечивая
                    максимальную очистку воды.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    9. Сколько стоит установка фильтра для воды?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Цена зависит от типа фильтра и сложности установки. Простые
                    фильтры (кувшины) стоят от 3 000 до 10 000 тенге. Системы
                    обратного осмоса могут стоить от 50 000 до 200 000 тенге и
                    больше, включая установку.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    10. Нужно ли фильтровать воду, если она уже поступает
                    очищенной?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Да, даже очищенная вода из городских сетей может содержать
                    хлор, металлы или другие примеси. Фильтрация улучшит её
                    качество и вкус, а также защитит от случайных загрязнений в
                    системе водоснабжения.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text
                    fontSize="md"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flex="1"
                    textAlign="left"
                  >
                    11. Можно ли использовать фильтр для воды в регионах с
                    жёсткой водой?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Да, для этого подходят ионообменные фильтры, которые
                    смягчают воду, удаляя из неё соли кальция и магния,
                    предотвращая накипь. Если у вас есть другие вопросы по
                    выбору или использованию фильтров для воды, не стесняйтесь
                    задать их!
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
