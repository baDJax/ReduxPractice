import Link from "next/link";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <AddUser />
      <div className="border-b-[1px] my-5 w-full border-slate-300"></div>
      <UserList />
    </div>
  );
}
