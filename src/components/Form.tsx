import React, { ChangeEvent, FormEvent } from "react";

interface FormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  setInputValue: (value: string) => void;
}

export function Form({ submitHandler, setInputValue }: FormProps) {

  return (
    <form action="" className="mb-10" onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 w-[450px] h-[42px] mb-2 mr-4 rounded border-black"
        placeholder="Search product"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button className="border py-2 px-4 h-[42px] mb-2 rounded-3xl bg-blue-950 text-white">
        Search
      </button>
    </form>
  );
}
