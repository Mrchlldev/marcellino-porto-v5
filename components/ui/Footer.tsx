import Link from "next/link";
import { siteConfig } from "@/lib/settings/site";
import { navConfig } from "@/lib/settings/nav";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "./SocialIcons";

const socialIcons: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterXIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0F] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-display font-bold text-lg text-white">
            <span className="text-violet-400">&lt;</span>
            {navConfig.logoShort}
            <span className="text-violet-400">/&gt;</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navConfig.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {Object.entries(siteConfig.socials).map(([key, url]) => {
              if (!url || !socialIcons[key]) return null;
              return (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-violet-600/20 hover:text-violet-400 text-gray-500 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
                  {socialIcons[key]}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600 font-mono">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
