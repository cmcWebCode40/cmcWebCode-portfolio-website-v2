import React, { FunctionComponent, HTMLAttributes } from "react";
import { Heading, Paragraph } from "../atoms";
import { Skills } from "@/utils";

interface AboutSectionProps extends HTMLAttributes<HTMLDivElement> {}

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={`flex justify-between flex-col md:flex-row items-start ${className}`}>
      <div className="md:w-2/4">
        <Heading size="md" className="font-bold mb-5">
          ABOUT ME
        </Heading>
        <Paragraph className="text-lg">
          I’m a dedicated Frontend Web/Mobile Engineer who strives to solve user
          problems and create captivating experiences through the use of
          technology. My strong passion for working on projects that users can
          engage with and appreciate is evident in my work, which is always
          characterized by empathy and a focus on delivering exceptional user
          experiences.
        </Paragraph>
      </div>
      <div className="md:w-2/5">
        <Heading size="md" className="font-bold mb-5 mt-6 md:mt-0">
          SKILLS
        </Heading>
        <div>
          {Skills.map((item) => (
            <div className="my-5" key={item.title}>
              <Heading size="sm" className="font-bold mb-5 text-base">
                {item.title}
              </Heading>
              <Paragraph className="font-semibold mb-5">{item.body}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
