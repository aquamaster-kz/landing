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
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson, BsInstagram } from "react-icons/bs";

export default function ContactForm() {
  return (
    <Container maxW="full" centerContent overflow="hidden">
      <Flex>
        <Box
          borderRadius="lg"
          m={{ sm: 6, md: 12, lg: 24 }}
          p={{ sm: 5, md: 10, lg: 15 }}
          borderWidth={"1px"}
          borderColor={"teal"}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading textColor={"rgb(22, 65, 148)"}>
                    Связаться с нами
                  </Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        _hover={{ border: "2px solid teal" }}
                        leftIcon={
                          <MdPhone color="rgb(22, 65, 148)" size="20px" />
                        }
                      >
                        +7 701 519 50 83
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        _hover={{ border: "2px solid teal" }}
                        leftIcon={
                          <MdEmail color="rgb(22, 65, 148)" size="20px" />
                        }
                      >
                        sales@aquamaster.kz
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid teal" }}
                        leftIcon={
                          <MdLocationOn color="rgb(22, 65, 148)" size="20px" />
                        }
                      >
                        Астана, Казахстан
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "red.200" }}
                      icon={<MdFacebook size="28px" color="teal" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "red.200" }}
                      icon={<BsInstagram size="28px" color="teal" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel color={"rgb(22, 65, 148)"}>Имя</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" placeholder="Ваше имя" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel color={"rgb(22, 65, 148)"}>
                          Почтовый ящик
                        </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            placeholder="Ваш почтовый ящик"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel color={"rgb(22, 65, 148)"}>
                          Сообщение
                        </FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Если у вас есть вопросы, не стесняйтесь задать их!"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="rgb(22, 65, 148)"
                          color="white"
                          _hover={{ bg: "red.400" }}
                        >
                          Отправить сообщение
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
