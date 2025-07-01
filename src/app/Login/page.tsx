// Tailwind CSS conversion of your React Native login UI (Next.js + Tailwind CSS format)

'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//import { AuthContext } from '../AuthScreen/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
//import light from '../../../public/image/AdobeStock_241384655.webp'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
 // const { login } = useContext(AuthContext);
  const router = useRouter();

  const [userInfor, setuserInfor] = useState({
    email: '',
    emailverify: true,
    password: '',
    passwordverify: true,
    isPasswordSecure: true,
  });

  const handleemail = (val: string) => {
    if (/[a-zA-Z]+@[a-z]+\.[a-z]{2,3}/.test(val)) {
      setuserInfor({ ...userInfor, email: val, emailverify: true });
    } else {
      setuserInfor({ ...userInfor, email: val, emailverify: false });
    }
  };

  const handlepassword = (val: string) => {
    if (/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(val)) {
      setuserInfor({ ...userInfor, password: val, passwordverify: true });
    } else {
      setuserInfor({ ...userInfor, password: val, passwordverify: false });
    }
  };

  const handleSignin = () => {
    if (userInfor.email === '' || userInfor.password === '') {
      alert('Fill in mandatory details');
    } else if (userInfor.emailverify && userInfor.passwordverify) {
      alert('Successful');
     // login();
      router.push('/'); 
    } else {
      alert('Password should contain at least 6 characters with a digit and symbol');
    }
  };

  return (

     <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/image/AdobeStock_241384655.webp')]">
      {/* Overlay */}
      <div className=" inset-0 bg-black bg-opacity-60 z-0" />





    <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-10">
        
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 ">
        <h1 className="text-2xl font-bold text-gray-800">Log in to your account</h1>
        <p className="text-sm text-gray-600 mt-2">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              value={userInfor.email}
              onChange={(e) => handleemail(e.target.value)}
              className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 bg-blue-100"
            />
          </div>

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
          </div>

          <div className="text-right">
            <Link href="/forgot" className="text-blue-600 font-semibold text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={handleSignin}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Log In
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-md bg-white hover:bg-gray-50 gap-5">
           
            <FcGoogle size={25} />
            <span className="text-gray-700 font-semibold text-sm">Continue with Google</span>
          </button>
        </div>
      </div>
   
    </div>
    </div>
    
  );
}
