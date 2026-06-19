"use client";

import { skillsConfig } from "@/lib/settings/skills";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useAOS } from "@/hooks/useAOS";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const levelColor: Record<string, string> = {
  Beginner: "bg-gray-500",
  Intermediate: "bg-blue-500",
  Advanced: "bg-violet-500",
  Expert: "bg-violet-400",
};

const levelBadge: Record<string, string> = {
  Beginner: "text-gray-400 bg-gray-500/10 border-gray-500/20",
  Intermediate: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Advanced: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Expert: "text-violet-300 bg-violet-400/10 border-violet-400/20",
};

function SkillBar({ name, percentage, level, delay }: {
  name: string; percentage: number; level: string; delay: number;
}) {
  const { ref, isVisible } = useAOS({ threshold: 0.2, delay });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-x-0 blur-none" : "opacity-0 -translate-x-4 blur-sm"
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className={cn("text-xs px-2 py-0.5 rounded-full border font-mono", levelBadge[level])}>
            {level}
          </span>
          <span className="text-xs text-gray-500 font-mono">{percentage}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", levelColor[level])}
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0D0D14]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={skillsConfig.title}
          subtitle={skillsConfig.subtitle}
          description={skillsConfig.description}
        />

        {/* Tech badge cloud */}
        <AOSWrapper variant="fade-up" delay={0} className="mb-16">
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsConfig.techBadges.map((badge, i) => (
              <span
                key={badge}
                className="px-4 py-2 bg-[#1A1A2E] border border-white/5 hover:border-violet-500/30 text-gray-400 hover:text-violet-300 text-sm font-mono rounded-xl transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:bg-violet-500/5"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </AOSWrapper>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillsConfig.categories.map((cat, ci) => (
            <AOSWrapper key={cat.category} variant="fade-up" delay={ci * 80}>
              <div className="bg-[#1A1A2E]/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-6 bg-gradient-to-b from-violet-500 to-violet-700 rounded-full" />
                  <h3 className="text-white font-semibold font-display text-lg">{cat.category}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={ci * 80 + si * 60}
                    />
                  ))}
                </div>
              </div>
            </AOSWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
