import type { Metadata } from "next";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Box, Divider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Магазин фильтров Аквамастер",
  description:
    "Мы рады предложить вам недорогие, но качественные товары с подробными описаниями, характеристиками и фотографиями. У нас Вы можете купить фильтры для воды АКВОФОР, AQUALIFE, HUBERT, AQUAVIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Box width="90%" mx="auto" shadow="xl" borderRadius="md">
            <NavBar />
            <Divider />
            {children}
            <Divider />
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
