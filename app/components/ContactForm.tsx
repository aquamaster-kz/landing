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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const sendContactForm = async (data: ContactData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить сообщение.");
      }

      const result = await response.json();
      toast({
        title: "Сообщение успешно доставлено.",
        description: result.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Упс! Что-то пошло не так.",
        description:
          error instanceof Error
            ? error.message
            : "Произошла неизвестная ошибка.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      id="contactRef"
      maxW="full"
      centerContent
      overflow="hidden"
      my={{ base: 5, sm: 6, md: 12, lg: 20 }}
    >
      <Flex>
        <Box
          borderRadius="lg"
          p={{ sm: 5, md: 10, lg: 15 }}
          borderWidth={"1px"}
          borderColor={useColorModeValue(
            "brand.secondary.500",
            "brand.secondary.100"
          )}
          shadow="xl"
        >
          <Box p={4}>
            <Wrap spacing={{ base: 5, sm: 5, md: 10, lg: 20 }}>
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
                    <Link href="https://wa.me/77015195083" isExternal>
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
                  <VStack
                    spacing={5}
                    as="form"
                    onSubmit={handleSubmit(sendContactForm)}
                  >
                    <Input
                      type="text"
                      style={{ display: "none" }}
                      {...register("honeypot")}
                    />
                    <FormControl id="name" isInvalid={!!errors.name}>
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
                          {...register("name", {
                            required: "Имя обязательно",
                            minLength: {
                              value: 3,
                              message: "Имя должно быть минимум 3 символа",
                            },
                          })}
                          _placeholder={{
                            color: useColorModeValue(
                              "brand.gray.200",
                              "brand.gray.500"
                            ),
                          }}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.name && errors.name.message}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl id="email" isInvalid={!!errors.email}>
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
                          {...register("email", {
                            required: "Почтовый ящик обязателен",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Неверный формат почты",
                            },
                          })}
                          _placeholder={{
                            color: useColorModeValue(
                              "brand.gray.200",
                              "brand.gray.500"
                            ),
                          }}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl id="message" isInvalid={!!errors.message}>
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
                        {...register("message", {
                          required: "Сообщение обязательно",
                          minLength: {
                            value: 25,
                            message:
                              "Сообщение должно содержать минимум 25 символов",
                          },
                        })}
                        _placeholder={{
                          color: useColorModeValue(
                            "brand.gray.200",
                            "brand.gray.500"
                          ),
                        }}
                      />
                      <FormErrorMessage>
                        {errors.message && errors.message.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl id="submit" float="right">
                      <Button
                        type="submit"
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
                        isLoading={isLoading}
                        loadingText="Отправка..."
                        isDisabled={isLoading}
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
