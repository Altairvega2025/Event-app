'use client';


import { useRouter } from "next/router";
import React from "react";

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch event by `id` here if you have API or static data

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Event Details (ID: {id})</h1>
      {/* Render full event details here */}
    </div>
  );
};

export default EventDetailPage;
