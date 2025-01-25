import * as React from "react";
import Link, { LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinkVariants = cva("flex items-center justify-center transition-colors duration-200", {
  variants: {
    variant: {
      default: "h-[70px] px-[16px] hover:bg-[#83022b]",
      bold: "h-[70px] px-[16px] hover:bg-[#83022b] font-TangoSansBold text-xl",
      icon: "px-[10px] hover:bg-[#83022b]",
      mobile: "w-full h-12 py-[12px] hover:bg-[#83022b]",
      mobile_bold: "w-full h-12 py-[12px] hover:bg-[#83022b] font-TangoSansBold text-xl",
      mobile_icon: "px-[20px] hover:bg-[#83022b]",
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
    <Link href={href} className={cn(navLinkVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}
