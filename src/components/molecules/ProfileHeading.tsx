import React, { FunctionComponent, HTMLAttributes } from "react";
import { Heading } from "../atoms";

interface ProfileHeadingProps extends HTMLAttributes<HTMLDivElement> { }

const ProfileHeading: FunctionComponent<ProfileHeadingProps> = ({
  ...rest
}) => {
  return (
    <div {...rest}>
      <Heading
        size="sm"
        className="font-bold text-left text-3xl md:text-4xl lg:text-5xl mb-6"
      >
        Software Engineer.
      </Heading>
      <Heading
        size="sm"
        className="font-medium text-left text-xl md:text-2xl lg:text-2xl leading-10 md:leading-10"
      > 
      Building modern software products with React, React Native, and Expo, with a keen interest in Mobile/Web Development and AI.
      </Heading>
    </div>
  );
};

export default ProfileHeading;
