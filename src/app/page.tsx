"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import light from '../../public/image/AdobeStock_241384655.webp'

import  {titleClassName,headerclass,What_We_Do, quote,textclass,We_work_with}  from "./data";
import { useState,useEffect } from "react";
import Link from "next/link";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import EventFilterBar from "@/components/EventFilterBar";



export default function Home() {

   const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
  };


  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const router = useRouter();

  
  return (
   


    <div className="">
      
<section className="mt-0 md:mt-10 px-10 py-10 ">

  <div className="relative"> 
    <Image
      src={light}
      alt="chia"
      className="w-full  object-cover object-top rounded-md min-h-[62vh] md:h-[80vh]"
    />



    <div className="absolute top-1/6 md:top-1/4  left-4 sm:left-8 md:left-16 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6">
      <div className="flex flex-col gap-6"> 
        <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug  text-[#000000]">
           Create A Refreshing Memory
        </h1>

       
        <div className="flex flex-row sm:flex-row gap-4 mt-4">
          <button className="relative overflow-hidden group px-6 py-3 w-fit font-medium text-white bg-[#3e80e4] rounded shadow">
            <span className="relative z-10 group-hover:text-black transition duration-300">
              <Link href="/createevent">Create Event</Link>
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>

          <button className="bg-white text-black px-6 py-2 rounded shadow opacity-70 hover:opacity-100 hover:border-[#3e80e4] hover:border-4 transition w-1/3">
            <Link href="/blog">More about Us</Link>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>


<EventFilterBar/>





<section>
  <div className="p-6 bg-white min-h-screen max-w-[90%] mx-auto">
    <h2 className="text-2xl font-bold mb-6">Top trending in Lagos</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </div>
</section>




<section>
  <div className="p-6 bg-white min-h-screen max-w-[90%] mx-auto">
    <h2 className="text-2xl font-bold mb-6">Free Events</h2>

    <div className="flex flex-wrap gap-6 justify-start">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] flex-shrink-0"
        >
          <EventCard {...event} />
        </div>
      ))}
    </div>
  </div>
</section>

</div>
    
  );
}
