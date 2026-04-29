'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
  const pathName= usePathname();
  // console.log(pathName, "pathname")
  // console.log(href, "href")
  const isActive= href===pathName
  // console.log(isActive, "isActive")
  return (
    <div className={`py-4 pr-4 pl-2 text-left list-none w-full my-1 ${isActive ? 'bg-pink-400 text-white' : ""}`}>

    <Link href={href} >
      {children}
      
    </Link>
    </div>
  );
};

export default NavLink;