import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../logo.svg";

export function Navigation() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const htmlEl: HTMLElement | null = document.querySelector("html");
  return (
    <div className="bg-gray-500 text-yellow-300 dark:bg-gray-800 dark:text-yellow-600">
      <div className="container ml-auto mr-auto flex justify-between h=[80px] py-4 px-6">
        <div className="flex items-center">
          <ReactLogo className="w-9" />
          <Link to="/performance-review-task/" className="font-bold md:text-sm">
            SHOP
          </Link>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-7" onClick={goBack}>
            Back
          </button>
        </div>
        <div className="font-bold">
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mr-6"
            onClick={() => htmlEl?.classList.toggle("dark")}
          >
            Toggle Theme
          </button>
          <NavLink
            to="/performance-review-task/"
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
