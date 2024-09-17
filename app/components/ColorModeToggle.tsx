"use client";

import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      w="fit-content"
      bg={useColorModeValue("light.background", "dark.background")}
      _hover={{
        bg: useColorModeValue("brand.tertiary.200", "brand.secondary.500"),
      }}
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
}
