import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface FooterSocialLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function FooterSocialLink({ href, className, children, ...props }: FooterSocialLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-[48px] w-[48px] items-center justify-center border border-transparent transition-colors duration-100 hover:border-primary hover:text-primary",
        className
      )}
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
}
