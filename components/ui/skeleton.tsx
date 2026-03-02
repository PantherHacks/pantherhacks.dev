import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse duration-500 bg-primary/20", className)} {...props} />;
}

export { Skeleton };
