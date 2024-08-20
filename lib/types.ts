import { links, projectsData } from "@/lib/data";

export type TSectionHeading = "About me" | "My projects" | "My skills";

export type ProjectProps = (typeof projectsData)[number];

export type SectionName = (typeof links)[number]["name"];
