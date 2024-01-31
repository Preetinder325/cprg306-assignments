import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-3xl font-bold text-black mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2"className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
          Wanna see my project of week 2? CLICK ME!
      </Link>
      <Link href="/week-3"className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 ">
          Wanna see my project of week 3? CLICK ME!
      </Link>
    </main>
  );
}
