"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 


type EventProps = {
  id:number
  date: string;
  month: string;
  title: string;
  image: string;
  venue: string;
  time: string;
  price: string;
};

const EventCard: React.FC<EventProps> = ({
  id,
  date,
  month,
  title,
  image,
  venue,
  time,
  price,
}) => 
  
  {
    

     const router = useRouter();

 const handleClick = () => {
    router.push(`/events/${id}`);
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[23%] flex-shrink-0" 
       onClick={handleClick}   >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <div className="text-sm text-gray-500 font-semibold">
          {month} {date}
        </div>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="mr-2">📍 {venue}</span>
          <span>🕒 {time}</span>
        </div>
        <div className="mt-2 text-blue-700 font-bold">
          Starting at ₦{price}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

