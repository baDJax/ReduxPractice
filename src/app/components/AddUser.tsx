"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState<string>("");
  const handleChange = (e: any) => setName(e.target.value);
  const dispatch = useDispatch();
  const userDispatch = () => {
    name.trim() && dispatch(addUser(name));
    setName("");
  };

  return (
    <div>
      <h2 className="text-center">Add User</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border-slate-300 border-[1px] border-solid px-2 py-1 rounded-md"
          onChange={handleChange}
          value={name as string}
        />
        <button
          onClick={userDispatch}
          className="bg-slate-500 text-white hover:bg-slate-600 duration-100 px-2 py-1 rounded-md"
          disabled={name ? false : true}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
