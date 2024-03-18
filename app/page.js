import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-3xl font-bold text-black mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Check my week 2 project
      </Link>
      <Link href="/week-3"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 ">
          Check my week 3 project 
      </Link>
      <Link href="/week-4"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 ">
          Check my week 4 project 
      </Link>
      <Link href="/week-5"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300  ">
          Check my week 5 project 
      </Link>
      <Link href="/week-6"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300  ">
          Check my week 6 project 
      </Link>
      <Link href="/week-7"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300  ">
          Check my week 7 project 
      </Link>
      <Link href="/week-8"className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300  ">
          Check my week 8 project 
      </Link>
    </main>
  );
}
