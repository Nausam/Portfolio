import Link from "next/link";
import React from "react";

const LinkButton = ({ text, href }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 group-hover:opacity-30 dark:group-hover:opacity-70  transition-all duration-300 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-500 bg-fuchsia-500 rounded-lg blur opacity-0 "></div>
      <Link href={href} className="relative custom_btn_lg">
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;