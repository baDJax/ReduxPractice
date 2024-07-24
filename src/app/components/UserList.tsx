"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const UserList = () => {
  const userData = useSelector(
    (data: { userData: { users: { id: string; name: string }[] } }) =>
      data.userData.users
  );
  const dispatch = useDispatch();
  const handleRemoveUser = (userId: string) => {
    dispatch(removeUser(userId));
  };
  return (
    <div className="max-w-52 w-full">
      <h2 className="text-center">User List</h2>
      <ul className="flex flex-col gap-2">
        {userData?.map((user: { id: string; name: string }) => {
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

export default UserList;
