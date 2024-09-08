import SectionDivider from "@/components/section-divider";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import Intro from "@/sections/intro";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

export default function Home() {
  return (
    <main className="mb-28 flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <Contact />
    </main>
  );
}
