import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../logo.svg";

export function Navigation() {
  return (
    <div className="bg-gray-500 text-yellow-300">
      <div className="container ml-auto mr-auto flex justify-between h=[80px] py-4">
        <div className="flex">
          <ReactLogo className="w-9" />
          <Link to="/" className="font-bold">SHOP</Link>
        </div>
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
