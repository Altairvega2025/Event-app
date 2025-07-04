"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CiPhone, CiMail } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FormErrors, UserInfo } from './signup';
import axios from 'axios';



const Signup = () => {
  const router = useRouter();

  
  const [userInfor, setuserInfor] = useState<UserInfo>({
    name: '',
    email: '',
    isChecked: false,
     password: '',
    passwordverify: true,
    isPasswordSecure: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});





const validateForm = () => {
    const newErrors: FormErrors = {};

  if (!userInfor.name?.trim()) {
    newErrors.name = "Full name is required.";
  }

  if (!userInfor.email?.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(userInfor.email)) {
    newErrors.email = "Email is not valid.";
  }

  if (!userInfor.password?.trim()) {
    newErrors.password = "Password is required.";
  } else if (userInfor.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
  }

  if (!userInfor.isChecked) {
    newErrors.terms = "You must accept the terms.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};








   const handlepassword = (val: string) => {
    if (/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(val)) {
      setuserInfor({ ...userInfor, password: val, passwordverify: true });
    } else {
      setuserInfor({ ...userInfor, password: val, passwordverify: false });
    }
  };



const  url=process.env.NEXT_BASE_URL_



  const handleSignup = async () => {
  if (!validateForm()) return;

  try {
    const response = await axios.post(
      `${process.env.url}/signup`,
      {
        name: userInfor.name,
        email: userInfor.email,
        password: userInfor.password,
      }
    );

    console.log('Signup successful:', response.data);

   
    router.push('/Login');
  } catch (error: any) {
    console.error('Signup failed:', error.response?.data || error.message);
      }
};

  return (






    
<div
  className="bg-cover bg-center bg-no-repeat min-h-screen py-16 px-6 sm:px-10 md:px-20"
  style={{ backgroundImage: "url('/image/AdobeStock_241384655.webp')" }} 
>
     {/* Overlay */}
      <div className="max-w-xl mx-auto  bg-opacity-90 p-8 rounded-md shadow-md     bg-gray-50 min-h-screen py-16 px-6 sm:px-10 md:px-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h1>
        <p className="text-sm text-gray-600 mb-6">
          Already have an account?{' '}
          <span className="text-blue-600 cursor-pointer" onClick={() => router.push('/Login')}>
            Log in
          </span>
        </p>

        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={userInfor.name}
              onChange={(e) => setuserInfor({ ...userInfor, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={userInfor.email}
              onChange={(e) => setuserInfor({ ...userInfor, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>
{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
         
 <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Password<span className="text-red-500">*</span>
            </label>
            <div className="flex mt-1">
              <input
                type={userInfor.isPasswordSecure ? 'password' : 'text'}
                placeholder="Password"
                value={userInfor.password}
                onChange={(e) => handlepassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-l-md focus:ring-2 bg-blue-100 border-r-0"
              />
              <button
                onClick={() =>
                  setuserInfor({
                    ...userInfor,
                    isPasswordSecure: !userInfor.isPasswordSecure,
                  })
                }

                className="border border-l-0 border-gray-300 px-3 rounded-r-md flex items-center justify-center bg-blue-100"
              >
             {userInfor.isPasswordSecure ? (
      <AiOutlineEye size={20} color="gray" />
    ) : (
      <AiOutlineEyeInvisible size={20} color="gray" />
    )}
               </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
         
         

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={userInfor.isChecked}
              onChange={(e) => setuserInfor({ ...userInfor, isChecked: e.target.checked })}
              
              className="mt-1"
            />
            <p className="text-sm text-gray-600">
              By creating account, you acknowledge and accept our{' '}
              <span className="text-blue-600">terms of service</span> and{' '}
              <span className="text-blue-600">privacy policy</span>.
            </p>
          </div>
          {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

          {/* Submit Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Signup;
