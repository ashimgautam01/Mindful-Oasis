import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 drop-shadow-lg">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-100 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <Image
              src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148904080.jpg?t=st=1726765021~exp=1726768621~hmac=703737c1d48aaab9a483f39a97268eda456ef611c9332b9b7aec3acd42af69f1&w=900" 
              alt="Contact Us" 
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>

          <form className="flex-1">
            <label className="block mb-2 text-gray-700 font-semibold">
              Name:
              <input
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 transition-shadow"
                required
              />
            </label>

            <label className="block mb-2 text-gray-700 font-semibold">
              Email:
              <input
                type="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 transition-shadow"
                required
              />
            </label>

            <label className="block mb-2 text-gray-700 font-semibold">
              Message:
              <textarea
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 transition-shadow"
             
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full mt-4 bg-teal-800 text-white font-bold py-2 rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
