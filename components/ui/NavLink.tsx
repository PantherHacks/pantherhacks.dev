import * as React from "react";
import Link, { LinkProps } from "next/link";

import "./NavLink.css";

import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinkVariants = cva("font-Xirod flex items-center justify-center transition-colors duration-200", {
  variants: {
    variant: {
      default: "h-[70px] px-[16px]",
      logo: "px-[10px]",
      icon: "px-[10px] w-[50px]",
      mobile: "w-full h-12 py-[12px]",
      mobile_icon: "px-[20px]",
      red_orange: "h-[70px] px-[16px] hover:text-[#FF5500]",
      blue: "h-[70px] px-[16px] hover:text-[#4835FF]",
      pink: "h-[70px] px-[16px] hover:text-[#FF1A98]",
      purple: "h-[70px] px-[16px] hover:text-[#8C02D6]",
      dark_blue: "h-[70px] px-[16px] hover:text-[#002140]",
      green: "h-[70px] px-[16px] hover:text-[#53FF1D]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps,
    VariantProps<typeof navLinkVariants> {
  children?: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, variant, className, ...props }: NavLinkProps) {
  return (
    <Link href={href} className={cn("select-none nav-link-glow", navLinkVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}
