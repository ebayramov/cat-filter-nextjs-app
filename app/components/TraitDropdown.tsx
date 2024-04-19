"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
type TraitDropdownProps = {
  options: string[];
};

const TraitDropdown = ({ options }: TraitDropdownProps) => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onSelect = () => {
    router.push(
      `/cats?trait=${selectedOption}&value=${inputValue}`
    );
  }

  return (
    <div className="p-4 space-y-4 bg-gray-300 rounded-lg shadow-md md:w-1/4 mx-auto mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Select an option:
      </label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="block w-full mt-1 p-2 bg-white text-black border rounded-md"
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label className="block text-sm font-medium text-gray-700">
        Enter the value you want to filter for:
      </label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="block w-full mt-1 p-2 bg-white border rounded-md text-black"
      />

      <button
        onClick={onSelect}
        className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Filter Cats!
      </button>
    </div>
  );
};
export default TraitDropdown;
