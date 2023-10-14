import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../logo.svg";

export function Navigation() {
  return (
    <div className="bg-gray-500 text-yellow-300">
      <div className="container ml-auto mr-auto flex justify-between h=[80px] py-4 px-6">
        <div className="flex items-center">
          <ReactLogo className="w-9" />
          <Link to="/" className="font-bold md:text-sm">
            SHOP
          </Link>
        </div>
        <div className="font-bold">
          <NavLink
            to="/"
            className="mr-3 py-2 px-4 hover:bg-gray-800 hover:border-black rounded transition-all duration-300 md:text-sm md:py-1 md:px-2 md:mr-0"
          >
            Home page
          </NavLink>
          <NavLink
            to="/favourites"
            className="py-2 px-4 hover:bg-gray-800 hover:border-black rounded transition-all duration-300 md:text-sm md:py-1 md:px-2"
          >
            Favourites
          </NavLink>
        </div>
      </div>
    </div>
  );
}
