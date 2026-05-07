import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-5 text-sm md:text-base",
        size === "lg" && "h-14 px-6 text-base md:text-lg",
        variant === "primary" &&
          "text-white shadow-cyan bg-[linear-gradient(110deg,rgba(56,189,248,0.95),rgba(99,102,241,0.95),rgba(217,70,239,0.85))] bg-[length:200%_200%] hover:animate-shimmer",
        variant === "secondary" &&
          "glass text-foreground hover:bg-white/15 dark:hover:bg-white/10",
        variant === "ghost" && "text-foreground hover:bg-foreground/5",
        variant === "gold" &&
          "text-black shadow-gold bg-[linear-gradient(110deg,rgba(245,158,11,0.95),rgba(250,204,21,0.95),rgba(245,158,11,0.85))] bg-[length:200%_200%] hover:animate-shimmer",
        className
      )}
      {...props}
    />
  );
}

