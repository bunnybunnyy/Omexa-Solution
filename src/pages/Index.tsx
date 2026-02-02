import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ServiceFilterProvider } from "@/contexts/ServiceFilterContext";

const Index = () => {
  return (
    <ServiceFilterProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <Work />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </ServiceFilterProvider>
  );
};

export default Index;
