import React, { FunctionComponent } from "react";
import { Heading, Icon } from "../atoms";
import { navLinks } from "@/utils";
import Link from "next/link";

const Header: FunctionComponent = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center">
      <Heading title="Logo" size="sm" className="font-bold text-2xl">
        Michael King <span className="text-4xl">👑</span> 
      </Heading>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center space-x-6">
          {navLinks.map((item) => (
            <li key={item.title} className="flex font-semibold uppercase">
              <Link title={item.title} href={item.link}>{item.title}</Link>{" "}
              <Icon className="-mt-2 -ml-2" type="dot" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
