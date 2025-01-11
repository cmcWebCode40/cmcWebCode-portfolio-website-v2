import React, { FunctionComponent, HTMLAttributes, useState } from "react";
import { ButtonLink, Heading } from "../atoms";
import { ProjectItem, Segment } from "../molecules";
import { MOBILE_APPLICATIONS_LIST, SDKS_LISTS } from "@/utils";
import { GITHUB_LINK } from "@/constants/links";

interface ProjectSectionProps extends HTMLAttributes<HTMLDivElement> { }

const segmentItems = ["Apps", "SDKS"];

const ProjectSection: FunctionComponent<ProjectSectionProps> = ({
  className,
  ...rest
}) => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div {...rest} className={`flex flex-col items-center ${className}`}>
      <Heading size="md" className="text-center font-bold mb-8">
        WORKS
      </Heading>
      <div className="w-full md:w-[20%]">
        <Segment tab={tab} onSelect={setTab} items={segmentItems} />
      </div>
      <div>
        {tab === 0
          ? MOBILE_APPLICATIONS_LIST.map((item, index) => (
            <ProjectItem
              links={item.links}
              index={index}
              title={item.title}
              description={item.description}
              imagePath={item.imagePath}
              key={item.title}
              type={item.type}
            />
          ))
          : SDKS_LISTS.map((item, index) => (
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
