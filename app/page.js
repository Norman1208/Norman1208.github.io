import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Experience from "../components/Experience";
import Publications from "../components/Publications";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Publications />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
