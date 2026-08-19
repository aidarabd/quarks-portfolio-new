import Image from "next/image";
import type { Project } from "@/data/content";
import { cx } from "@/lib/utils";

type Props = {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CoverMedia({ project, className, sizes = "100vw", priority }: Props) {
  if (project.coverVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={project.cover}
        className={cx("absolute inset-0 h-full w-full object-cover", className)}
      >
        <source src={project.coverVideo} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={project.cover}
      alt={project.title}
      fill
      sizes={sizes}
      priority={priority}
      className={cx("object-cover", className)}
    />
  );
}
