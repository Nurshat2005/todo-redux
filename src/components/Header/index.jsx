import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TbBrandTailwind } from "react-icons/tb";
import { VscGithubInverted } from "react-icons/vsc";


const Header = () => {
  return (
    <div className="  flex justify-around  w-[100%] h-[100px] bg-slate-400 flex  my-2 items-center">
      <div className=" flex   gap-10 items-center cursor-pointer justify-between">
      <a className="text-5xl "> <TbBrandTailwind /></a>
        <Link to={"/"}>
          <a className=" text-2xl">Home</a>
        </Link>
        <Link to={"/about"}>
          <a className=" text-2xl">About</a>
        </Link>
        <Link to={"/product"}>
          <a className=" text-2xl">Product</a>
        </Link>
       
      </div>
      <div className="text relative flex justify-between items-center gap-48">
        <a className=" absolute top-2 cursor-pointer  right-[240px] text-lg ">
          <CiSearch />
        </a>
        <input
          type="text"
          maxLength={10}
          className="w-[300px]  h-8 rounded-[2px]  outline-none items-center flex"
          placeholder="Search"
        />
      <a className="text-4xl ">  <VscGithubInverted /></a>

      </div>
    </div>
  );
};

export default Header;
