"use client";

import Link from "next/link";
import { heroConfig } from "@/lib/settings/hero";
import { siteConfig } from "@/lib/settings/site";
import { useTypewriter } from "@/hooks/useTypewriter";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/SocialIcons";
import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  const role = useTypewriter(heroConfig.roles, 75, 2200);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-24 pb-40">
        {/* Left content */}
        <div>
          <AOSWrapper variant="fade-right" delay={0} duration={700}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
              {siteConfig.available && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
              <span className="text-sm font-mono text-violet-300">{siteConfig.available ? siteConfig.availableText : "Portfolio"}</span>
            </div>
          </AOSWrapper>

          <AOSWrapper variant="fade-right" delay={100} duration={700}>
            <p className="font-mono text-gray-400 text-sm mb-2">{heroConfig.greeting}</p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight font-display mb-4">
              {heroConfig.name.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                {heroConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </AOSWrapper>

          <AOSWrapper variant="fade-right" delay={200} duration={700}>
            <div className="flex items-center gap-2 mb-6 h-10">
              <span className="text-gray-400 text-lg">I&apos;m a</span>
              <span className="text-violet-400 text-lg font-semibold font-mono">
                {role}
                <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse" />
              </span>
            </div>
          </AOSWrapper>

          <AOSWrapper variant="fade-right" delay={300} duration={700}>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8">{heroConfig.description}</p>
          </AOSWrapper>

          <AOSWrapper variant="fade-right" delay={400} duration={700}>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href={heroConfig.ctaPrimary.href} className="group flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5">
                {heroConfig.ctaPrimary.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={heroConfig.ctaSecondary.href} className="flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5">
                <Download size={16} />
                {heroConfig.ctaSecondary.label}
              </a>
            </div>
          </AOSWrapper>

          <AOSWrapper variant="fade-right" delay={500} duration={700}>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600 font-mono mr-1">Follow me</span>
              {siteConfig.socials.github && (
                <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-violet-400 hover:bg-violet-400/10 rounded-lg transition-all duration-200">
                  <GithubIcon size={18} />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-violet-400 hover:bg-violet-400/10 rounded-lg transition-all duration-200">
                  <LinkedinIcon size={18} />
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-violet-400 hover:bg-violet-400/10 rounded-lg transition-all duration-200">
                  <TwitterXIcon size={18} />
                </a>
              )}
            </div>
          </AOSWrapper>
        </div>

        {/* Right: avatar */}
        <AOSWrapper variant="fade-left" delay={200} duration={800} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/40 to-indigo-600/20 blur-2xl scale-110" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-violet-500/30 bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] flex items-center justify-center overflow-hidden">
              <span className="text-7xl font-bold font-display text-violet-400/30 select-none">{heroConfig.initials}</span>
              <div className="absolute inset-0 rounded-full border border-violet-500/10" />
              <div className="absolute inset-4 rounded-full border border-violet-500/10" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#1A1A2E] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gray-500 font-mono">Experience</p>
              <p className="text-2xl font-bold text-white font-display">3+ <span className="text-sm font-normal text-violet-400">years</span></p>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#1A1A2E] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gray-500 font-mono">Projects</p>
              <p className="text-2xl font-bold text-white font-display">20+ <span className="text-sm font-normal text-violet-400">built</span></p>
            </div>
          </div>
        </AOSWrapper>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-10 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroConfig.stats.map((stat, i) => (
              <AOSWrapper key={stat.label} variant="fade-up" delay={600 + i * 80}>
                <div className="bg-white/3 border border-white/5 rounded-xl px-4 py-4 text-center hover:border-violet-500/20 transition-all duration-300 hover:bg-violet-500/5">
                  <div className="text-2xl font-bold font-display text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">{stat.label}</div>
                </div>
              </AOSWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
