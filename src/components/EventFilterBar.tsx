import React, { JSX } from "react";
import {
  FaMicrophone,
  FaGlobe,
  FaTheaterMasks,
  FaCalendarAlt,
  FaHeart,
  FaGamepad,
  FaBriefcase,
  FaUtensils,
} from "react-icons/fa";

interface Category {
  icon: JSX.Element;
  label: string;
}

const categories: Category[] = [
  { icon: <FaMicrophone size={24} />, label: "Music" },
  { icon: <FaGlobe size={24} />, label: "Nightlife" },
  { icon: <FaTheaterMasks size={24} />, label: "Performing & Visual Arts" },
  { icon: <FaCalendarAlt size={24} />, label: "Showcase" },
  { icon: <FaHeart size={24} />, label: "Dating" },
  { icon: <FaGamepad size={24} />, label: "Hobbies" },
  { icon: <FaBriefcase size={24} />, label: "Business" },
  { icon: <FaUtensils size={24} />, label: "Food & Drink" },
];

const filters: string[] = [
  "All",
  "For you",
  "Online",
  "Today",
  "This weekend",
  "4th of July",
  "Pride",
  "Free",
  "Music",
  "Food & Drink",
  "Charity & Causes",
];

const EventFilterBar: React.FC = () => {
  return (
    <div className="px-4 py-6">
      {/* Category Icons */}
      <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-6 md:justify-between pb-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[70px] text-center text-xs md:text-sm text-gray-700 shrink-0"
          >
            <div className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 bg-[#e3ebf3] transition duration-300">
              {cat.icon}
            </div>
            <span className="mt-2">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Location Selector */}
      <div className="mt-6 mb-2 flex flex-wrap items-center gap-2 text-gray-700 font-medium max-w-[95%] mx-auto text-sm md:text-base">
        <span>Browsing events in</span>
        <select className="text-blue-600 font-semibold underline bg-transparent outline-none">
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="ph">Port Harcourt</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto gap-3 mt-2 text-xs md:text-sm text-gray-600 font-medium max-w-[95%] mx-auto">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className={`whitespace-nowrap px-3 py-1 rounded-full ${
              idx === 0
                ? "text-blue-600 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilterBar;
