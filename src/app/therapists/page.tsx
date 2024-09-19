"use client";
import { StarIcon, SearchIcon, PersonStanding, DollarSign } from 'lucide-react';
import React, { useState } from 'react';
import Therapists, { Therapist } from '@/components/helpers/Therapists'
import 'animate.css'
import Navbar from '@/components/Navbar/Navbar'
const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');


  const filteredTherapists = Therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = selectedGender === 'All' || therapist.gender === selectedGender;
    const matchesPrice = selectedPrice === 'All' || (selectedPrice === 'Free' && therapist.rate === 'Free') || (selectedPrice === 'Paid' && therapist.rate !== 'Free');

    return matchesSearch && matchesGender && matchesPrice;
  });

  return (
    <div>
      <Navbar/>
      <section className="w-full -mt-10 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-5xl font-bold text-center mb-10 text-gray-800 animate__animated animate__zoomInDown animate__slow ">Meet Our Therapists</h2>
     
          
          {/* Search Bar with Icon */}
          <div className="mb-6 flex justify-center items-center relative">
          <SearchIcon className="relative mr-2 w-5 h-5 text-gray-400" />
            <input
            
              type="text"
              placeholder="Search therapists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md p-2 pl-10 w-1/2 md:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-700 transition duration-300"
            />
            
            </div>
         

          {/* Filter Options with Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <div className="flex items-center">
              <PersonStanding className="w-5 h-5 text-gray-400 mr-2" />
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="border border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-800 transition duration-300"
              >
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="border border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-800 transition duration-300"
              >
                <option value="All">All Prices</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTherapists.map((therapist, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={therapist.img}
                  alt={therapist.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-primary mb-4 transition duration-300"
                  style={{ aspectRatio: "1", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold text-gray-800 font-serif">{therapist.name}</h3>
                <p className="text-lg text-gray-600 font-semibold">{therapist.specialty}</p>
                <div className="text-lg text-red-600 font-bold">{therapist.rate}</div>
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < therapist.stars ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
                </div>
                <div className="text-gray-600">Gender: {therapist.gender}</div>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
