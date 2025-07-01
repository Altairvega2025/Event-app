"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  
 // const [isOpen, setIsOpen] = useState<boolean>(false);
  //const [showSearch, setShowSearch] = useState<boolean>(false);

const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);



  const [search, setsearch] = useState("")

  
 const handlesearch=(e)=>{
     setsearch(e.target.value)
     console.log(search)
 }

  return (
    

    <div className="fixed  top-0 left-0 z-50 w-full bg-white">
    <nav className="flex justify-between bg-white  mx-auto items-center max-w-6xl w-full px-0 py-4 md:px-0 md:py-3">

     
     
      <div className="flex items-center justify-center text-2xl font-bold text-[#163546] py-0 px-4 md:py-2 rounded-tl-lg rounded-br-lg tracking-wide">
  <Link href="/" className="flex items-center space-x-2 hover:text-[#343a40]">
    <img src="/image/logo.jpg" alt="Pevent Logo" className="w-6 h-6 rounded-2xl" />
    <p className="font-bold text-3xl text-[#3e80e4]">Ita Dun</p>
  </Link>
</div>


      <ul className=" space-x-6 text-[text-[#163546]]   hidden md:flex font-light ">
         <li><Link href="/" className="hover:text-[#3e80e4]">Home</Link></li>
        <li><Link href="/explore" className="hover:text-[#3e80e4]">Explore</Link></li>
        <li><Link href="/createevent" className="hover:text-[#3e80e4]">Create Event</Link></li>
        <li><Link href="/blog" className="hover:text-[#3e80e4]">Blog</Link></li>
        <li><Link href="/contacts" className="hover:text-[#3e80e4]">Contacts Us</Link></li>
           <li><button onClick={() => setShowSearch(!showSearch)}><CiSearch /></button></li>

             <li><Link href="/Login" className="bg-[#3e80e4] text-white  px-6 py-3 rounded hover:bg-white hover:border-4 hover:border-[#3e80e4] hover:text-[#3e80e4]"> Login</Link></li>
   
            </ul>
   

        <div className="md:hidden  pr-8">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <p className="font-bold text-black">X</p> :<RxHamburgerMenu size={25} color="black" />}
          </button>
        </div>
    </nav>




{showSearch && (
        <div className=" px-4 py-2 shadow-md z-10 ml-20">
          
          <input type="text" placeholder="Search events..."  className="w-[12rem] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search} onChange={handlesearch} />
              
        </div>
      )}










      


      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4  font-semibold bg-white">
          <li><Link href="/" className="hover:text-white text-[#163546]">Home</Link></li>
          <li><Link href="/explore" className="hover:text-[#343a40] text-[#343a40]">Explore</Link></li>
          <li><Link href="/createevent" className="hover:text-[#343a40] text-[#343a40]">Create Event</Link></li>
          <li><Link href="/blog" className="hover:text-[#343a40] text-[#343a40]">Blog</Link></li>
          <li><Link href="/contacts" className="hover:text-[#343a40] text-[#343a40]">Contacts Us</Link></li>
         
        </ul>



      )}
    </div>
  );
};

export default Navbar;






















