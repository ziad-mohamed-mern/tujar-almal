import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-xl dark:bg-white/5",
        className
      )}
    >
      {children}
    </div>
  );
}

