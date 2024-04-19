import { Cat, CatDetailsPageProps } from "@/app/_lib/types";
import Link from "next/link";
import React from "react";

export default async function CatDetails({ params }: CatDetailsPageProps) {
  const data = await fetch(
    `https://fuzzles.glitch.me/api/cats/${params.id}?key=982u3rjorofd08s23908hdho`
  );
  const cat: Cat = await data.json();
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center text-black">
      <div className="p-8 bg-white rounded-lg shadow-md w-96 space-y-4">
        <h1 className="text-xl font-bold">Details for Cats with ID: {params.id}</h1>

        <img
          src={cat.imageUrl}
          alt={cat.name}
          className="w-full h-56 object-cover rounded-md"
        />

        <p className="font-medium">
          Name: <span className="font-normal">{cat.name}</span>
        </p>
        <p className="font-medium">
          Breed: <span className="font-normal">{cat.breed}</span>
        </p>
        <p className="font-medium">
          Age: <span className="font-normal">{cat.age}</span>
        </p>
        <p className="font-medium">
          Temperament: <span className="font-normal">{cat.temperament}</span>
        </p>
        <p className="font-medium">
          Moral Alignment:{" "}
          <span className="font-normal">{cat.moralAlignment}</span>
        </p>

        <Link
          href="/cats"
          className="block w-full p-2 mt-4 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back to Cats
        </Link>
      </div>
    </div>
  );
}
