import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  forwardRef,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classMerge } from "@/utils";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-color outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-slate-800",
        outline:
          "bg-white text-black hover:opacity-50 border border-black",
        ghost:
          "bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 outline-none hover:underline text-slate-900  hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
