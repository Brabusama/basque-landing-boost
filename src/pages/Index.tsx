import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForShops from "@/components/ForShops";
import ForPlayers from "@/components/ForPlayers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ForShops />
      <ForPlayers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
