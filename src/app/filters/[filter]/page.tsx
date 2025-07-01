"use client";

import { useParams } from "next/navigation"; // or useRouter().query for pages dir

export default function FilterPage() {
  const params = useParams(); // { filter: 'today' }
  const filter = params.filter;

  return (
    <div className="p-4  mt-0 md:mt-10 px-10 py-16">
      <h1 className="text-2xl font-bold capitalize">{filter} Events</h1>
      {/* Render content based on the filter */}
    </div>
  );
}