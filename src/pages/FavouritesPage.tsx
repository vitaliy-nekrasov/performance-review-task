import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useAppSelector } from "../hooks/redux";

export function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.shop);

  if (favourites.length === 0) return <p className="text-center mt-6 font-semibold text-2xl">No products.</p>

  return (
    <div className="container ml-auto mr-auto flex flex-col items-center pt-10 pb-10">
      <ul>
        {favourites?.map((favourite) => (
          <ProductCard data={favourite} key={favourite.id} />
        ))}
      </ul>
    </div>
  );
}
