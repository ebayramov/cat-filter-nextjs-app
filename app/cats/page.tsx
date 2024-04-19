import React from "react";
import { Cat, CatsPageProps } from "../_lib/types";
import CatList from "../components/CatList";
import TraitDropdown from "../components/TraitDropdown";

function determineFetchCatUrl(searchParams : any){
  // 2. If there are searchParams present, set paramsPresnt to "true", if not, set it to "false"
  // http://localhost:3000/cats?trait=breed&value=bengal would result in this being "true"
  // http://localhost:3000/cats would result in this being "false"
  const paramsPresent = searchParams.value && searchParams.trait ? true : false

  let url: string;
  if(paramsPresent){
    // 3. If there are search params, we will want to use the "Filter cats" endpoint
    url = `https://fuzzles.glitch.me/api/cats?key=982u3rjorofd08s23908hdho&${searchParams.trait}=${searchParams.value}`
  }else{
    // 4. If there are no search params present, we will want to use the "Get all cats" endpoint
    url = "https://fuzzles.glitch.me/api/cats?key=982u3rjorofd08s23908hdho"
  }
  // 5. Result from above will be returned 
  return url
}

const CatsPage: React.FC<CatsPageProps> = async({ searchParams }) => {
  // 1. determineFetchCatUrl is called and takes in searchParams
  const url : string = determineFetchCatUrl(searchParams);
  // 6. Make an API request to the URL returned from above function
  const data = await fetch(url);
  const cats: Cat[] = await data.json();
  const filteredCatTraits = Object.keys(cats[0]).filter(trait => trait != "id" && trait != "imageUrl")
   return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <TraitDropdown options={filteredCatTraits}/>
      <CatList cats={cats}/>
    </div>
  );
}
export default CatsPage


