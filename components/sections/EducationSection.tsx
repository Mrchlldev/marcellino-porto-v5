import { educationConfig, type EducationItem } from "@/lib/settings/education";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  return (
    <AOSWrapper variant="fade-up" delay={index * 120}>
      <div className="group relative flex gap-6">
        {/* Timeline line */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0 group-hover:bg-violet-600/30 transition-colors">
            {item.type === "education" ? <GraduationCap size={18} /> : <Award size={18} />}
          </div>
          <div className="w-px flex-1 bg-gradient-to-b from-violet-500/30 to-transparent mt-2" />
        </div>

        {/* Card */}
        <div className="bg-[#1A1A2E]/50 border border-white/5 hover:border-violet-500/20 rounded-2xl p-6 mb-6 flex-1 transition-all duration-300 hover:bg-violet-500/5">
          <div className="flex flex-wrap items-start gap-3 mb-3">
            <h3 className="text-white font-bold text-lg font-display flex-1">{item.degree}</h3>
            <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <GraduationCap size={13} className="text-gray-600" />
              {item.institution}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin size={13} className="text-gray-600" />
              {item.location}
            </span>
            {item.gpa && (
              <span className="flex items-center gap-1 text-sm text-green-400 font-mono">
                GPA: {item.gpa}
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

          <ul className="space-y-1.5">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AOSWrapper>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={educationConfig.title}
          subtitle={educationConfig.subtitle}
          description={educationConfig.description}
        />

        <div className="grid md:grid-cols-2 gap-x-16">
          {/* Education */}
          <div>
            <AOSWrapper variant="fade-right" delay={0}>
              <h3 className="flex items-center gap-2 text-white font-semibold mb-8 font-display text-xl">
                <GraduationCap size={20} className="text-violet-400" />
                Education
              </h3>
            </AOSWrapper>
            {educationConfig.items.map((item, i) => (
              <EducationCard key={item.degree} item={item} index={i} />
            ))}
          </div>

          {/* Certifications */}
          <div>
            <AOSWrapper variant="fade-left" delay={0}>
              <h3 className="flex items-center gap-2 text-white font-semibold mb-8 font-display text-xl">
                <Award size={20} className="text-violet-400" />
                Certifications
              </h3>
            </AOSWrapper>
            {educationConfig.certifications.map((item, i) => (
              <EducationCard key={item.degree} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
