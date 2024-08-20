"use client";

import Project from "@/components/project";
import { SectionHeading } from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-20 scroll-mt-28 sm:mb-0">
      <SectionHeading>{"My projects" as const}</SectionHeading>

      {projectsData.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
}
