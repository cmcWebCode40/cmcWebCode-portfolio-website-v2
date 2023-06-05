import Image from "next/image";
import React, { FunctionComponent } from "react";
import { ProfileHeading, ProfileLinks } from "../molecules";

const HighlightSection: FunctionComponent = () => {
  return (
    <div>
      <div>
        <ProfileHeading />
        <ProfileLinks />
      </div>
      <div>
        <Image
          src="/Michael_passport_photo.jpeg"
          alt="Michael king"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default HighlightSection;
