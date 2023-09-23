import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <div className="bg-gray-500 text-yellow-300">
      <div className="container ml-auto mr-auto flex justify-between h=[80px] py-4">
        <span className="font-bold">Logo</span>
        <div className="font-bold">
          <NavLink
            to="/"
            className="mr-3 py-2 px-4 hover:bg-gray-800 hover:border-black rounded transition-all duration-300"
          >
            Home page
          </NavLink>
          <NavLink
            to="/favourites"
            className="py-2 px-4 hover:bg-gray-800 hover:border-black rounded transition-all duration-300"
          >
            Favourites
          </NavLink>
        </div>
      </div>
    </div>
  );
}
