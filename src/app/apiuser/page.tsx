/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice";
import { AppDispatch, RootState } from "../redux/store";

const page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector((state: RootState) => state.userData.apiuser);
  const [first, setfirst] = useState(false);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <button onClick={() => setfirst(!first)}>
        {first ? "Hide Users" : "Show Users"}
      </button>
      {first && (
        <div>
          {apiData?.map((user: any) => (
            <div key={user.id}>
              <h2>{user.username}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
