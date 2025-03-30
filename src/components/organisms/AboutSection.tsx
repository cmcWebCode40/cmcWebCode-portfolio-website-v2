import React, { FunctionComponent, HTMLAttributes } from "react";
import { Heading, Paragraph } from "../atoms";
import { Skills } from "@/utils";

interface AboutSectionProps extends HTMLAttributes<HTMLDivElement> {}

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={`flex justify-center items-center mx-auto`}>
      <div className="flex flex-col justify-center items-center">
        <Heading size="md" className="font-bold mb-5 mt-6 text-center ">
          SKILLS
        </Heading>
        <div>
          {Skills.map((item) => (
            <div className="my-5 flex flex-col justify-center items-center" key={item.title}>
              <Heading size="sm" className="font-bold mb-5 text-center text-base">
                {item.title}
              </Heading>
              <Paragraph className="font-semibold mb-5 text-center">{item.body}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
