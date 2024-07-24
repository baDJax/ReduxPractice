"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/todoSlice";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const [todo, setTodo] = useState<String>("");
  const handleChange = (e: any) => setTodo(e.target.value);
  const dispatch = useDispatch();
  const todoDispatch = () => {
    todo.trim() && dispatch(addTodo(todo));
    setTodo("");
  };
  const todoData = useSelector(
    (data: { todoData: { todos: { id: string; name: string }[] } }) =>
      data.todoData.todos
  );
  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2 className="text-center">Add Todo</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border-slate-300 border-[1px] border-solid px-2 py-1 rounded-md"
          onChange={handleChange}
          value={todo as string}
        />
        <button
          onClick={todoDispatch}
          className="bg-slate-500 text-white hover:bg-slate-600 duration-100 px-2 py-1 rounded-md"
          disabled={todo ? false : true}
        >
          Add Todo
        </button>
      </div>
      <div className="border-b-[1px] my-5 w-full border-slate-300"></div>
      {todoData?.map((todo) => {
        return (
          <div
            key={todo.id}
            className="px-2 py-1 flex justify-between items-center"
          >
            <h3>{todo.name}</h3>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="p-1 px-2 bg-slate-500 hover:bg-slate-600 duration-100 rounded-md text-sm text-white"
            >
              Remove User
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddTodo;
