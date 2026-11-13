import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
// shadcn/ui-style Button on Radix Slot (asChild). MIT, see THIRD_PARTY.md.
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-control px-4 py-2 text-body font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:bg-primary-hover",
        outline: "border border-line bg-surface text-ink hover:bg-muted",
        ghost: "text-ink hover:bg-muted",
        destructive: "bg-danger text-on-primary",
      },
      size: { default: "min-h-11", sm: "min-h-9 px-3", lg: "min-h-12 px-6" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
