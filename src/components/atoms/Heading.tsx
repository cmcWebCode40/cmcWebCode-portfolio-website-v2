import { classMerge } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, FunctionComponent, forwardRef } from "react";

const headingVariants = cva("", {
  variants: {
    size: {
      default: "",
      sm: "",
      lg: "",
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
  return <h1 ref={ref} className={classMerge({ size, className })} {...rest} />;
});


Heading.displayName = "Heading";

export default Heading;
