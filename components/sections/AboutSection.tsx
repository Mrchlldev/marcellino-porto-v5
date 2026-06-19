import { aboutConfig } from "@/lib/settings/about";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={aboutConfig.title}
          subtitle={aboutConfig.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Avatar */}
          <AOSWrapper variant="fade-right" delay={100}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] border border-white/5 flex items-center justify-center overflow-hidden">
                <span className="text-9xl font-bold font-display text-violet-400/20 select-none">
                  {aboutConfig.initials}
                </span>
                {/* Decorative elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-gray-500 font-mono mb-1">Currently based in</p>
                    <p className="text-white font-semibold text-sm">🇮🇩 Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
              {/* Side decorations */}
              <div className="absolute -right-4 top-1/3 w-2 h-24 bg-gradient-to-b from-violet-600 to-transparent rounded-full" />
            </div>
          </AOSWrapper>

          {/* Text content */}
          <div>
            <div className="space-y-5 mb-10">
              {aboutConfig.bio.map((para, i) => (
                <AOSWrapper key={i} variant="fade-left" delay={100 + i * 100}>
                  <p className="text-gray-400 leading-relaxed">{para}</p>
                </AOSWrapper>
              ))}
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutConfig.highlights.map((h, i) => (
                <AOSWrapper key={h.label} variant="zoom" delay={200 + i * 80}>
                  <div className="group bg-[#1A1A2E] border border-white/5 hover:border-violet-500/30 rounded-xl p-4 transition-all duration-300 hover:bg-violet-500/5 cursor-default">
                    <span className="text-2xl mb-2 block">{h.icon}</span>
                    <p className="text-white font-semibold text-sm mb-1">{h.label}</p>
                    <p className="text-gray-500 text-xs leading-snug">{h.description}</p>
                  </div>
                </AOSWrapper>
              ))}
            </div>

            <AOSWrapper variant="fade-up" delay={400}>
              <a
                href={aboutConfig.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
              >
                <Download size={16} />
                {aboutConfig.resumeLabel}
              </a>
            </AOSWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
