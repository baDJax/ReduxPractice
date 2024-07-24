"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userData = useSelector(
    (data: { userData: { users: { id: string; name: string }[] } }) =>
      data.userData.users
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const handleRemoveUser = (id: string) => {
    dispatch(removeUser(id));
  };
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h3 className="mb-5">Users</h3>
      <ul className="flex flex-col gap-2 max-w-52 w-full">
        {userData.map((user: { id: string; name: string }) => {
          return (
            <li
              key={user.id}
              className="px-2 py-1 flex justify-between items-center"
            >
              <p>{user.name}</p>
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="p-1 px-2 bg-slate-500 hover:bg-slate-600 duration-100 rounded-md text-sm text-white"
              >
                Remove User
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
