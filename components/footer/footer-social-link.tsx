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
        "flex justify-center items-center transition-colors duration-100 border border-transparent hover:border-primary hover:text-primary h-[48px] w-[48px]",
        className
      )}
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
}
