import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import EasySteps from "@/components/EasySteps";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <EasySteps />
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
}
