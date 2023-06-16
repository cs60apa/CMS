"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import home from './images/home.png';
import user from './images/user.png';
import settings from './images/settings.png';
import yes from "./images/yes.jpg";
import no from "./images/no.jpg";
import maybe from "./images/maybe.jpg";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?term=${searchTerm}`);
    setSearchTerm('');
  };
  return (
    <main className="flex min-h-screen flex-col">
      <div class="grid grid-cols-4 gap-4 ml-10 absolute top-3 right-0 flex justify-end stroke-cyan-500 hover:stroke-cyan-700">
            <div>
              <Image src={home} width={25} height={20} alt="Home"
              />
            </div>
            <div>
              <Image src={user} width={25} height={20} alt="User"/>
            </div>
            <div>
              <Image src={settings} width={25} height={20} alt="Settings"/>
            </div>
        </div>
        <header data-role="Header" className="home-header">
        <div>
        <p> C<script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/dsoshxtl.json"
              trigger="hover"
              colors="primary:#4be1ec,secondary:#cb5eee">
            </lord-icon>ntent Management Hub
        </p>
        </div>
        </header>
        <div class="relative ml-3">
        <form class="search">
			    <input type="text" placeholder="Search" class="search__input" />
			    <button type="button" class="search__button">
				  <i class="ri-search-2-line"></i>
			    </button>
		    </form>
        </div>
      <div class="grid grid-cols-2 gap-1">
      <div class="grid grid-rows-2 gap-0 justify-start ml-10 mt-10 h-40">
        <h1 class="title">Content Management Hub</h1>
        <p class="font-sans h-40 text-lg text-left tracking-normal content-stretch">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="flex justify-end mr-20 mt-10">
        <div class="shadow-2xl shadow-blue-500/50">
        <Image src={maybe} width={500} height={480} alt="4"
              />
        </div>
      </div>
    </div>
    <div class="mt-10">
    <nav class="block sticky grid grid-cols-3 gap-3 mt-20 ml-20 mr-10">
      <div class="">
        Part 1
        </div>
      <div>Part 2</div>
      <div>Part 3</div>
    </nav>
    </div>
    </main>
  )
}