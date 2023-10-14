import React, { ChangeEvent, FormEvent } from "react";

interface FormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  setInputValue: (value: string) => void;
}

export function Form({ submitHandler, setInputValue }: FormProps) {

  return (
    <form action="" className="mb-10 flex md:flex-col" onSubmit={submitHandler}>
      {/* <input
        type="text"
        className="border py-2 px-4 w-[450px] h-[42px] mb-2 mr-4 rounded border-black md:w-full"
        placeholder="Search product"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      /> */}
      <select
        id="size"
        name="size"
        className="border w-[450px] h-[42px] mb-2 mr-4 rounded border-black md:w-full"
      >
        <option value="electronics" selected>electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      <button className="border py-2 px-4 h-[42px] mb-2 rounded-3xl bg-blue-950 text-white md:mb-0">
        Search
      </button>
    </form>
  );
}
