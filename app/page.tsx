import Navbar from "./components/landing/Navigation";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import HowItWorks from "./components/landing/HowItWorks";
import DashboardPreview from "./components/landing/DashboardPreview";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <CTA />
      <Footer />
    </main>
  );
}
