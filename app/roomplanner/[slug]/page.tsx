"use client";

import { useParams } from "next/navigation";
import RoomPlanner from "../page";
import { furnitureData } from "@/app/data/furnitureData";

const SlugPage = () => {
  const { slug } = useParams();
 
  // Extract the correct furniture array based on the slug
  const furniture = furnitureData[slug as string] || [];

  return <RoomPlanner slug={slug as string} furniture={furniture} />;
};

export default SlugPage;
