"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

import { TextInput } from "@tremor/react";

const Search = () => {
  return (
    <>
      <TextInput
        icon={MagnifyingGlassCircleIcon}
        placeholder="Quick Search..."
        className="p-2"
      />
    </>
  );
};

export default Search;
