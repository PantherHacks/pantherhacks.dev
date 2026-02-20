import * as React from "react";
import Link, { LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinkVariants = cva("font-Xirod flex items-center justify-center transition-colors duration-200", {
  variants: {
    variant: {
      default: "h-[70px] px-[16px]",
      bold: "h-[70px] px-[16px] font-Xirod text-xl",
      logo: "px-[10px]",
      icon: "px-[10px] w-[50px]",
      mobile: "w-full h-12 py-[12px]",
      mobile_bold: "w-full h-12 py-[12px] font-Xirod text-xl",
      mobile_icon: "px-[20px]",
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
    <Link href={href} className={cn("select-none", navLinkVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}
