import Link from "next/link";
import React from "react";

const LinkButton = ({ text, href, target }) => {
  return (
    <div>
      <div className="transition-all duration-300 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-500 bg-fuchsia-500 rounded-lg blur opacity-0"></div>
      <Link href={href} target={target} className="relative custom_btn_lg">
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;
