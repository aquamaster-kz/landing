"use client";

import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { setCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const userConsent = getCookie("user-consent");
    if (!userConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    setCookie("user-consent", "accepted", { maxAge: 365 * 24 * 60 * 60 });
    setIsVisible(false);
  };

  const handleDecline = (): void => {
    setCookie("user-consent", "declined", { maxAge: 365 * 24 * 60 * 60 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      bg="rgba(0, 0, 0, 0.85)"
      color="white"
      p="15px"
      borderRadius="8px"
      maxWidth="400px"
      width="100%"
      textAlign="center"
      zIndex="9999"
    >
      <Text fontSize="14px" mb="10px">
        Мы используем cookies для улучшения вашего опыта на сайте. Продолжая
        использовать наш сайт, вы соглашаетесь на использование cookies.
      </Text>
      <Flex justify="center" gap="10px" direction="row">
        <Button
          bg="brand.secondary.500"
          color="white"
          onClick={handleAccept}
          _hover={{
            bg: "brand.secondary.600",
          }}
        >
          Принять
        </Button>
        <Button
          bg="brand.primary.500"
          color="white"
          onClick={handleDecline}
          _hover={{
            bg: "brand.primary.600",
          }}
        >
          Отказаться
        </Button>
      </Flex>
    </Box>
  );
};

export default CookieConsentBanner;
