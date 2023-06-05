import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  forwardRef,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classMerge } from "@/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      outline: "",
      link: "",
    },
    size: {
      default: "", 
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FunctionComponent<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ variant, size, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={classMerge(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
});


Button.displayName = "Button";

export default Button;
