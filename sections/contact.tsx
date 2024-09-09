"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

import { sendMessage } from "@/actions";
import { SectionHeading } from "@/components/section-heading";
import SubmitBtn from "@/components/submit-button";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const { ref } = useSectionInView("Contact", 0.5);

  const [{ data, error }, sendMessageAction] = useFormState(sendMessage, {
    data: null,
    error: null,
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Something went wrong! Try again.");
      return;
    }

    if (data?.id) {
      toast.success("Email sent successfully!");
    }

    if (formRef.current) {
      formRef.current.reset();
    }
  }, [error, data]);

  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{"Contact me" as const}</SectionHeading>

      <p className="-mt-5 text-gray-700">
        Please contact me directly at{" "}
        <a
          href="mailto:artembusygin87@gmail.com"
          className="underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          artembusygin87@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={sendMessageAction}
        className="mt-10 flex flex-col"
        ref={formRef}
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

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
