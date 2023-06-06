import { classMerge } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, FunctionComponent, forwardRef } from "react";

const headingVariants = cva(`text-black text-center lg:text-left`, {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:6xl",
      sm: "text-base md:text-lg lg:text-2xl",
      md: "text-2xl md:text-3xl lg:text-4xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FunctionComponent<HeadingProps> = forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(({ className, size, ...rest }, ref) => {

  return <h1 ref={ref} className={classMerge(headingVariants({ className, size }))} {...rest} />;
});


Heading.displayName = "Heading";

export default Heading;
