"use client";

import { useState } from "react";
import { contactConfig } from "@/lib/settings/contact";
import { AOSWrapper } from "@/components/ui/AOSWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GithubIcon, LinkedinIcon, TwitterXIcon, MailIcon } from "@/components/ui/SocialIcons";
import { Clock, MapPin, CheckCircle, Send, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  mail: <MailIcon size={18} />,
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterXIcon size={18} />,
};

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactConfig.form.formspreeEndpoint || contactConfig.form.formspreeEndpoint.includes("YOUR_FORM_ID")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(contactConfig.form.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const f = contactConfig.form.fields;

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={contactConfig.title} subtitle={contactConfig.subtitle} description={contactConfig.description} />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {contactConfig.availability.show && (
              <AOSWrapper variant="fade-right" delay={0}>
                <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/10 border border-violet-500/20 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 font-semibold text-sm">{contactConfig.availability.status}</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex items-center gap-2"><Clock size={13} className="text-gray-600" />{contactConfig.availability.responseTime}</p>
                    <p className="flex items-center gap-2"><MapPin size={13} className="text-gray-600" />{contactConfig.availability.timezone}</p>
                  </div>
                </div>
              </AOSWrapper>
            )}

            <div className="space-y-3">
              {contactConfig.methods.map((method, i) => (
                <AOSWrapper key={method.label} variant="fade-right" delay={80 + i * 80}>
                  <a href={method.href} target={method.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                    className="group flex items-center gap-4 bg-[#1A1A2E]/50 border border-white/5 hover:border-violet-500/30 rounded-xl p-4 transition-all duration-300 hover:bg-violet-500/5 hover:-translate-x-0.5">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/20 transition-colors flex-shrink-0">
                      {iconMap[method.icon]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 font-mono">{method.label}</p>
                      <p className="text-white text-sm font-medium truncate">{method.value}</p>
                      <p className="text-gray-600 text-xs">{method.description}</p>
                    </div>
                  </a>
                </AOSWrapper>
              ))}
            </div>
          </div>

          {contactConfig.form.enabled && (
            <AOSWrapper variant="fade-left" delay={100}>
              <form onSubmit={handleSubmit} className="bg-[#1A1A2E]/50 border border-white/5 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs text-gray-500 font-mono mb-2">{f[field].label}</label>
                      <input type={field === "email" ? "email" : "text"} placeholder={f[field].placeholder}
                        value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required
                        className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">{f.subject.label}</label>
                  <input type="text" placeholder={f.subject.placeholder} value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required
                    className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">{f.message.label}</label>
                  <textarea placeholder={f.message.placeholder} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5}
                    className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none" />
                </div>
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3">
                    <CheckCircle size={15} />{contactConfig.form.successMessage}
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle size={15} />{contactConfig.form.errorMessage}
                  </div>
                )}
                <button type="submit" disabled={status === "sending" || status === "success"}
                  className={cn("w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200",
                    status === "success" ? "bg-green-600 text-white" : "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-60")}>
                  {status === "sending" ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> : <Send size={15} />}
                  {status === "sending" ? "Sending..." : contactConfig.form.submitLabel}
                </button>
              </form>
            </AOSWrapper>
          )}
        </div>
      </div>
    </section>
  );
}
