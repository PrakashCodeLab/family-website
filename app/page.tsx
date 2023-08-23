"use client";

import {
  BlogSection,
  GetStarted,
  HeroSection,
  Navbar,
  OurCustomers,
  OurServices,
  OurSolution,
} from "@/components";
import LogoSection from "@/components/Logo/LogoSection";

export default function Home() {
  return (
    <main className="main__container">
      <HeroSection />
      <GetStarted />
      <OurServices />
      <OurSolution />
      <OurCustomers />
      <BlogSection />
    </main>
  );
}
