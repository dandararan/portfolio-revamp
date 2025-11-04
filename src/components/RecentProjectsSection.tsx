import { projects, type Post } from "@/lib/data";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRightIcon } from "lucide-react";

type RecentProjectProps = {
  setRef: (el: HTMLElement | null) => void;
};

const RecentProjectSection: React.FC<RecentProjectProps> = ({ setRef }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        ref={setRef}
        className="min-h-screen py-20 sm:py-32 opacity-0"
      >
        <div className="space-y-16 sm:space-y-20">
          <h2 className="text-3xl sm:text-4xl font-light">Recent Projects</h2>

          <div className="space-y-1">
            {projects.map((post: Post, idx) => (
              <article
                key={idx}
                onClick={() => handleReadMore(post)}
                className="group relative py-6 sm:py-8 border-b border-border/30 hover:border-border transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.techStack?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2 text-xs font-mono text-muted-foreground whitespace-nowrap">
                    <span>{post.date}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRightIcon size={18} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader className="space-y-4">
            <div className="space-y-2">
              <DialogTitle className="text-md sm:text-xl font-light">
                {selectedPost?.title}
              </DialogTitle>
              <DialogDescription className="text-md font-mono text-muted-foreground">
                {selectedPost?.date}
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="space-y-6 pt-6">
            <p className="text-md sm:text-md text-muted-foreground leading-relaxed">
              {selectedPost?.excerpt}
            </p>

            {selectedPost?.content && (
              <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-light prose-p:text-muted-foreground prose-p:leading-relaxed">
                {selectedPost.content}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecentProjectSection;
