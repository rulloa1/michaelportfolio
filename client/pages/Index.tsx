import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Gallery />
      <Reviews />
      <Contact />
    </div>
  );
}
