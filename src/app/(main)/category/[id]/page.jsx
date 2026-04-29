import { getSpecificCategoryNews } from "@/lib/api";
import CategoryCard from "@/components/HomePage_Layouts/CategoryCard";
import LeftSideBar from "@/components/HomePage_Layouts/LeftSideBar";
import SocialSideBar from "@/components/HomePage_Layouts/SocialSideBar";
import React from "react";

const CategoryNews = async ({ params }) => {
  const { id } = await params;
  const categoryNews = await getSpecificCategoryNews(id);
  console.log(categoryNews);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
      <div className="col-span-2">
        <h2 className="text-xl font-bold">All Caterogy</h2>
        <LeftSideBar></LeftSideBar>
      </div>
      <div className="col-span-7">
        <h2 className="text-xl font-bold">Dragon News Home</h2>
        <div>
          {categoryNews.length > 0 ? (
            categoryNews.map((c) => (
              <CategoryCard key={c._id} category={c}></CategoryCard>
            ))
          ) : (
            <div className="p-14 my-10 text-5xl font-semibold text-center shadow-xl rounded-xl">
              News is not found
            </div>
          )}
        </div>
      </div>
      <div className="col-span-3 bg-amber-50 space-y-4">
        <h2 className="text-xl font-bold">Login With</h2>
        <SocialSideBar></SocialSideBar>
      </div>
    </div>
  );
};

export default CategoryNews;
