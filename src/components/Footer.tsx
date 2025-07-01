import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
  


       <div className="bg-[#B5D5FF] text-gray-800 px-8 md:px-8 py-20 ">
        <div className='mx-auto items-center max-w-6xl w-full'> 
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
                <img src="/image/logo.jpg" alt="Pevent Logo" className="w-6 h-6 mr-2 rounded-2xl" />
            <span className="text-xl md:text-2xl font-bold text-[#2E62A6]">
              Ita Dun
            </span>
          </div>
          <p className="text-sm leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Sell Tickets</a></li>
            <li><a href="#" className="hover:underline">Online Voting</a></li>
            <li><a href="#" className="hover:underline">Event Registrations</a></li>
            <li><a href="#" className="hover:underline">Create Your Event</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#2E62A6]" />
              <span>+234 810 429 3963</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#2E62A6]" />
              <span>info@faajiex</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-[#2E62A6]" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-[#2E62A6]" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-[#2E62A6]" />
              <span>X (Twitter)</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedinIn className="text-[#2E62A6]" />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center">© 2025 Ita Dun. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
      </div>
  
    </div>
  )
}
