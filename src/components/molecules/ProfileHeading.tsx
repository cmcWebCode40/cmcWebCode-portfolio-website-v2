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
        Frontend Engineer.
      </Heading>
      <Heading
        size="sm"
        className="font-medium text-left text-xl md:text-2xl lg:text-2xl leading-10 md:leading-10"
      >
        Interested in React, React Native, Expo and Mobile/Web Development .
      </Heading>
    </div>
  );
};

export default ProfileHeading;
