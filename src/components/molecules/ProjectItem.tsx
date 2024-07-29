import Image from "next/image";
import React, { FunctionComponent, HtmlHTMLAttributes } from "react";
import { ButtonLink } from "../atoms";
import ProjectInfo from "./ProjectInfo";

interface ProjectItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  index: number;
  imagePath: string;
  description: string;
  links: {
    google?: string;
    apple?: string;
    website?: string;
  };
  type?: string
}

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  description,
  imagePath,
  title,
  index,
  type,
  links,
  ...rest
}) => {
  const reverseClass = index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div
      {...rest}
      className={`flex flex-col justify-between items-center  my-14 ${reverseClass}`}
    >
      <div className="shadow-sm shadow-slate-400/40 rounded-md">
        <Image
          className="rounded-lg"
          src={imagePath}
          alt={title}
          width={600}
          height={600}
        />
      </div>
      <div className="md:w-2/6 my-10">
        <ProjectInfo description={description} title={title} />
        <div className="flex items-center justify-center md:justify-normal space-x-4 mt-4">
          {type === "app" ? (
            <>
              <ButtonLink title={title} href={links.google} variant="default">
                Google Play
              </ButtonLink>
              <ButtonLink title={title} href={links.apple} variant="outline">
                Apple Store
              </ButtonLink>
            </>
          ) : (
            <ButtonLink title={title} href={links.website} variant="default">
              Website
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
