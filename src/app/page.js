import Image from 'next/image';
import Link from 'next/link';
import user from './images/user.png';
import logo from './images/logo.png';
import maybe from './images/maybe.jpg';
import home from './images/home.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative border-b-4 border-slate-700 mb-10 z-1 ">
        <div className="flex-start">
        <p>
          <Image src={logo} width={250} height={180} alt="logo"
          />
        </p>
        </div>
        <div className="grid grid-cols-4 gap-4 ml-10 mt-5 absolute top-3 right-0 flex justify-end stroke-cyan-500 hover:stroke-cyan-700">
            <div>
            <Link href="/">
              <Image src={home} width={20} height={20} alt="Home"
              />
            </Link>
            </div>
            <div>
            <Link href="/profile">
              <Image src={user} width={20} height={20} alt="User"/>
            </Link>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 justify-center ml-20">
      <div className="grid grid-rows-3 gap-2 justify-start ml-20 mt-10 mb-10 h-40">
        <h1 className="text-3xl font-bold">Content Management Hub</h1>
        <p className="font-sans text-2xl pb-20">How it's done now. From the basics to advanced topics with simple, but detailed explanations.</p>
        <form className="search mt-20 w-96 py-10">
			    <input type="search" name="query" placeholder="Search" class="search__input" />
			    <button type="submit" name="type" value="article" class="search__button">
				  <i class="ri-search-2-line"></i>
			    </button>
		    </form>
      </div>
      <div className="flex justify-end mr-40 mt-5">
        <div className="shadow-2xl mr-20shadow-blue-500/50">
        <Image src={maybe} width={600} height={500} alt="4"
              />
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
        <div className="inline-block ml-40 mt-10">
          <nav className="sticky top-0 z-1 border-b-2 border-slate-700 hover:border-[#e3796a] ">
            <div className="relative overflow-x-hidden box-border">
              <div className="contents flex-nowrap overflow-x-auto">
                <button>
                <a className="active flex-1 hover:text-[#e3796a]">
                  <h1 className="inline-block">PART 1 </h1>
                  <h2>The Javascript Language</h2>
                </a>
                </button>
                <button>
                  <a className="active flex-1 space-x-60 hover:text-[#e3796a]">
                  <h1 className="inline-block ml-20">PART 2 </h1>
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
        </div>
      </div>
    </div>   
    </main>
  )
}