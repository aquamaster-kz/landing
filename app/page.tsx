import { Divider } from "@chakra-ui/react";
import CompanyFeatures from "./components/CompanyFeatures";
import HeroSection from "./components/HeroSection";
import OrderFeatures from "./components/OrderFeatures";
import StatisticsSection from "./components/StatisticsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider borderColor="gray.300" />
      <CompanyFeatures />
      <OrderFeatures />
      <StatisticsSection />
      <Divider borderColor="gray.300" />
    </>
  );
}
