"use client";

import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { SectionHeading } from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.5);

  const mounted = useRef(false);

  useEffect(() => {
    if (inView && !mounted.current) {
      setTimeout(() => {
        mounted.current = true;
      }, 100);
    }
  }, [inView]);

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-20 max-w-[53rem] scroll-mt-28"
    >
      <SectionHeading>{"My experience" as const}</SectionHeading>

      <VerticalTimeline animate={!mounted.current} lineColor="#e5e7eb">
        {experiencesData.map(
          ({ title, location, date, icon, description }, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #f3f4f6",
                }}
                iconClassName="vertical-timeline-element-icon-custom"
                dateClassName="vertical-timeline-element-date-custom"
                date={date}
                icon={icon}
                visible={inView}
                intersectionObserverProps={
                  {
                    //   root: ref,
                    //   trackVisibility: true,
                    //   delay: (index + 10) * 100,
                  }
                }
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="!mt-0 font-normal">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ),
        )}
      </VerticalTimeline>
    </section>
  );
}
