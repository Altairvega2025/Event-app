"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import light from '../../public/image/light.png'

import  {titleClassName,headerclass,What_We_Do, quote,textclass,We_work_with}  from "../app/data";
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
<section className="mt-0 md:mt-10">
  <div className="relative">
    <Image
      src={light}
      alt="chia"
      className="w-full h-auto min-h-[140vh] md:h-screen object-cover blur-[2px]" 
    />

    <div className="absolute top-1/6 md:top-1/4  left-4 sm:left-8 md:left-16 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6">
      <div className="flex flex-col gap-6"> {/* Increased gap between elements */}
        <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug  text-[#ec5f74]">
          We Don’t Do PR. We Engineer Perception.
        </h1>

        <p className={`text-sm sm:text-base md:text-lg text-black ${textclass}`}>
          A referral-only strategic communications firm scaling influence across Africa, the diaspora, and the global stage.
        </p>

        <p className="text-black  font-medium  text-[18px] ">
          Slow loop of Lagos traffic at night → fade to Capitol Hill steps → aerial of Johannesburg skyline → sleek boardroom in Dubai.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="relative overflow-hidden group px-6 py-3 w-fit font-medium text-white bg-[#ff2143] rounded shadow">
            <span className="relative z-10 group-hover:text-black transition duration-300">
              <Link href="/createevent">Create Event</Link>
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
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
      <div className="flex gap-6 overflow-x-auto pb-4 flex-wrap">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
</section>



<section>
   <div className="p-6 bg-white min-h-screen max-w-[90%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Free Event </h2>
      <div className="flex gap-6 overflow-x-auto pb-4 flex-wrap">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
</section>
</div>
    
  );
}
