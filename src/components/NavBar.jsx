import React from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// colors:FDDE94, FFEFCA

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#FDDE94]">
      <div className="flex max-w-[1240px] items-center justify-between  px-4 py-4 font-europa">
        <h1 className="text-4xl">Sesame</h1>
        <ul className="flex text-2xl">
          <li className="mr-4 underline">Home</li>
          <li className="mr-4 underline">More</li>
          <li className="mr-4 underline">About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
