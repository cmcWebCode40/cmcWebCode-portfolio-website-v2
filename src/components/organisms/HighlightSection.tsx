import React, { FunctionComponent } from "react";
import Lottie from "lottie-react";
import { ProfileHeading, ProfileLinks } from "../molecules";
import { ButtonLink } from "../atoms";
import { RESUME_LINK } from "@/constants/links";
import techNetworkAnimation from "../../../public/animation.json";

const HighlightSection: FunctionComponent = () => {
  return (
    <div className="flex justify-between md:flex-row-reverse  flex-col items-center mt-16">
      <div className="mb-6 md:mb-0">
        <Lottie style={{
          height: 500,
        }} animationData={techNetworkAnimation} loop={true} />
      </div>
      <div className="md:basis-2/4">
        <ProfileHeading className="mb-6" />
        <ProfileLinks />
        <ButtonLink
          className="mt-6 w-full md:w-auto"
          size="lg"
          title="View Resume"
          href={RESUME_LINK}
          variant="default"
        >
          View Resume
        </ButtonLink>
      </div>
    </div>
  );
};

export default HighlightSection;
