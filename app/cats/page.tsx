import React from "react";
import { Cat, CatsPageProps } from "../_lib/types";
import CatList from "../components/CatList";
import TraitDropdown from "../components/TraitDropdown";

function determineFetchCatUrl(searchParams: any) {
  const paramsPresent = searchParams.value && searchParams.trait ? true : false

  let url: string;
  if (paramsPresent) {
    url = `https://fuzzles.glitch.me/api/cats?key=982u3rjorofd08s23908hdho&${searchParams.trait}=${searchParams.value}`
  } else {
    url = "https://fuzzles.glitch.me/api/cats?key=982u3rjorofd08s23908hdho"
  }
  return url
}

const CatsPage: React.FC<CatsPageProps> = async ({ searchParams }) => {
  const url: string = determineFetchCatUrl(searchParams);
  const data = await fetch(url);
  const cats: Cat[] = await data.json();
  const filteredCatTraits = Object.keys(cats[0]).filter(trait => trait != "id" && trait != "imageUrl")
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <TraitDropdown options={filteredCatTraits} />
      <CatList cats={cats} />
    </div>
  );
}
export default CatsPage


