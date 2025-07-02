
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



type NavbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({search,setSearch}:NavbarProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);



  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {/* Backdrop */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setShowSearch(false)}
        ></div>
      )}

      <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <nav className="flex justify-between items-center mx-auto max-w-6xl w-full px-4 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-[#163546]">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/image/logo.jpg"
                alt="Logo"
                className="w-6 h-6 rounded-2xl"
              />
              <p className="font-bold font-inter text-3xl text-[#3e80e4]">Ita Dun</p>
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-6 text-[#163546] font-light">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/explore">Explore</Link></li>
            <li><Link href="/createevent">Create Event</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacts">Contacts Us</Link></li>

            {/* Search toggle or input */}
            {showSearch ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={search}
                  onChange={handleSearchChange}
                  className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all w-[200px]"
                />
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setShowSearch(false)}
                >
                  <IoMdClose />
                </button>
              </div>
            ) : (
              <li>
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-gray-700 hover:text-[#3e80e4]"
                >
                  <CiSearch size={20} />
                </button>
              </li>
            )}

            <li>
              <Link
                href="/Login"
                className="bg-[#3e80e4] text-white px-6 py-2 rounded hover:bg-white hover:text-[#3e80e4] hover:border hover:border-[#3e80e4]"
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden pr-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <p className="text-black font-bold">X</p>
              ) : (
                <RxHamburgerMenu size={25} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-white font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/explore">Explore</Link></li>
            <li><Link href="/createevent">Create Event</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacts">Contacts Us</Link></li>
             <li>
              <Link
                href="/Login"
                className="bg-[#3e80e4] text-white px-6 py-2 rounded hover:bg-white hover:text-[#3e80e4] hover:border hover:border-[#3e80e4]"
              >
                Login
              </Link></li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;















