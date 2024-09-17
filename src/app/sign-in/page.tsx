"use client";

import React, { ChangeEvent, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import 'animate.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie'
interface User {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<User>({
    email: "",
    password: ""
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:8080/api/v1/loginuser", data,
        { withCredentials: true } 
      );
      console.log(response.data);
          Cookie.set('id',response.data.id)
          Cookie.set('accesst', response.data.access_token);
     
      // router.replace('/');
      
    } catch (error) {
      console.error("Login error:", error);
     
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center -mt-10">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl bg-white rounded-lg shadow-lg">
          <div className="relative w-full md:w-2/3 h-80 md:h-auto overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/flat-mental-health-facebook-post_23-2149044577.jpg?t=st=1726484096~exp=1726487696~hmac=b5d012181fc6ad1165745e9011734def0bcd1a7c07ddee6a2b53322f9054ffe2&w=1380"
              alt="Signup Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          <div className="w-full md:w-1/3 p-8 space-y-6 flex flex-col justify-center bg-gray-50">
            <h1 className="text-3xl font-semibold text-center text-teal-600 flex items-center justify-center space-x-2">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="animate__animated animate__swing animate__slow animate__repeat-2">Mindful Oasis</span>
            </h1>
            <h2 className="text-2xl font-bold text-center text-gray-700 animate__animated animate__wobble animate__slow animate__repeat-2">Log In</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-blue-500 transition-transform duration-200 ease-in-out"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-blue-500 transition-transform duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-200 ease-in-out animate__animated animate__bounceIn animate__slow"
              >
                Log In
              </button>
            </form>

            <p className="text-center text-gray-600">
              Do not have an account? <a href="/sign-up" className="text-blue-600 hover:underline">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
