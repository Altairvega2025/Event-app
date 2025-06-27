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
  { icon: <FaMicrophone size={28} />, label: "Music" },
  { icon: <FaGlobe size={28}/>, label: "Nightlife" },
  { icon: <FaTheaterMasks size={28} />, label: "Performing & Visual Arts" },
  { icon: <FaCalendarAlt size={28} />, label: "Showcase" },
  { icon: <FaHeart size={28} />, label: "Dating" },
  { icon: <FaGamepad size={28} />, label: "Hobbies" },
  { icon: <FaBriefcase size={28} />, label: "Business" },
  { icon: <FaUtensils size={28} />, label: "Food & Drink" },
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
    <div className="px-4 py-6 ">
      {/* Category Icons */}
      <div className="flex  gap-16 pb-6 ">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[80px] text-center text-sm text-gray-700"
          >
            <div className="w-30 h-30 border border-gray-300 rounded-full flex items-center justify-center text-xl text-gray-600 hover:bg-blue-100 transition bg-[#e3ebf3]">
              {cat.icon}
            </div>
            <span className="mt-2">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Location Selector */}
      <div className="mt-6 mb-2 flex items-center gap-2 text-gray-700 font-medium max-w-[90%] mx-auto">
        <span>Browsing events in</span>
        <select className="text-blue-600 font-semibold underline bg-transparent outline-none">
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="ph">Port Harcourt</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto gap-4 mt-2 text-sm text-gray-600 font-medium max-w-[90%] mx-auto">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className={`whitespace-nowrap px-3 py-1 rounded-full  ${
              idx === 0 ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-600"
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
