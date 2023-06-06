import React, { FunctionComponent } from "react";
import { ButtonLink, Heading, Icon } from "../atoms";
import { footerLinks } from "@/utils";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Heading size="sm" className="font-semibold my-4">
        REACH ME ON
      </Heading>
      <div className="flex items-center justify-center space-x-4">
        {footerLinks.map((item) => (
          <ButtonLink title={item.title} href={item.link}>
            <Icon type={item.type} />
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
