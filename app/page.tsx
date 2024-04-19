import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">Welcome to Cats!</h1>
      <Link href="/cats" className="text-4xl text-blue-600 font-bold hover:underline hover:text-blue-800 transition duration-300">Check out some Cats!</Link>
    </main>
  );
}
