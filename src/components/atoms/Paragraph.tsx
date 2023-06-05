import { classMerge } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, FunctionComponent, forwardRef } from "react";

const ParagraphVariants = cva("", {
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

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

const Paragraph: FunctionComponent<ParagraphProps> = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ className, size, ...rest }, ref) => {
  return <p ref={ref} className={classMerge({ size, className })} {...rest} />;
});


Paragraph.displayName = "Paragraph";

export default Paragraph;
