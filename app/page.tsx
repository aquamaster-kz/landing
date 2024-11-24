import { Divider } from "@chakra-ui/react";
import CompanyFeatures from "./components/CompanyFeatures";
import HeroSection from "./components/HeroSection";
import OrderFeatures from "./components/OrderFeatures";
import StatisticsSection from "./components/StatisticsSection";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import CookieConsentBanner from "./components/CookieConsent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <CompanyFeatures />
      <OrderFeatures />
      <StatisticsSection />
      <Divider />
      <FAQ />
      <Divider />
      <ContactForm />
      <CookieConsentBanner />
    </>
  );
}
