import React from "react";
import s from "../styles/index.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${s.home} flex justify-center items-center flex-col`}>
      <h1 className={`text-[40px]`}>Hello</h1>
      <p className={`capitalize`}>
        welcome to my{" "}
        <span
          className={`text-sky-300 text-[20px] hover:bg-sky-200 hover:text-white hover:p-[5px] hover:rounded-md transition-all duration-150`}
        >
          <Link href={"/clicker/clicker"}>Clicker box </Link>
        </span>
        app
      </p>
      <p className={`text-[10px]`}>click the clicker box above </p>
    </div>
  );
}
