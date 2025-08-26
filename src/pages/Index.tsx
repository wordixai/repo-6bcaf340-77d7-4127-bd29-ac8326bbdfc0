import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Tracking } from "@/components/Tracking";
import { Developer } from "@/components/Developer";
import { ClientManagement } from "@/components/ClientManagement";
import { LogoSection } from "@/components/LogoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Tracking />
      <Developer />
      <ClientManagement />
      <LogoSection />
      <Footer />
    </div>
  );
};

export default Index;