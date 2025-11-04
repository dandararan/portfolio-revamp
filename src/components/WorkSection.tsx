import React from "react";
import { work } from "@/lib/data";
import type { Job } from "@/lib/data";

type WorkSectionProps = {
  setRef: (el: HTMLElement | null) => void;
};

const WorkSection: React.FC<WorkSectionProps> = ({ setRef }) => (
  <section
    id="work"
    ref={setRef}
    className="min-h-screen py-20 sm:py-32 opacity-0"
  >
    <div className="space-y-16 sm:space-y-20">
      <h2 className="text-3xl sm:text-4xl font-light">Work Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-12 sm:space-y-16">
          {work.map((job: Job, idx) => (
            <div key={idx} className="relative sm:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-foreground transition-colors duration-300 hidden sm:block transform -translate-x-[3.5px]" />

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-medium">
                    {job.role}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {job.year}
                  </span>
                </div>

                <div className="text-base text-muted-foreground font-medium">
                  {job.company}
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {job.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-full hover:bg-muted transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkSection;
