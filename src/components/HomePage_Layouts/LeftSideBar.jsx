import { getAllCatagories } from "@/lib/api";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const LeftSideBar = async () => {
  const categories = await getAllCatagories();
  // console.log(catagories)
  return (
    <div className="">
      {categories.map((category) => (
        <NavLink
          href={`/category/${category.category_id}`}
          key={category.category_id}
          className="py-4 pr-4 pl-2 btn text-left list-none w-full my-1"
        >
          <p>{category.category_name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideBar;
