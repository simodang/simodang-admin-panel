"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils/TailwindUtils";

const labelVariants = cva(
  "text-font-form-label-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-font-form-label",
        large: "text-font-form-label-lg",
        small: "text-font-form-label-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ variant, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant }), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
