"use client"
import React from 'react'
import Link from 'next/link'
import {CiLight, CiDark, CiSearch} from "react-icons/Ci";
import {IoIosPerson} from 'react-icons/Io';
import { useTheme } from "next-themes";


export default function Header() {
    const { theme, setTheme } = useTheme();
  return (
    <div className="relative border-b-4 border-slate-700 mb-10 z-1 ">
        <div className="flex-start ml-2">
        <p>
          <img src="https://devcircleafrica.com/wp-content/uploads/2022/07/cropped-logo-color.png" width={250} height={180} alt="logo"
          />
        </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-3 mr-5 absolute top-3 right-0 flex justify-end">
            <div className="mr-2">
            <Link href="/">
              <IoIosPerson size={27}/>
            </Link>
            </div>
            <div>
            <button className="mr-2" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
                { theme === "dark" ? <CiLight size={27}/>: <CiDark size={27}/> }
            </button>
            </div>
            <div>
            <Link href="/">
              <CiSearch size={27}/>
            </Link>
            </div>
        </div>
      </div>
  )
}
