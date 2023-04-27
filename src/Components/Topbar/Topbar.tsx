import Link from 'next/link'
import React from 'react'
import s from "./Topbar.module.scss"

export default function Topbar() {
  return (
    <div className={`${s.navContainer}`}>
        <h1 className={`nav-logo text-[25px]`}>Clicker <span className={`text-sky-200`}>Box</span> App</h1>
        <h3 className={`text-[15px] text-slate-300 hover:text-sky-500 transition-all duration-100`}> <Link href={"/"}>{`<- Back To Home`}</Link></h3>
    </div>
  )
}
