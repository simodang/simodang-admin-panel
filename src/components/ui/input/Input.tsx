import { cn } from "@/libs/utils/TailwindUtils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva(
  "border-input flex w-full rounded-md border text-base ring-schemes-light-primary file:border-0 file:bg-transparent file:font-medium file:text-schemes-light-primary placeholder:text-schemes-light-on-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-schemes-light-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        small: "md:text-font-button-small file:text-font-button-small h-8 px-5",
        default: "md:text-font-button file:text-font-button h-10 px-5 py-1",
        large:
          "md:text-font-button-large file:text-font-button-large h-12 px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
>(({ className, variant, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
