"use client"
import Header from './components/Header.jsx';
import {HiOutlineBookOpen} from 'react-icons/Hi';
import {CiTwitter} from 'react-icons/Ci';
import {RxDiscordLogo} from 'react-icons/Rx';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="flex min-h-screen flex-col">
      <Header></Header>
      <div className="grid grid-cols-2 gap-1 justify-center ml-20">
      <div className="grid grid-rows-3 gap-2 justify-start ml-20 mt-10 mb-10 h-40">
        <h1 className="font-bold font-sans text-4xl">The Modern Javascript Tutorial</h1>
        <p className="font-sans text-2xl pb-20 mr-2">How it's done now. From the basics to advanced topics with simple, but detailed explanations.</p>
        <form className="flex mt-10">
          <div className="inline-block">
            <input type="search" name="query" placeholder="Search in the tutorial" className="border-2 bg-[#232529] py-2 px-2 border-solid border-slate-500 w-80 text-[#e2e3e7]"></input>
          </div>
          <button className="inline-block h-11 relative border-none border-solid bg-[#448460] hover:bg-[#67b689] py-2 px-2">
            Search
          </button>
		    </form>
      </div>
      <div className="inline-block justify-end mt-10 mr-20">
        <div className="inline-block mb-10 ml-96">Last Updated on June 21, 2023</div>
        <div className="grid grid-cols-2 mr-20">
        <a className="flex flex-row box-border bg-[#292c31] hover:bg-zinc-700 py-3 px-1 mr-2 rounded justify-center align-center text-[#e3796a]" href="">
          <HiOutlineBookOpen size={25}/>
          <span className="mx-2">Buy</span>
          <span> EPUB/PDF </span>
        </a>
        <a className="flex flex-row box-border bg-[#292c31] hover:bg-zinc-700 py-3 px-1 mr-5 rounded justify-center align-center text-[#e3796a]" href="" >
          <span className="mr-2">Share: </span>
          <CiTwitter size={25} />
        </a>
        </div>
        <div className="grid grid-cols-2 mr-20">
        <a className="flex flex-row box-border bg-[#292c31] hover:bg-zinc-700 py-3 px-1 mr-2 mt-2 rounded justify-center align-center text-[#e3796a]" href="" >
          <span className="ml-2">Github </span>
        </a>
        <a className="flex flex-row box-border bg-[#292c31] hover:bg-zinc-700 py-3 px-1 mr-5 mt-2 rounded justify-center align-center text-[#e3796a]" href="" >
          <RxDiscordLogo size={25} />
          <span className="ml-2">Discord Chat </span>
        </a>
        </div>
      </div>
    </div>
    <div className=" flex ml-40 mt-10 content-evenly">
      <h2 className="text-3xl font-bold mb-5">Table of Contents</h2>
    </div>
    <div>
      <p className="font-sans text-xl ml-40 mr-40">Main course contains 2 parts which cover JavaScript as a programming language and working with a browser. There are also additional series of thematic articles.</p>
    </div>
    <div className="block">
      <div className="block outline-0">
        <div className="inline-block ml-40 mt-20">
          <nav className="sticky top-0 z-1 border-b-2 border-slate-700 hover:border-[#e3796a] ">
            <div className="relative overflow-x-hidden box-border">
              <div className="contents flex-nowrap overflow-x-auto">
                <button>
                <a className="active flex-1 hover:text-[#e3796a]">
                  <h1>PART 1 </h1>
                  <h2>The Javascript Language</h2>
                </a>
                </button>
                <button>
                  <a className="active flex-1 space-x-60 hover:text-[#e3796a]">
                  <h1 className="inline-block ">PART 2 </h1>
                  <h2>Browser: Document, Events, Interfaces</h2>
                  </a>
                </button>
                <button>
                  <a className="active flex-1 space-x-60 hover:text-[#e3796a]">
                  <h1 className="inline-block ml-40">PART 3</h1>
                  <h2>Additional articles</h2>
                  </a>
                </button>
              </div>
            </div>
          </nav>
          <div className="inline-block pt-10">
            <section>
              <div>
                <h1 className="font-bold text-2xl">The Javascript Language</h1>
                <div className="pt-10 font-sans">
                  <p>Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.</p>
                  <p>We concentrate on the language itself here, with the minimum of environment-specific notes.</p>
                </div>
                <div>
                  <div className="block relative pt-10 font-bold font-sans text-xl hover:text-[#e3796a]">
                    <a href="" className="hover:border-b hover:border-[#e3796a]">An introduction</a>
                  </div>
                  <ul className="pt-5 list-none space-y-3">
                    <li>
                      <div>1.1
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">An introduction to Javascript</a>
                      </div>
                    </li>
                    <li>
                      <div>1.2
                      <a href="" className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">Manuals and specifications</a>
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
</ThemeProvider>
  )
}