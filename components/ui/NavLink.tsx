import * as React from "react";
import Link, { LinkProps } from "next/link";

import "./NavLink.css";

import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinkVariants = cva(
  "font-Xirod nav-link-hover flex items-center justify-center transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "h-[70px] px-[16px]",
        logo: "px-[10px]",
        icon: "px-[10px] w-[50px]",
        mobile: "w-full h-12 py-[12px]",
        mobile_icon: "px-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps, VariantProps<typeof navLinkVariants> {
  children?: React.ReactNode;
  className?: string;
  hoverColor?: string;
  glowColor?: string;
}

export function NavLink({ href, children, variant, hoverColor, glowColor, className, style, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "select-none",
        navLinkVariants({ variant }),
        hoverColor && "nav-link-hover nav-link-colored",
        glowColor && "nav-link-glow",
        className
      )}
      style={
        hoverColor
          ? ({ "--nav-hover-color": hoverColor, "--nav-hover-glow-color": glowColor, ...style } as React.CSSProperties)
          : style
      }
      {...props}
    >
      {children}
    </Link>
  );
}
