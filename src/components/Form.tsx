import React, { ChangeEvent, FormEvent } from "react";

interface FormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  setSelectValue: (value: string) => void;
  selectValue: string;
}

export function Form({ submitHandler, setSelectValue, selectValue }: FormProps) {

  return (
    <form
      action=""
      className="mb-10 flex md:flex-col dark:bg-slate-600"
      onSubmit={submitHandler}
    >
      <select
        id="size"
        name="size"
        value={selectValue}
        className="border w-[450px] h-[42px] mb-2 mr-4 rounded border-black md:w-full"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSelectValue(e.target.value)
        }
      >
        <option value="electronics">electronics</option>
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
