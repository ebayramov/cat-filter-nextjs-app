import React from "react";
import { CatProps } from "../_lib/types";
import Link from "next/link";

// Single "cat" object will be passed in as props
const CatCard: React.FC<CatProps> = ({ cat }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 sm:m-2 md:m-1 max-w-sm w-full">
      <div
        className="h-40 sm:h-56 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${cat.imageUrl})` }}
      ></div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black">{cat.name}</h3>
        <h4 className="text-gray-600">{cat.breed}</h4>
        <Link href={`/cats/${cat.id}`} className="text-blue-500 hover:underline">
          View Cat Details
        </Link>
      </div>
    </div>
  );
};
export default CatCard;
