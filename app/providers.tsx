"use client";

import {
  Box,
  ChakraProvider,
  extendTheme,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    light: {
      background: "rgb(245, 246, 247)",
      text: "#000000",
    },
    dark: {
      background: "#1a202c",
      text: "#ffffff",
    },
    brand: {
      primary: {
        50: "#e6f1ff",
        100: "#b3d1f1",
        200: "#80aaf2",
        300: "#4d83f2",
        400: "#2662e2",
        500: "#164194",
        600: "#0e2d6a",
        700: "#081e3e",
        800: "#030f1d",
        900: "#000000",
      },
      secondary: {
        50: "#e6f4f4",
        100: "#b3d9d9",
        200: "#80bfbf",
        300: "#4da6a6",
        400: "#269999",
        500: "#007777",
        600: "#006666",
        700: "#004d4d",
        800: "#003333",
        900: "#001a1a",
      },
      tertiary: {
        50: "#fff5f5",
        100: "#ffe3e3",
        200: "#ffc9c9",
        300: "#ffb0b0",
        400: "#ff9e9e",
        500: "#ff7f7f",
        600: "#e66b6b",
        700: "#b74f4f",
        800: "#8e3e3e",
        900: "#6c2b2b",
      },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      "html, body": {
        scrollBehavior: "smooth",
        overflowX: "hidden",
      },
      body: {
        bg:
          props.colorMode === "light" ? "light.background" : "dark.background",
        color: props.colorMode === "light" ? "light.text" : "dark.text",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
