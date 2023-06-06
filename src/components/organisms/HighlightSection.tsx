import Image from "next/image";
import React, { FunctionComponent } from "react";
import { ProfileHeading, ProfileLinks } from "../molecules";
import { ButtonLink } from "../atoms";
import { RESUME_LINK } from "@/constants/links";

const HighlightSection: FunctionComponent = () => {
  return (
    <div className="flex justify-between md:flex-row-reverse  flex-col items-center mt-16">
      <div className="mb-6 md:mb-0">
        <Image
          src="/images/profile_photo.jpeg"
          alt="Michael king"
          width={400}
          height={400}
          priority
        />
      </div>
      <div>
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
