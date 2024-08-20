"use client";

import { useSectionInView } from "@/lib/hooks";
import profileImg from "@/public/profile-img.avif";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] scroll-mt-36 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Profile portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-2xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 break-words px-4 text-2xl font-medium !leading-[1.5] sm:px-0 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Artem.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">6 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React and Next.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-0.5" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://www.linkedin.com/in/artem-busyhin-developer"
          target="_blank"
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.2rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-[1.15]"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/BusyginArtem?tab=repositories"
          target="_blank"
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.2rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-[1.15]"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
