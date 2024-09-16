import { Divider } from "@chakra-ui/react";
import CompanyFeatures from "./components/CompanyFeatures";
import HeroSection from "./components/HeroSection";
import OrderFeatures from "./components/OrderFeatures";
import StatisticsSection from "./components/StatisticsSection";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider borderColor="teal" />
      <CompanyFeatures />
      <OrderFeatures />
      <StatisticsSection />
      <Divider borderColor="teal" />
      <FAQ />
      <Divider borderColor="teal" />
      <ContactForm />
    </>
  );
}
