import SectionDivider from "@/components/section-divider";
import About from "@/sections/about";
import Intro from "@/sections/intro";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  );
}
