"use client";

import { SectionHeading } from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{"My skills" as const}</SectionHeading>

      <ul className="text-lg flex flex-wrap justify-center gap-2 text-gray-800">
        {skillsData.map((skill) => (
          <li key={skill} className="">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
