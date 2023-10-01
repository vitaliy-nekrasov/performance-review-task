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
    <li className="productCard flex flex-row border-2 border-black rounded shadow-xl mb-5 p-2 ml-auto w-3/4 mr-auto h-auto">
      <div className="wrapper flex flex-col justify-evenly w-3/4">
        <h2 className="productTitle text-3xl font-bold mb-3">{data.title}</h2>
        <p className="description text-xl mb-3">{data.description}</p>
        <div className="flex gap-2">
          <p className="price">
            <span className="font-bold">Price: </span>
            {data.price}$
          </p>
          <p className="rating">
            <span className="font-bold">Rating: </span>
            {data.rating.rate}
          </p>
          {!isFavourite && <button
            className="bg-green-600 px-2 rounded hover:shadow-md"
            onClick={addToFavouriteProduct}
          >
            Add to favourite
          </button>}
          {isFavourite && <button
            className="bg-orange-600 px-2 rounded hover:shadow-md"
            onClick={removeFromFavouriteProduct}
          >
            Remove from favourite
          </button>}
        </div>
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="w-56 h-52 object-contain ml-auto"
      />
    </li>
  );
}
