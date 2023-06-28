"use client";
import React from "react";
import Link from "next/link";


import { IoIosPerson } from "react-icons/Io";
import { CiSearch } from "react-icons/Ci";
import { CiLight } from "react-icons/Ci";
import { CiDark } from "react-icons/Ci";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative border-b-4 border-slate-700 mb-10 z-1 ">
      <div className="flex-start md:ml-2">
        <p>
          <img
            src="https://devcircleafrica.com/wp-content/uploads/2022/07/cropped-logo-color.png"
            width={200}
            height={150}
            alt="logo"
          />
        </p>
      </div>
      <div className="flex grid-cols-3 gap-3 mt-3 ml-5 lg:mr-5 md:mr-3 absolute top-3 right-0  justify-end">
        <div className="md:mr-2">
          <Link href="/">
            <IoIosPerson size={20} />
          </Link>
        </div>
        <div>
          <button
            className="md:mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <CiLight size={20} /> : <CiDark size={20} />}
          </button>
        </div>
        <div>
          <Link href="/">
            <CiSearch size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
