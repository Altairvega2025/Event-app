'use client';

import React from "react";
import { useParams } from "next/navigation"; 
// import { useRouter } from "next/router"; 
import { events } from "@/components/user/events"; 

const EventDetailPage: React.FC = () => {
  const params = useParams();
   const id = params?.id;
  
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
