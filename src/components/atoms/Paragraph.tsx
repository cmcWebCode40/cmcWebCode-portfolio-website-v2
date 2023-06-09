import { classMerge } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, FunctionComponent, forwardRef } from "react";

const ParagraphVariants = cva(`max-w-prose text-slate-700 mb-2`, {
  variants: {
    size: {
      default: "text-base sm:text-lg",  
      sm: "text-sm, sm:text-base",
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


  return <p ref={ref} className={classMerge(ParagraphVariants({ size, className }))} {...rest} />;
});


Paragraph.displayName = "Paragraph";

export default Paragraph;
