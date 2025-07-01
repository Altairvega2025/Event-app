"use client";

import React from "react";

type EventFilterBarProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const filters: string[] = [
  "All",
  "For you",
  "Online",
  "Today",
  "This weekend",
  "4th of July",
  "Free",
  "Music",
  "Food & Drink",
  "Charity & Causes",
];

const EventFilterBar: React.FC<EventFilterBarProps> = ({
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="px-4 py-6">
      {/* Filters */}
      <div className="flex overflow-x-auto gap-3 mt-2 text-xs md:text-sm text-gray-600 font-medium max-w-[95%] mx-auto">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-3 py-1 rounded-full ${
              activeFilter === filter
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
