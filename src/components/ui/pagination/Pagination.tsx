import * as React from "react";

import { cn } from "@/libs/utils/TailwindUtils";
import { ButtonProps, buttonVariants } from "../button/Button";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { MoreHorizontal } from "lucide-react";

// == PAGINATION == //
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

Pagination.displayName = "Pagination";

// == PAGINATION CONTENT == //
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
  >(({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  ));

PaginationContent.displayName = "PaginationContent";

// == PAGINATION ITEM == //
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
  >(({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("", className)}
      {...props}
    />
  ));

PaginationItem.displayName = "PaginationItem";

// == PAGINATION LINKS == //
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">
  
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline-primary" : "ghost",
        className: isActive
          ? "bg-schemes-light-primary text-schemes-light-on-primary"
          : "",
        size,
      }),
      className,
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";

// == PAGINATION PREVIOUS == //
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ArrowLeft2 color="#555555"/>
    <span>Previous</span>
  </PaginationLink>
);

PaginationPrevious.displayName = "PaginationPrevious";

// == PAGINATION NEXT == //
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ArrowRight2 color="#555555"/>
  </PaginationLink>
);

PaginationNext.displayName = "PaginationNext";

// == PAGINATION ELLIPSIS == //
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal size={16} color="#555555" className="h-4 w-4" />
  </span>
);

PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
};
