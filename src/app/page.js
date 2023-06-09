"use client"
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from 'next/navigation';
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?term=${searchTerm}`);
    setSearchTerm('');
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <form id="search" onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search for content"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border font-mono font-bold border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
        <button type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-mono font-bold py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-lightblue-500"
        >Search</button>
      </form>
        
      </div>
    </main>
  )
}