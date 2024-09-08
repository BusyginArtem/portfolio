import { FaPaperPlane } from "react-icons/fa";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading>{"Contact me" as const}</SectionHeading>

      <p className="-mt-5 text-gray-700">
        Please contact me directly at
        <a
          href="mailto:artembusygin87@gmail.com"
          className="underline"
          target="_blank" rel="noreferrer"
        >
          artembusygin87@gmail.com
        </a>
        or through this form.
      </p>

      <form
        action={async (formData) => {
          "use server";
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <button
          type="submit"
          className="btnScale group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5" />
        </button>
      </form>
    </motion.section>
  );
}
