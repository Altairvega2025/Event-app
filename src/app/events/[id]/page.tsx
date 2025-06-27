'use client';

import React from "react";
import { useParams } from "next/navigation"; // For App Router
// import { useRouter } from "next/router"; // For Pages Router
import { events } from "@/data/events"; // Adjust path based on structure

const EventDetailPage: React.FC = () => {
  const { id } = useParams(); // returns id as string
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <div className="p-6 text-red-500">Event not found.</div>;
  }

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{event.title}</h1>
      <p className="text-gray-600 mt-2">
        📍 {event.venue} | 🕒 {event.time} | {event.month} {event.date}
      </p>
      <p className="text-blue-700 font-bold mt-2">₦{event.price}</p>
   
    </div>
  );
};

export default EventDetailPage;
