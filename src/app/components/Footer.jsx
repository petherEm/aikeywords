import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 bg-slate-800 text-white flex items-center justify-center space-x-2">
        <h1 className="font-bold">
          Developed by
        </h1>
        <Link href="https://www.piotrmaciejewski.com"> Piotr Maciejewski</Link>
    </div>
  );
};

export default Footer;
