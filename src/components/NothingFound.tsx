import React from "react";


export function NothingFound() {

  return (
    <>
      <h3 className="error text-5xl text-red-700 mb-4 font-bold">
        Nothing found
      </h3>
      <p className="text-3xl">
        Please try searching from these categories:
        <span className="text-green-700 font-bold ml-1">
          electronics, jewelery, men's clothing, women's clothing
        </span>
      </p>
    </>
  );
}
