import Link from "next/link";
import React from "react";
import s from "./Topbar.module.scss";

export default function Topbar() {
  return (
    <div className={`${s.navContainer}`}>
      <h1 className={`${s.navLogo}`}>
        Clicker <span className={`${s.innerLogo}`}>Box</span> App
      </h1>
      <h3 className={`${s.navLink}`}>
        {" "}
        <Link href={"/"}>{`<- Back To Home`}</Link>
      </h3>
    </div>
  );
}
