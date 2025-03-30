import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Paragraph } from "../atoms";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/constants/links";

const ProfileLinks: FunctionComponent = () => {
  return (
    <div>
      <Paragraph className="space-x-2">
        <span>You can find me on</span>
        <Link
          className="underline font-medium"
          target="_blank"
          href={LINKEDIN_LINK}
          title="LinkedIn"
        >
          LinkedIn
        </Link>
        ,
        <Link
          className="underline font-medium"
          target="_blank"
          href={GITHUB_LINK}
          title="Github"
        >
          Github
        </Link>
        <Link
          className="underline font-medium"
          target="_blank"
          href={EMAIL_LINK}
          title="Email"
        >
         & Email
        </Link>
      </Paragraph>
    </div>
  );
};

export default ProfileLinks;
