import { AOSWrapper } from "./AOSWrapper";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", center && "text-center", className)}>
      <AOSWrapper variant="fade-up" delay={0}>
        <span className="inline-block font-mono text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3">
          {subtitle}
        </span>
      </AOSWrapper>
      <AOSWrapper variant="fade-up" delay={100}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
          {title}
        </h2>
      </AOSWrapper>
      {description && (
        <AOSWrapper variant="fade-up" delay={200}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </AOSWrapper>
      )}
    </div>
  );
}
