import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="flex justify-center align-center list-none py-20 ">
        <ul className="grid grid-cols-4 gap-2 divide-x">
          <li>
            <a href="" className="ml-5 hover:text-[#84a0ef]">
              About us
            </a>
          </li>
          <li>
            <a href="/" className="ml-5 hover:text-[#84a0ef]">
              Contact us
            </a>
          </li>
          <li>
            <a href="/" className="ml-5 hover:text-[#84a0ef]">
              Terms of Usage
            </a>
          </li>
          <li>
            <a href="/" className="ml-5 hover:text-[#84a0ef]">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center align-center">
        <p>
          Copyright 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
}
