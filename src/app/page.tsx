"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";
import light from '../../public/image/AdobeStock_241384655.webp'
import { useState,useEffect } from "react";
import Link from "next/link";
import { events } from "@/components/user/events";
import EventCard from "@/components/user/EventCard";
import EventFilterBar from "@/components/user/EventFilterBar";
import { useSearch } from "@/components/user/SearchContext";



interface HomeProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Home({ children }: { children: ReactNode }) {


 
const [activeFilter, setActiveFilter] = useState("All");

  


const { search, setSearch } = useSearch();
  const filteredEventee = events.filter((event) => {
    if (activeFilter === "All") return true;
    return event.title?.toLowerCase().includes(activeFilter.toLowerCase());
  });


const filteredEvents = events.filter((event) => {
    const searchTerm = (search || "").toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      [event.title, event.venue, event.date, event.month, event.time, event.price]
        .filter(Boolean)
        .some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(searchTerm)
        )
    

    const matchesFilter =
    activeFilter === "All" ||
    event.title?.toLowerCase().includes(activeFilter.toLowerCase());

  return matchesSearch && matchesFilter;
  });

  

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
      className="w-full  object-cover object-top rounded-md min-h-[82vh] md:h-[80vh]"
    />



    <div className="absolute top-1/6 md:top-1/4  left-4 sm:left-8 md:left-16 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6">
      <div className="flex flex-col gap-6"> 
        <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug  text-[#000000]">
           Create A Refreshing Memory
        </h1>

       
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="relative overflow-hidden group px-6 py-3 w-fit font-medium text-white bg-[#3e80e4] rounded shadow">
            <span className="relative z-10 group-hover:text-black transition duration-300">
              <Link href="/createevent">Create Event</Link>
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>

          <button className="bg-white text-black px-2  md:px-6 py-2 rounded shadow opacity-70 hover:opacity-100 hover:border-[#3e80e4] hover:border-1 transition w-1/2 md:w-1/3 whitespace-nowrap ">
            <Link href="/blog">More about Us</Link>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>



<EventFilterBar   activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}/>



 <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-6xl w-full px-4 py-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </section>
</div>
    
  );
}
