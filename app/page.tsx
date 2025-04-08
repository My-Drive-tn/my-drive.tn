import Navbar from "@/components/navbar/page";
import HeroSection from "@/components/HeroSection/HeroSection";
import Bloc from "@/components/block/bloc";
import Card from "@/components/Cards/Card";
import Tarif from "@/components/Tarifs/Tarif";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Bloc />
      <Card />
      <Tarif />
      <FAQ />
      <Footer />
    </>
  );
}
