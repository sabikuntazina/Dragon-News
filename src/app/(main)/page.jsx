import { getSpecificCategoryNews } from "@/lib/api";
import LeftSideBar from "@/components/HomePage_Layouts/LeftSideBar";
import SocialSideBar from "@/components/HomePage_Layouts/SocialSideBar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const default_value = "01";
  return redirect(`/category/${default_value}`);
}
