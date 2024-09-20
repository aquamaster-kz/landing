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
      <head>
        <link rel="icon" href="/icon.ico" sizes="48x48" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
      </head>
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
