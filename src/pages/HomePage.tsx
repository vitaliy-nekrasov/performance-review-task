import React, { useState, FormEvent } from "react";
import { useGetProductsQuery } from "../store/shop/shop.api.";
import { ProductCard } from "../components/ProductCard";
import { Form } from "../components/Form";
import { NothingFound } from "../components/NothingFound";
import { ClockLoader } from "react-spinners"

export function HomePage() {
    const [search, setSearch] = useState('');
    const [selectValue, setSelectValue] = useState("electronics");
    const { isLoading, data } = useGetProductsQuery(search);
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearch(selectValue);
    };
    
    return (
      <div className="container ml-auto mr-auto flex flex-col items-center pt-10 pb-10">
        <Form
          submitHandler={submitHandler}
          setSelectValue={setSelectValue}
          selectValue={selectValue}
        />
        {data?.length === 0 && <NothingFound />}
        {isLoading ? (<ClockLoader color="#0003b6" loading size={100} />) :
          (<ul>
          {data?.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </ul>)}
      </div>
    );
}