import React, {useState} from "react";
import { IProduct } from "../models/models";
import { useAction } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export function ProductCard({ data }: { data: IProduct }) {
  const { addToFavourite, removeFromFavourite } = useAction();
  const { favourites } = useAppSelector(state => state.shop);
  
  const [isFavourite, setIsFavourite] = useState(favourites.includes(data));
   
  const addToFavouriteProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();  
      addToFavourite(data);
      setIsFavourite(true);
  }
  const removeFromFavouriteProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();  
      removeFromFavourite(data);
      setIsFavourite(false);
  }

  return (
    <li className="productCard flex flex-row border-2 border-black rounded shadow-xl mb-5 p-2 ml-auto w-3/4 mr-auto h-auto dark:border-gray-300">
      <div className="wrapper flex flex-col justify-evenly w-3/4 md:w-full ">
        <h2 className="productTitle text-3xl font-bold mb-3 2xl:text-2xl md:text-base dark:text-gray-300">
          {data.title}
        </h2>
        <img
          src={data.image}
          alt={data.title}
          className="hidden w-36 h-32 object-contain mb-3 ml-auto mr-auto md:flex"
        />
        <p className="description text-xl mb-3 2xl:text-lg md:text-sm dark:text-gray-300">
          {data.description}
        </p>
        <div className="flex gap-2">
          <p className="price dark:text-gray-300">
            <span className="font-bold">Price: </span>
            {data.price}$
          </p>
          <p className="rating dark:text-gray-300">
            <span className="font-bold">Rating: </span>
            {data.rating.rate}
          </p>
          {!isFavourite && (
            <button
              className="bg-green-600 px-2 rounded hover:shadow-md"
              onClick={addToFavouriteProduct}
            >
              Add to favourite
            </button>
          )}
          {isFavourite && (
            <button
              className="bg-orange-600 px-2 rounded hover:shadow-md md:text-sm"
              onClick={removeFromFavouriteProduct}
            >
              Remove from favourite
            </button>
          )}
        </div>
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="w-56 h-52 object-contain ml-auto 2xl:w-52 2xl:h-48 md:hidden"
      />
    </li>
  );
}
