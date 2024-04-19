import React from "react";
import { CatListProps } from "../_lib/types";
import CatCard from "./CatCard";

// Cat API data will be passed in as props
const CatList: React.FC<CatListProps> = ({ cats }) => {
  return (
    <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center p-4 sm:p-8 m-2 sm:m-4 rounded-lg'>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </ul>
  );
};
export default CatList;

