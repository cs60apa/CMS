"use client"
import Header from './components/Header.jsx';
import {HiOutlineBookOpen} from 'react-icons/Hi';
import {CiTwitter} from 'react-icons/Ci';
import {RxDiscordLogo} from 'react-icons/Rx';
import { useRef } from 'react';

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className="min-h-screen mx-auto px-4 md:px-8 bg-cover bg-center bg-no-repeat bg-[#232529] text-[#fff]">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-center md:ml-4 lg:ml-20">
      <div className="grid grid-rows-3 gap-2 justify-start md:ml-4 lg:ml-20 md:mt-5 mb-2 h-40 md:h-60">
        <h1 className="font-bold font-sans text-xl md:text-2xl lg:text-4xl">The Modern Javascript Tutorial</h1>
        <p className="font-sans text-sm md:text-base lg:text-2xl pb-20 lg:mb-5 mr-2 md:mr-5 sm:mb-10 mb-10">How it's done now. From the basics to advanced topics with simple, but detailed explanations.</p>
        <form className="flex flex-row sm:flex-row sm:items-center mt-14 md:mt-5 lg:mt-16">
          <div className="sm:inline-block">
            <input type="search" name="query" placeholder="Search in the tutorial" className="border-2 bg-[#232529] py-2 px-2 border-solid border-slate-500 w-60 lg:w-96 text-[#e2e3e7]"></input>
          </div>
          <button className="inline-block h-11 sm:mt-0 relative border-none border-solid bg-[#448460] hover:bg-[#67b689] py-2 px-2">
            Search
          </button>
		    </form>
      </div>
      <div className="inline-block justify-end mt-16 md:mt-5 md:mr-20">
        <div className="inline-block mb-4 md:mb-10 ml-20 md:mt-5 md:ml-24">Last Updated on June 21, 2023</div>
        <div className="grid grid-cols-2 mr-2 ml-4 lg:ml-20 lg:mr-20">
        <a className="flex flex-row box-border md:box-content bg-[#292c31] hover:bg-zinc-700 py-2 px-1 md:px-2 mr-2 rounded justify-center align-center text-[#e3796a]" href="">
          <HiOutlineBookOpen size={25}/>
          <span className="mx-1 text-xs lg:text-lg">Buy EPUB/PDF</span>
        </a>
        <a className="flex flex-row box-border md:box-content bg-[#292c31] hover:bg-zinc-700 py-2 px-1 md:ml-1 md:px-10 rounded justify-center align-center text-[#e3796a]" href="" >
          <span className="mr-2 text-xs lg:text-lg">Share:</span>
          <CiTwitter size={25} />
        </a>
        </div>
        <div className="grid grid-cols-2 mr-2 ml-4 lg:ml-20 lg:mr-20">
        <a className="flex flex-row box-border md:box-content bg-[#292c31] hover:bg-zinc-700 py-2 px-1 md:px-2 mr-2 mt-2 md:mr-2 rounded justify-center align-center text-[#e3796a]" href="" >
          <span className="md:ml-2 ml-2 text-xs lg:text-lg">Github </span>
        </a>
        <a className="flex flex-row box-border md:box-content bg-[#292c31] hover:bg-zinc-700 py-2 px-1 md:ml-1 md:px-10 mt-2 rounded justify-center align-center text-[#e3796a]" href="" >
          <RxDiscordLogo size={25} />
          <span className="ml-2 md:ml-2 text-xs lg:text-lg">Discord Chat </span>
        </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-8 lg:mt-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 ml-0 md:ml-8 lg:ml-40">Table of Contents</h2>
    </div>
    <div className="ml-0 md:ml-8 lg:ml-20 md:mr-40">
      <p className="font-sans text-sm md:text-base lg:text-2xl lg:ml-20 mb-2 md:mb-2">Main course contains 2 parts which cover JavaScript as a programming language and working with a browser. There are also additional series of thematic articles.</p>
    </div>
    <div className="block">
      <div className="block outline-0">
        <div className="inline-block md:ml-8 lg:mx-40 my-8 md:my-10">
          <nav className="sticky top-0 left-0 right-0 z-1 max-w-screen border-b-2 bg-[#292c31] md:bg-[#232529] border-slate-700 hover:border-[#e3796a] ">
            <div className="relative overflow-x-auto box-border">
              <div className="snap-x contents flex-row md:flex-row md:w-auto md:flex-nowrap overflow-x-auto">
                <button onClick={() => scrollToSection(section1Ref)} >
                <a className="snap-start flex-1 shrink md:shrink-0 hover:text-[#e3796a]">
                  <h1 className="inline-block text-sm lg:text-2xl">PART 1 </h1>
                  <p className="text-xs lg:text-base">The Javascript Language</p>
                </a>
                </button>
                <button onClick={() => scrollToSection(section2Ref)} >
                  <a className="snap-start flex-1 shrink md:shrink-0 md:space-x-10 lg:space-x-40 hover:text-[#e3796a]">
                  <h1 className="inline-block text-sm lg:text-2xl">PART 2 </h1>
                  <p className="text-xs lg:text-base">Browser: Document, Events, Interfaces</p>
                  </a>
                </button>
                <button onClick={() => scrollToSection(section3Ref)} >
                  <a className="snap-start flex-1 shrink md:shrink-0 md:space-x-10 lg:space-x-40 hover:text-[#e3796a]">
                  <h1 className="inline-block lg:ml-40 text-sm lg:text-2xl">PART 3</h1>
                  <h1 className="lg:ml-2 text-xs lg:text-base">Additional articles</h1>
                  </a>
                </button>
              </div>
            </div>
          </nav>
          <div ref={section1Ref} className="inline-block pt-4 md:pt-16">
            <section>
              <div>
                <h1 className="font-bold text-2xl lg:text-3xl">The Javascript Language</h1>
                <div className="pt-5 md:pt-10 font-sans lg:text-2xl">
                  <p>Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.</p>
                  <p>We concentrate on the language itself here, with the minimum of environment-specific notes.</p>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">An introduction</a>
                  </div>
                  <ul className="md:grid md:grid-cols-2 md:gap-2 pt-5 list-none lg:text-xl">
                    <div className="md:grid md:grid-rows-2 md:gap-2">
                    <li>
                      <div className="md:justify-start" >1.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">An introduction to Javascript</a>
                      </div>
                    </li>
                    <li>
                      <div className="md:justify-start">1.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Manuals and specifications</a>
                      </div>
                    </li>
                    </div>
                    <div className="md:grid md:grid-rows-2 md:gap-2" >
                    <li>
                      <div className="">1.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Code editors</a>
                      </div>
                    </li>
                    <li>
                      <div className="">1.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Developer console</a>
                      </div>
                    </li>
                    </div>
                  </ul>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Javascript Fundamentals</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-9 md:grid-cols-2 md:gap-2 lg:grid-rows-6 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>2.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Hello, World!</a>
                      </div>
                    </li>
                    <li>
                      <div>2.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Code structure</a>
                      </div>
                    </li>
                    <li>
                      <div>2.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">The modern mode, "use strict"</a>
                      </div>
                    </li>
                    <li>
                      <div>2.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Variables</a>
                      </div>
                    </li>
                    <li>
                      <div>2.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Data types</a>
                      </div>
                    </li>
                    <li>
                      <div>2.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Interaction: alert, prompt, confirm</a>
                      </div>
                    </li>
                    <li>
                      <div>2.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Type conversions</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Basic operators, maths</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Comparisons</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Conditional branching: if, '?'</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">logical operators</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.12
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Nullish coalescing operator '?'</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.13
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Loops: while and for</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.14
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">The "switch" statement</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.15
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Functions</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.16
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Function expressions</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.17
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Arrow functions, the basics</a>
                      </div>
                    </li>
                    <li>
                      <div className="">2.18
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Javascript specials</a>
                      </div>
                    </li>
                    </ul>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Code quality</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>3.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Debugging in the browser</a>
                      </div>
                    </li>
                    <li>
                      <div>3.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Coding style</a>
                      </div>
                    </li>
                    <li>
                      <div>3.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Comments</a>
                      </div>
                    </li>
                    <li>
                      <div>3.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Ninja code</a>
                      </div>
                    </li>
                    <li>
                      <div>3.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Automated testing with Mocha</a>
                      </div>
                    </li>
                    <li>
                      <div>3.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Polyfills and transpillers</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Objects: the basics</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-3 md:grid-cols-2 md:gap-2 lg:grid-rows-3 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>4.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Objects</a>
                      </div>
                    </li>
                    <li>
                      <div>4.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Object references and copying</a>
                      </div>
                    </li>
                    <li>
                      <div>4.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Garbage collection</a>
                      </div>
                    </li>
                    <li>
                      <div>4.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Object methods, "this"</a>
                      </div>
                    </li>
                    <li>
                      <div>4.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Constructor, operator "new"</a>
                      </div>
                    </li>
                    <li>
                      <div>4.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Optional chaining '?'.</a>
                      </div>
                    </li>
                    <li>
                      <div>4.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Symbol type</a>
                      </div>
                    </li>
                    <li>
                      <div>4.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Object to primitive conversion</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Data types</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-6 md:grid-cols-2 md:gap-2 lg:grid-rows-4 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>5.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Methods of primitives</a>
                      </div>
                    </li>
                    <li>
                      <div>5.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Numbers</a>
                      </div>
                    </li>
                    <li>
                      <div>5.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Strings</a>
                      </div>
                    </li>
                    <li>
                      <div>5.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Arrays</a>
                      </div>
                    </li>
                    <li>
                      <div>5.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Array methods</a>
                      </div>
                    </li>
                    <li>
                      <div>5.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Iterables</a>
                      </div>
                    </li>
                    <li>
                      <div>5.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Map and Set</a>
                      </div>
                    </li>
                    <li>
                      <div>5.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">WeakMap and WeakSet</a>
                      </div>
                    </li>
                    <li>
                      <div>5.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Object.keys, values, entries</a>
                      </div>
                    </li>
                    <li>
                      <div>5.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Destructuring assignment</a>
                      </div>
                    </li>
                    <li>
                      <div>5.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Date and time</a>
                      </div>
                    </li>
                    <li>
                      <div>5.12
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">JSON methods, toJSON</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Advanced working with functions</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-3 md:grid-cols-2 md:gap-2 lg:grid-rows-6 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>6.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Recursion and Stack</a>
                      </div>
                    </li>
                    <li>
                      <div>6.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Rest parameters and spread syntax</a>
                      </div>
                    </li>
                    <li>
                      <div>6.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Variable scope, closure</a>
                      </div>
                    </li>
                    <li>
                      <div>6.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">The old "var"</a>
                      </div>
                    </li>
                    <li>
                      <div>6.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Global object</a>
                      </div>
                    </li>
                    <li>
                      <div>6.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Function object, NFE</a>
                      </div>
                    </li>
                    <li>
                      <div>6.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">The "new Function" syntax</a>
                      </div>
                    </li>
                    <li>
                      <div>6.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Scheduling: setTimeout and setInterval</a>
                      </div>
                    </li>
                    <li>
                      <div>6.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Decorators and forwarding, call/apply</a>
                      </div>
                    </li>
                    <li>
                      <div>6.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Function binding</a>
                      </div>
                    </li>
                    <li>
                      <div>6.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Arrow functions revisited</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Object properties configuration</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>7.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Property flags and descriptors</a>
                      </div>
                    </li>
                    <li>
                      <div>7.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Property getters and setters</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Prototypes, inheritance</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>8.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Prototypal inheritance</a>
                      </div>
                    </li>
                    <li>
                      <div>8.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">F.prototype</a>
                      </div>
                    </li>
                    <li>
                      <div>8.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Native prototypes</a>
                      </div>
                    </li>
                    <li>
                      <div>8.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Prototype methods, objects without __proto__</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Classes</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-flow-col lg:grid-rows-4 lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>9.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Class basic syntax</a>
                      </div>
                    </li>
                    <li>
                      <div>9.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Class inheritance</a>
                      </div>
                    </li>
                    <li>
                      <div>9.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Static properties and methods</a>
                      </div>
                    </li>
                    <li>
                      <div>9.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Private and protected properties and methods</a>
                      </div>
                    </li>
                    <li>
                      <div>9.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Extending built-in classes</a>
                      </div>
                    </li>
                    <li>
                      <div>9.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Class checking: "instanceof"</a>
                      </div>
                    </li>
                    <li>
                      <div>9.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Mixins</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Error handling</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>10.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Error handling, "try...catch"</a>
                      </div>
                    </li>
                    <li>
                      <div>10.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Custom errors, extending Error</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Promises: async/await</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-4 md:grid-cols-2 md:gap-2 lg:grid-rows-3 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>11.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Introduction: callbacks</a>
                      </div>
                    </li>
                    <li>
                      <div>11.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Promise</a>
                      </div>
                    </li>
                    <li>
                      <div>11.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Promises chaining</a>
                      </div>
                    </li>
                    <li>
                      <div>11.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Error handling with promises</a>
                      </div>
                    </li>
                    <li>
                      <div>11.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Promise API</a>
                      </div>
                    </li>
                    <li>
                      <div>11.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Promisification</a>
                      </div>
                    </li>
                    <li>
                      <div>11.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Microtasks</a>
                      </div>
                    </li>
                    <li>
                      <div>11.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Async/await</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Generators, advanced iteration</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>12.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Generators</a>
                      </div>
                    </li>
                    <li>
                      <div>12.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Async iteration, and generators</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Modules</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>13.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Modules, introduction</a>
                      </div>
                    </li>
                    <li>
                      <div>13.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Export and Import</a>
                      </div>
                    </li>
                    <li>
                      <div>13.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Dynamic imports</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Miscellaneous</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-3 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>14.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Proxy and Reflect</a>
                      </div>
                    </li>
                    <li>
                      <div>14.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Eval: run a code string</a>
                      </div>
                    </li>
                    <li>
                      <div>14.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Currying</a>
                      </div>
                    </li>
                    <li>
                      <div>14.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Reference Type</a>
                      </div>
                    </li>
                    <li>
                      <div>14.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">BigInt</a>
                      </div>
                    </li>
                    <li>
                      <div>14.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Unicode, string internals</a>
                      </div>
                    </li>
                    </ul>
                  </div>
              </div>
            </section>
          </div>
          <div ref={section2Ref} className="inline-block pt-4 md:pt-20">
            <section>
              <div>
                <h1 className="font-bold text-2xl lg:text-3xl">Browser: Document, Events, Interfaces</h1>
                <div className="pt-5 md:pt-10 font-sans lg:text-2xl">
                  <p>Learning how to manage the browser page: add elements, manipulate their size and position, dynamically create</p>
                  <p>interfaces and interact with the visitor</p>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Document</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-9 md:grid-cols-2 md:gap-2 lg:grid-rows-5 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>1.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Browser environment, specs</a>
                      </div>
                    </li>
                    <li>
                      <div>1.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">DOM tree</a>
                      </div>
                    </li>
                    <li>
                      <div>1.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Walking the DOM</a>
                      </div>
                    </li>
                    <li>
                      <div>1.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Searching: getElement*, querySelector*</a>
                      </div>
                    </li>
                    <li>
                      <div>1.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Node properties: type, tag and contents</a>
                      </div>
                    </li>
                    <li>
                      <div>1.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Attributes and properties</a>
                      </div>
                    </li>
                    <li>
                      <div>1.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Modifying the document</a>
                      </div>
                    </li>
                    <li>
                      <div>1.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Styles and classes</a>
                      </div>
                    </li>
                    <li>
                      <div>1.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Element size and scrolling</a>
                      </div>
                    </li>
                    <li>
                      <div>1.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Window sizes and scrolling</a>
                      </div>
                    </li>
                    <li>
                      <div>1.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Coordinates</a>
                      </div>
                    </li>
                    </ul>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Introduction to Events</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-3 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>2.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Introduction to browser events</a>
                      </div>
                    </li>
                    <li>
                      <div>2.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Bubbling and capturing</a>
                      </div>
                    </li>
                    <li>
                      <div>2.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Event delegation</a>
                      </div>
                    </li>
                    <li>
                      <div>2.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Browser default actions</a>
                      </div>
                    </li>
                    <li>
                      <div>2.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Dispatching custom events</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">UI Events</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col pt-5 list-none lg:text-xl">
                    <li>
                      <div>3.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Mouse events</a>
                      </div>
                    </li>
                    <li>
                      <div>3.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Moving the mouse: mouseover/out, mouseenter/leave</a>
                      </div>
                    </li>
                    <li>
                      <div>3.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Drag'n'Drop with mouse events</a>
                      </div>
                    </li>
                    <li>
                      <div>3.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Pointer events</a>
                      </div>
                    </li>
                    <li>
                      <div>3.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Keyboard: keydown and keyup</a>
                      </div>
                    </li>
                    <li>
                      <div>3.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Scrolling</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Forms, controls</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>4.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Form properties and methods</a>
                      </div>
                    </li>
                    <li>
                      <div>4.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Focusing: focus/blur</a>
                      </div>
                    </li>
                    <li>
                      <div>4.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Events: change, input, cut, copy, paste</a>
                      </div>
                    </li>
                    <li>
                      <div>4.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Forms: event and method submit</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Document and resource loading</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>5.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Page: DOMContentLoaded, load, beforeunload, unload</a>
                      </div>
                    </li>
                    <li>
                      <div>5.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Scripts: async, defer</a>
                      </div>
                    </li>
                    <li>
                      <div>5.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Resource loading: onload and onerror</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Miscellaneous</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-1 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>6.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Mutation observer</a>
                      </div>
                    </li>
                    <li>
                      <div>6.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Selection and Range</a>
                      </div>
                    </li>
                    <li>
                      <div>6.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Event loop: microtasks and macrotasks</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  </div>
                </section>
              </div>
            <div ref={section3Ref} className="inline-block pt-4 md:pt-20">
            <section>
              <div>
                <h1 className="font-bold text-2xl lg:text-3xl">Additional articles</h1>
                <div className="pt-5 md:pt-10 font-sans lg:text-2xl">
                  <p>List of extra topics that assume you've covered the first two parts of tutorial. There is no clear hierarchy here, you can read articles in the order you want.</p>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Frames and windows</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>1.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Popups and window methods</a>
                      </div>
                    </li>
                    <li>
                      <div>1.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Cross-window communication</a>
                      </div>
                    </li>
                    <li>
                      <div>1.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">The clickjacking attack</a>
                      </div>
                  </li>
                  </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Binary data, files</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>2.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">ArrayBuffer, binary arrays</a>
                      </div>
                    </li>
                    <li>
                      <div>2.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">TextDecoder and TextEncoder</a>
                      </div>
                    </li>
                    <li>
                      <div>2.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Blob</a>
                      </div>
                  </li>
                  <li>
                      <div>2.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">File and FileReader</a>
                      </div>
                  </li>
                  </ul>
                </div>
                <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Network requests</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-6 md:grid-cols-2 md:gap-2 lg:grid-rows-4 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>3.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Fetch</a>
                      </div>
                    </li>
                    <li>
                      <div>3.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">FormData</a>
                      </div>
                    </li>
                    <li>
                      <div>3.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Fetch: Download progress</a>
                      </div>
                    </li>
                    <li>
                      <div>3.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Fetch: Abort</a>
                      </div>
                    </li>
                    <li>
                      <div>5.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Fetch: Cross-Origin Requests</a>
                      </div>
                    </li>
                    <li>
                      <div>5.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Fetch API</a>
                      </div>
                    </li>
                    <li>
                      <div>5.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">URL objects</a>
                      </div>
                    </li>
                    <li>
                      <div>5.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">XMLHttpRequest</a>
                      </div>
                    </li>
                    <li>
                      <div>5.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Resumable file upload</a>
                      </div>
                    </li>
                    <li>
                      <div>5.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Long polling</a>
                      </div>
                    </li>
                    <li>
                      <div>5.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">WebSocket</a>
                      </div>
                    </li>
                    <li>
                      <div>5.12
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Server Sent Events</a>
                      </div>
                    </li>
                    </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Storing data in the browser</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>4.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Cookies, document.cookie</a>
                      </div>
                    </li>
                    <li>
                      <div>4.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">LocalStorage, sessionStorage</a>
                      </div>
                    </li>
                    <li>
                      <div>4.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Indexed DB</a>
                      </div>
                  </li>
                  </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Animation</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>5.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Bezier curve</a>
                      </div>
                    </li>
                    <li>
                      <div>5.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">CSS-animations</a>
                      </div>
                    </li>
                    <li>
                      <div>5.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Javascript animations</a>
                      </div>
                  </li>
                  </ul>
                  </div>
                  <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Web components</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-4 md:grid-cols-2 md:gap-2 lg:grid-rows-3 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>6.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">From the orbital height</a>
                      </div>
                    </li>
                    <li>
                      <div>6.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Custom elements</a>
                      </div>
                    </li>
                    <li>
                      <div>6.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Shadow DOM</a>
                      </div>
                    </li>
                    <li>
                      <div>6.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Template element</a>
                      </div>
                    </li>
                    <li>
                      <div>6.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Shadow DOM slots, composition</a>
                      </div>
                    </li>
                    <li>
                      <div>6.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Shadow DOM styling</a>
                      </div>
                    </li>
                    <li>
                      <div>6.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Shadow DOM and events</a>
                      </div>
                    </li>
                    </ul>
                    </div>
                    <div>
                  <div className="block relative md:pt-10 pt-5 font-bold font-sans text-xl lg:text-2xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">Regular expressions</a>
                  </div>
                  <ul className="md:inline-flex md:grid md:grid-rows-9 md:grid-cols-2 md:gap-2 lg:grid-rows-6 lg:grid-flow-col lg:gap-auto pt-5 list-none lg:text-xl">
                    <li>
                      <div>7.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Patterns and flags</a>
                      </div>
                    </li>
                    <li>
                      <div>7.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Character classes</a>
                      </div>
                    </li>
                    <li>
                      <div>7.3
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Unicode: flag "u" and class \p[...] </a>
                      </div>
                    </li>
                    <li>
                      <div>7.4
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Anchors: string start ^ and end $</a>
                      </div>
                    </li>
                    <li>
                      <div>7.5
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Multiline mode of anchors ^ $, flag "m"</a>
                      </div>
                    </li>
                    <li>
                      <div>7.6
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Word boundary: \b</a>
                      </div>
                    </li>
                    <li>
                      <div>7.7
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Escaping, special characters</a>
                      </div>
                    </li>
                    <li>
                      <div>7.8
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Sets and ranges [...]</a>
                      </div>
                    </li>
                    <li>
                      <div>7.9
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Quantifiers +, *, ? and [n] </a>
                      </div>
                    </li>
                    <li>
                      <div>7.10
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Greedy and lazy quantifiers</a>
                      </div>
                    </li>
                    <li>
                      <div>7.11
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Capturing groups</a>
                      </div>
                    </li>
                    <li>
                      <div>7.12
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Backreferences in pattern: \N and \k<name> </name></a>
                      </div>
                    </li>
                    <li>
                      <div>7.13
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Alternation (OR) |</a>
                      </div>
                    </li>
                    <li>
                      <div>7.14
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Lookahead and lookbehind</a>
                      </div>
                    </li>
                    <li>
                      <div>7.15
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Catastrophic backtracking</a>
                      </div>
                    </li>
                    <li>
                      <div>7.16
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Sticky flag "y", searching at position</a>
                      </div>
                    </li>
                    <li>
                      <div>7.17
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Methods of RegExp and String</a>
                      </div>
                    </li>
                    </ul>
                  </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div> 
    </main>
  )
}