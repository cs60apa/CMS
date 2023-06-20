"use client"
import React from 'react'
import Link from 'next/link'
import { BiSearchAlt, BiToggleLeft } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import { useTheme } from "next-themes";

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="relative border-b-4 border-slate-700 mb-10 z-1 ">
        <div className="flex-start">
        <p>
          <img src="https://devcircleafrica.com/wp-content/uploads/2022/07/cropped-logo-color.png" width={250} height={180} alt="logo"
          />
        </p>
        </div>
        <div className="grid grid-cols-4 gap-4 content-center mr-5 absolute top-3 right-0 flex justify-end">
            <div className="mr-5">
            <Link href="/">
              <CgProfile size={30}/>
            </Link>
            </div>
            <div>
            <button className="mr-5" onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} >
              <BiToggleLeft size={30}/>
            </button>
            </div>
            <div>
            <Link href="/">
              <BiSearchAlt size={30}/>
            </Link>
            </div>
        </div>
      </div>
  )
}
