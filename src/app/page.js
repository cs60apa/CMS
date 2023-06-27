"use client"
import Header from './components/Header.jsx';
import {HiOutlineBookOpen} from 'react-icons/Hi';
import {CiTwitter} from 'react-icons/Ci';
import {RxDiscordLogo} from 'react-icons/Rx';

export default function Home() {
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
                <button>
                <a className="snap-start flex-1 shrink md:shrink-0 hover:text-[#e3796a]">
                  <h1 className="inline-block text-sm lg:text-2xl">PART 1 </h1>
                  <p className="text-xs lg:text-base">The Javascript Language</p>
                </a>
                </button>
                <button>
                  <a className="snap-start flex-1 shrink md:shrink-0 md:space-x-10 lg:space-x-40 hover:text-[#e3796a]">
                  <h1 className="inline-block text-sm lg:text-2xl">PART 2 </h1>
                  <p className="text-xs lg:text-base">Browser: Document, Events, Interfaces</p>
                  </a>
                </button>
                <button>
                  <a className="snap-start flex-1 shrink md:shrink-0 md:space-x-10 lg:space-x-40 hover:text-[#e3796a]">
                  <h1 className="inline-block lg:ml-40 text-sm lg:text-2xl">PART 3</h1>
                  <h1 className="lg:ml-2 text-xs lg:text-base">Additional articles</h1>
                  </a>
                </button>
              </div>
            </div>
          </nav>
          <div className="inline-block pt-4 md:pt-10">
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
                      <div className="md:justify-start">1.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">An introduction to Javascript</a>
                      </div>
                    </li>
                    <li>
                      <div className="md:justify-start">1.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Manuals and specifications</a>
                      </div>
                    </li>
                    </div>
                    <div className="md:grid md:grid-rows-2 md:gap-2 ">
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>  
  </main>
  )
}