import React, { FunctionComponent, HTMLAttributes } from "react";
import { ButtonLink, Heading } from "../atoms";
import { ProjectItem } from "../molecules";
import { projects } from "@/utils";
import { GITHUB_LINK } from "@/constants/links";

interface ProjectSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ProjectSection: FunctionComponent<ProjectSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={`flex flex-col items-center ${className}`}>
      <Heading size="md" className="text-center font-bold mb-8">
        WORKS
      </Heading>
      <div>
        {projects.map((item, index) => (
          <ProjectItem
            links={item.links}
            index={index}
            title={item.title}
            description={item.description}
            imagePath={item.imagePath}
            key={item.title}
            type={item.type}
          />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink size="lg" variant="default" href={GITHUB_LINK}>
          View More on my github 
        </ButtonLink>
      </div>
    </div>
  );
};

export default ProjectSection;
