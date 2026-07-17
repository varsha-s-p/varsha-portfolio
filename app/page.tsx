import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seam from "@/components/Seam";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg text-ink">
        <Hero />
        <Seam />
        <About />
        <Seam />
        <Skills />
        <Seam />
        <Projects />
        <Seam />
        <Experience />
        <Seam />
        <Education />
        <Seam />
        <Achievements />
        <Seam />
        <Certifications />
        <Seam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
