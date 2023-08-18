"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";

import { RiMoonLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import Link from "next/link";

const NavBar = () => {
  const options = [
    { logo: <BiSun />, text: "light" },
    { logo: <RiMoonLine />, text: "dark" },
  ];

  let [toggle, setToggle] = useState(false);
  let { theme, setTheme } = useTheme();

  return (
    <nav className=" w-screen overflow-hidden  lg:px-8  dark:bg-slate-800 dark:text-white">
      {/* mobile nav */}
      <div className="lg:hidden flex justify-between items-center px-4  py-4">
        <Link href='/' className="flex gap-2 justify-center items-center">
          <span className="text-2xl">
            <FaCode className="w-10 h-10" />
          </span>
          <span className="text-2xl uppercase font-bold ">Hassan</span>
        </Link>
        <div className="flex-col">
          <span
            className=" text-3xl cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FiMenu />
          </span>
        </div>
      </div>
      {toggle && (
        <ul
          className="lg:hidden flex-col gap-3 justify-center items-center text-center
             w-full "
        >
          <Link
            href={"/"}
            className="hover:opacity-50 cursor-pointer font-medium"
          >
            <div className="flex gap-2 items-center justify-center hover:opacity-70">
              <span>
                <AiOutlineHome />
              </span>
              <span>Home</span>
            </div>
          </Link>
          <a href="#projects" className="hover:opacity-50 cursor-pointer font-medium">
            <div className="flex gap-1 items-center justify-center">
              <span>
                <AiOutlineFileDone />
              </span>
              <span>Projects</span>
            </div>
          </a>

          <a href="#about" className="hover:opacity-50 cursor-pointer font-medium">
            <div className="flex gap-1 items-center justify-center">
              <span>
                <BsInfoCircle />
              </span>
              <span>About</span>
            </div>
          </a>
          <a href="#contact" className="font-medium">
            <div
              className="hover:opacity-50 cursor-pointer 
                    flex gap-1 items-center justify-center"
            >
              <span>
                <BsTelephone />
              </span>
              <span>Contact</span>
            </div>
          </a>
          <li
            className="flex flex-row justify-center items-center text-center 
                 gap-2 
                 cursor-pointer mt-3 font-medium "
          >
            <span
              className="flex flex-row justify-center items-center  gap-2 
                   text-center w-fit p-2  border border-slate-400 rounded-lg"
            >
              {options.map((icon) => {
                return (
                  <p
                    onClick={() => {
                      setTheme(icon.text);
                    }}
                    className={`text-2xl text-center ${
                      theme === icon.text && "text-sky-600"
                    }`}
                    key={icon.text}
                  >
                    {icon.logo}
                  </p>
                );
              })}
            </span>
          </li>
        </ul>
      )}

      {/* desktop nav */}
      <div
        className=" hidden lg:flex justify-start xl:gap-80 overflow-hidden
  items-center p-6 "
      >
        <section className="hidden lg:flex gap-2  items-center">
          <span className="text- mt-2">
            <FaCode className="text-8 lg:w-8 h-8 font-bold " />
          </span>
          <span className="text-2xl uppercase font-bold">Hassan</span>
        </section>
        <div className="hidden md:block ml-12 lg:ml-32">
          <ul className="flex justify-center items-center gap-6 font-medium">
            <Link
              href="/"
              className="font-medium flex gap-1 items-center justify-center
                    hover:opacity-50 cursor-pointer
            "
            >
              <span>
                <AiOutlineHome />
              </span>
              <span>Home</span>
            </Link>
            <a href="#projects" className="font-medium">
              <div
                className="flex gap-1 items-center justify-center
                    hover:opacity-50 cursor-pointer"
              >
                <span>
                  <AiOutlineFileDone />
                </span>
                <span>Projects</span>
              </div>
            </a>

            <a href="#home" className="font-medium">
              <div
                className="flex gap-1 items-center justify-center
                    hover:opacity-50 cursor-pointer"
              >
                <span>
                  <BsInfoCircle />
                </span>
                <span>About</span>
              </div>
            </a>
            <a href="#contact" className="font-medium">
              <div
                className="flex gap-1 items-center justify-center
                    hover:opacity-50 cursor-pointer"
              >
                <span>
                  <BsTelephone />
                </span>
                <span>Contact</span>
              </div>
            </a>
            <li
            className="flex flex-row justify-center items-center text-center 
                 gap-2 
                 cursor-pointer mt-3 font-medium "
          >
            <span
              className="flex flex-row justify-center items-center  gap-2 
                   text-center w-fit p-2  border border-slate-400 rounded-lg"
            >
              {options.map((icon) => {
                return (
                  <p
                    onClick={() => {
                      setTheme(icon.text);
                    }}
                    className={`text-2xl text-center ${
                      theme === icon.text && "text-sky-600"
                    }`}
                    key={icon.text}
                  >
                    {icon.logo}
                  </p>
                );
              })}
            </span>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
