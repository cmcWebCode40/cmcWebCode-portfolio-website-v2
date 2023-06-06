import React, { FunctionComponent, HtmlHTMLAttributes } from "react";
import { Heading, Paragraph } from "../atoms";

interface ProjectInfoProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({
  title,
  description,
  ...rest
}) => {
  return (
    <div {...rest}>
      <Heading size="sm" className="font-medium text-xl mb-4">{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProjectInfo;
