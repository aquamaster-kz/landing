"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson, BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function ContactForm() {
  return (
    <Container id="contactRef" maxW="full" centerContent overflow="hidden">
      <Flex>
        <Box
          borderRadius="lg"
          m={{ sm: 6, md: 12, lg: 24 }}
          p={{ sm: 5, md: 10, lg: 15 }}
          borderWidth={"1px"}
          borderColor={useColorModeValue(
            "brand.secondary.500",
            "brand.secondary.100"
          )}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading
                    textColor={useColorModeValue(
                      "brand.primary.500",
                      "brand.primary.200"
                    )}
                  >
                    Связаться с нами
                  </Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Link
                        href="tel:+77015195083"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          _hover={{ border: "2px solid teal" }}
                          textColor={useColorModeValue(
                            "brand.primary.500",
                            "brand.primary.100"
                          )}
                          leftIcon={
                            <MdPhone color="brand.tertiary.500" size="20px" />
                          }
                        >
                          +7 701 519 50 83
                        </Button>
                      </Link>
                      <Link
                        href="mailto:sales@aquamaster.kz"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          _hover={{ border: "2px solid teal" }}
                          textColor={useColorModeValue(
                            "brand.primary.500",
                            "brand.primary.100"
                          )}
                          leftIcon={<MdEmail size="20px" />}
                        >
                          sales@aquamaster.kz
                        </Button>
                      </Link>
                      <Link
                        href={`https://2gis.kz/astana/search/${encodeURIComponent(
                          "улица Туран, дом 56/1"
                        )}`}
                        isExternal
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          _hover={{ border: "2px solid teal" }}
                          textColor={useColorModeValue(
                            "brand.primary.500",
                            "brand.primary.100"
                          )}
                          leftIcon={<MdLocationOn size="20px" />}
                        >
                          Астана, Казахстан
                        </Button>
                      </Link>
                    </VStack>
                  </Box>
                  <HStack alignItems="flex-start">
                    <Link href="https://wa.me/87015195083" isExternal>
                      <IconButton
                        aria-label="whatsapp"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={useColorModeValue("green.500", "green.300")}
                        _hover={{
                          bg: useColorModeValue(
                            "brand.tertiary.500",
                            "brand.tertiary.200"
                          ),
                        }}
                        icon={<BsWhatsapp size="24px" />}
                      />
                    </Link>
                    <Link href="https://instagram.com/aquamaster.kz" isExternal>
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={useColorModeValue("purple.600", "purple.300")}
                        _hover={{
                          bg: useColorModeValue(
                            "brand.tertiary.500",
                            "brand.tertiary.200"
                          ),
                        }}
                        icon={<BsInstagram size="24px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box color={useColorModeValue("light.text", "dark.text")}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel
                        color={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.200"
                        )}
                      >
                        Имя
                      </FormLabel>
                      <InputGroup
                        borderColor={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.100"
                        )}
                      >
                        <InputLeftElement pointerEvents="none">
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="text"
                          size="md"
                          placeholder="Ваше имя"
                          _placeholder={{
                            color: useColorModeValue(
                              "brand.gray.200",
                              "brand.gray.500"
                            ),
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel
                        color={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.200"
                        )}
                      >
                        Почтовый ящик
                      </FormLabel>
                      <InputGroup
                        borderColor={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.100"
                        )}
                      >
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type="text"
                          size="md"
                          placeholder="Ваш почтовый ящик"
                          _placeholder={{
                            color: useColorModeValue(
                              "brand.gray.200",
                              "brand.gray.500"
                            ),
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel
                        color={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.200"
                        )}
                      >
                        Сообщение
                      </FormLabel>
                      <Textarea
                        borderColor={useColorModeValue(
                          "brand.secondary.500",
                          "brand.secondary.100"
                        )}
                        placeholder="Если у вас есть вопросы, не стесняйтесь задать их!"
                        _placeholder={{
                          color: useColorModeValue(
                            "brand.gray.200",
                            "brand.gray.500"
                          ),
                        }}
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        colorScheme={"brand.primary.500"}
                        bg={useColorModeValue(
                          "brand.primary.500",
                          "brand.secondary.500"
                        )}
                        textColor={"white"}
                        _hover={{
                          bg: useColorModeValue(
                            "brand.tertiary.300",
                            "brand.tertiary.500"
                          ),
                        }}
                      >
                        Отправить сообщение
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
