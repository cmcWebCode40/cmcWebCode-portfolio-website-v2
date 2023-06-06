import { classMerge } from "@/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { AnchorHTMLAttributes, FunctionComponent } from "react";
import { buttonVariants } from "./Button";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  size,
  variant = "link",
  className,
  href,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      target="_blank"
      href={href as string}
      className={classMerge(buttonVariants({ variant, size, className }))}
    />
  );
};

export default ButtonLink;
