"use client";

import { useParams } from "next/navigation"; 

export default function FilterPage() {
  const params = useParams(); 
  const filter = params.filter;

  return (
    <div className="p-4  mt-0 md:mt-10 px-10 py-16">
      <h1 className="text-2xl font-bold capitalize">{filter} Events</h1>
    
    </div>
  );
}