import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex justify-between items-center">
        <a className="btn btn-ghost normal-case text-xl">Keyword Extractor</a>
        <p className="font-thin">Developed with OpenAI API</p>
      </div>
    </nav>
  );
};

export default Header;
