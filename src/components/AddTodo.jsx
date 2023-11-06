import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 flex justify-between gap-2"
    >
      <input
        type="text"
        className="w-[75%] md:w-[85%] bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`w-[25%] md:w-[15%] text-white border border-[gray] bg-indigo-500 focus:outline-none hover:bg-indigo-600 rounded ${
          input === "" && "cursor-not-allowed"
        }`}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
