"use client";

import { useParams } from "next/navigation";
import RoomPlanner from "../page";
import { furnitureData } from "@/app/data/furnitureData";

const SlugPage = () => {
  const { slug } = useParams();  // Get the slug from the URL parameters

  // Retrieve the furniture data based on the slug
  const furniture = furnitureData[slug as string] || []; 

  return <RoomPlanner/>;  // Pass only the furniture to the RoomPlanner component
};

export default SlugPage;
