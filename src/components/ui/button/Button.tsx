import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/libs/utils/TailwindUtils";

const buttonVariants = cva(
  "flex inline-flex justify-center items-center rounded-full font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-schemes-light-primary text-schemes-light-on-primary hover:bg-schemes-light-primary/90",
        secondary:
          "bg-schemes-light-secondary text-schemes-light-on-secondary hover:bg-schemes-light-secondary/90",
        tertiary:
          "bg-schemes-light-tertiary text-schemes-light-on-tertiary hover:bg-schemes-light-tertiary/90",
        danger:
          "bg-schemes-light-error text-schemes-light-on-error hover:bg-schemes-light-error/90",
        "outline-primary":
          "border border-light-primary text-schemes-light-primary bg-transparent hover:bg-schemes-light-surface/40",
        "outline-secondary":
          "border border-light-secondary text-schemes-light-primary bg-schemes-light-surface hover:bg-schemes-light-surface/90",
        "outline-tertiary":
          "border border-light-tertiary text-schemes-light-primary bg-schemes-light-surface hover:bg-schemes-light-surface/90",
        "outline-danger":
          "border border-light-error text-schemes-light-primary bg-schemes-light-surface hover:bg-schemes-light-surface/90",
        ghost: "bg-transparent text-schemes-light-primary hover:bg-schemes-light-surface/40",
      },
      size: {
        small: "h-7 w-[69] px-3.5 py-1.5 text-xs",
        default: "h-[38] w-[87] py-2.5 px-5 text-sm",
        large: "h-12 w-[106] px-7 py-3.5 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };