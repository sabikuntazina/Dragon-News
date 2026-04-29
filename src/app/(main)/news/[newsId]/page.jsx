import { getSingleNews } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { newsId } = await params;
  const category = await getSingleNews(newsId);

  return {
    title: category.title,
    description: category.description,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { newsId } = await params;
  const category = await getSingleNews(newsId);
  console.log(category);
  return (
    <div>
      <div className="card bg-base-100 m-10 shadow-sm my-5">
        <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
          <div className="flex justify-between items-center gap-3">
            <Image
              src={category.author?.img}
              alt={category.author?.name}
              height={40}
              width={40}
              className="rounded-full"
            ></Image>

            <div>
              <h2 className="font-bold ">{category.author?.name}</h2>
              <p>{category.author?.published_date}</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <p>
              <FaBookmark />
            </p>
            <p>
              <FaShareAlt />
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{category.title}</h2>
          <figure>
            <Image
              src={category.image_url}
              alt={category.title}
              height={200}
              width={300}
              className="w-4xl"
            ></Image>
          </figure>

          <p className="line-clamp-3 text-lg  ">{category.details}</p>
          <p className="border-b border-b-gray-400 pb-4"></p>

          <div className="flex justify-between items-center text-lg">
            <div className="flex items-center gap-2">
              <FaEye />
              <p>{category.total_view}</p>
              <Link
                href={`/category/${category.category_id}`}
                className="bg-pink-600 text-white font-bold btn"
              >
                <button>See all news for this category</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
