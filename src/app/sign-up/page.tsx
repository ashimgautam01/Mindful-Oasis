"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { Leaf, Loader2 } from "lucide-react";
import "animate.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Page = () => {
  const router =useRouter();
  const [loading,SetLoading]=useState(false)
  interface User {
    name: string;
    email: string;
    password: string;
  }

  const [data, setData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    SetLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/registeruser", data);
      

        if (response.status === 402) {
            // Handle existing email error
            toast({
                title: "Failed",
                description: response.data.message,
                variant: "destructive",
            });
        }else{
          toast({
            title: "successs",
            description: response.data.message,
            variant: "success",
        });
          router.push(`/verify/${data.email}`);
        }
    } catch (error: unknown) {

        if (axios.isAxiosError(error)) {
            toast({
                title: "Error",
                description:  "An unexpected error occurred",
                variant: "destructive",
            });
        } else {
            toast({
                title: "Error",
                description: "An unexpected error occurred",
                variant: "destructive",
            });
        }
        console.log(error);
    } finally {
        SetLoading(false);
    }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center -mt-10">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl bg-white rounded-lg shadow-lg">
          <div className="relative w-full md:w-2/3 h-80 md:h-auto overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/world-mental-health-day-flat-design-background_23-2149657374.jpg?t=st=1726479794~exp=1726483394~hmac=82f6b07c9b2d7db11416581af1cac82c6392881b835f8c76fe6291fb19edf53b&w=996"
              alt="Signup Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          <div className="w-full md:w-1/3 p-8 space-y-6 flex flex-col justify-center bg-gray-50">
            <h1 className="text-3xl font-semibold text-center text-teal-600 flex items-center justify-center space-x-2">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="animate__animated animate__zoomInDown animate__slow animate__repeat-2">
                Mindful Oasis
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-center text-gray-700 animate__animated animate__fadeInLeft animate__slow animate__repeat-2">
              Sign Up
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-blue-500 transition-transform duration-200 ease-in-out"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-blue-500 transition-transform duration-200 ease-in-out"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-blue-500 transition-transform duration-200 ease-in-out"
                />
              </div>

             {! loading?
             <Button
                type="submit"
                className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-200 ease-in-out animate__animated animate__rotateInDownRight animate__slow"
              >
                Sign Up
              </Button>:
              <Button
              type="button"
              className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-200 ease-in-out animate__animated animate__rotateInDownRight animate__slow"
            >
             <Loader2 className="animate-spin h-5 w-5 mr-3"/> Submitting......
            </Button>
              }
            </form>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
