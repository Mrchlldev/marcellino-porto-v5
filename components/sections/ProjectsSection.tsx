"use client";

import { useState } from "react";
import { projectsConfig, type Project } from "@/lib/settings/projects";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  Live: "text-green-400 bg-green-400/10 border-green-400/20",
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Archived: "text-gray-400 bg-gray-400/10 border-gray-400/20",
  "Open Source": "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AOSWrapper variant="fade-up" delay={index * 80}>
      <div className="group relative bg-[#1A1A2E]/50 border border-white/5 hover:border-violet-500/30 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 hover:bg-[#1A1A2E]/80">
        {project.featured && (
          <div className="absolute -top-2.5 left-6">
            <span className="flex items-center gap-1 text-xs font-mono text-violet-300 bg-violet-600 px-3 py-1 rounded-full">
              <Star size={10} fill="currentColor" />
              Featured
            </span>
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg font-display leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-violet-400 text-sm">{project.tagline}</p>
          </div>
          <span className={cn("text-xs px-2.5 py-1 rounded-full border font-mono whitespace-nowrap flex-shrink-0", statusColor[project.status])}>
            {project.status}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 text-gray-400 rounded-lg font-mono hover:bg-violet-500/10 hover:text-violet-300 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <span className="text-xs text-gray-600 font-mono mr-auto">{project.year}</span>
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
              <GithubIcon size={13} />
              Source
            </a>
          )}
          {(project.links.live || project.links.demo) && (
            <a href={project.links.live || project.links.demo} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-violet-500/10">
              <ExternalLink size={13} />
              {project.links.demo ? "Demo" : "Live"}
            </a>
          )}
        </div>
      </div>
    </AOSWrapper>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projectsConfig.items
      : projectsConfig.items.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 bg-[#0D0D14]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={projectsConfig.title}
          subtitle={projectsConfig.subtitle}
          description={projectsConfig.description}
        />

        {/* Filter tabs */}
        <AOSWrapper variant="fade-up" delay={100} className="flex flex-wrap gap-2 justify-center mb-12">
          {projectsConfig.filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeFilter === cat
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </AOSWrapper>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
