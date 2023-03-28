import React from "react";

const Header = () => {
  return (
    <header className="top-0 sticky w-full h-14 p-4 text-white flex justify-start items-center bg-black font-bold text-2xl z-10">
      <div>
        <h1>AI <span className="text-rose-500">Keyword extractor</span></h1>
      </div>
    </header>
  );
};

export default Header;
