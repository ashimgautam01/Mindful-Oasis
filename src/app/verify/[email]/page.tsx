"use client"
import React, { FormEventHandler, useState } from 'react'
import 'animate.css'
import Navbar from '@/components/Navbar/Navbar'
import { Leaf } from 'lucide-react'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

const page = () => {
  const { email } = useParams<{ email: string }>(); 
    const decodedEmail = email ? decodeURIComponent(email) : ''; 
  console.log(decodedEmail);
 const router=useRouter()
  const [otp,Setotp]=useState('')
  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
      const response=await axios.post("http://localhost:8080/api/v1/otpverify",{
        email:decodedEmail,
        otp
      })
      router.replace('/sign-in')
    } catch (error) {
      console.log(error);
    }
    

  }
  return (
    <div>
        <Navbar/>
        <div className="flex min-h-screen  p-4 items-center justify-center">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mt-10">
       
        <div className="flex-shrink-0 w-1/2 p-4 flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5167.jpg?t=st=1726484846~exp=1726488446~hmac=b0d51d66c9f329cbc068565a3024d619a10744091261e3c8cb0bf2c5606e28e5&w=740"
            alt="Verification Illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <Leaf className='h-20 w-10 mx-40 text-green-600'/>
            <h2 className="text-3xl font-bold mb-6 text-center animate__animated animate__rollIn">Verify Your OTP</h2>
            <p className="text-gray-600 mb-8 text-center animate__animated animate__zoomInLeft animate_slow animate__delay-1s">
              Enter the OTP sent to your email.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                value={otp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                  Setotp(e.target.value)
                }}
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter OTP"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 animate__animated animate__zoomInUp animate_slow"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default page