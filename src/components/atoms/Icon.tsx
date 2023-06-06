import React, { FunctionComponent } from "react";
import { IconBaseProps } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import {BsDot} from'react-icons/bs'

type IconType = "mail" | "twitter" | "github" | "linkedIn" | 'dot';

interface IconProps extends IconBaseProps {
  type: IconType;
}

const Icon: FunctionComponent<IconProps> = ({ type, size = 40, ...rest }) => {
  switch (type) {
    case "linkedIn":
      return <FiLinkedin size={size} />;
    case "mail":
      return <AiOutlineMail size={size} {...rest} />;
    case "twitter":
      return <FiTwitter size={size} {...rest} />;
    case "github":
      return <FiGithub size={size} {...rest} />;
    case "dot":
      return <BsDot size={size} {...rest} />;

    default:
      throw new Error("Icon not available");
  }
};

export default Icon;
