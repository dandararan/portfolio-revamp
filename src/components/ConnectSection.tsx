import { social } from "@/lib/data";
import { ArrowLeft, GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";

type ConnectSectionProps = {
  setRef: (el: HTMLElement | null) => void;
};

const ConnectSection: React.FC<ConnectSectionProps> = ({ setRef }) => (
  <section id="connect" ref={setRef} className="py-16 sm:py-24 opacity-0">
    <div className="flex flex-col sm:flex-row gap-16 sm:gap-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-light">Let's Connect</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Always interested in new opportunities, collaborations, and
          conversations about technology.
        </p>
        <a
          href="mailto:daniloborrerosjr@gmail.com"
          className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          <span className="text-base">daniloborrerosjr@gmail.com</span>
          <ArrowLeft className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      <div className="space-y-4">
        <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>
        <div className="flex flex-col gap-3.5">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="group flex items-center gap-4 text-sm hover:text-muted-foreground transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-muted/60 transition-colors duration-300 flex items-center justify-center">
                {s.icon === "github" ? (
                  <GithubIcon size={16} />
                ) : (
                  <LinkedinIcon size={16} />
                )}
              </div>
              <div className="flex-1">
                <span className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {s.name}
                </span>
                <br />
                <span className="text-xs text-muted-foreground">
                  {s.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ConnectSection;
