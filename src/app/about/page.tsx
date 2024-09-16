"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">

        <section className="relative bg-gradient-to-r bg-transparent text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://img.freepik.com/free-photo/young-adults-standing-city-arms-raised-celebrating-generated-by-ai_188544-38806.jpg?t=st=1726475662~exp=1726479262~hmac=1972c0ef876792780c45018fbe7fd702098bcdf6ffd0f125b8c7b5eb858688f0&w=1060"
              alt="Mindful Oasis Hero Image"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
          <div className="relative z-10 px-6 py-16 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Mindful Oasis
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover a sanctuary where mental well-being takes center stage. At Mindful Oasis, we offer resources, support, and guidance to help you navigate life's challenges with mindfulness and grace.
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-4xl font-semibold mb-6 text-indigo-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-lg mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              At Mindful Oasis, we believe that mental health is crucial for overall well-being. Our mission is to provide a supportive environment where individuals can explore strategies for maintaining mental balance and achieving personal growth.
            </motion.p>
            <motion.p
              className="text-lg mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our team of experienced professionals and passionate advocates are dedicated to creating a space where everyone feels heard and supported. Join us on this journey towards a more mindful and fulfilling life.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?t=st=1726475533~exp=1726479133~hmac=1a24e74bcd2cfbe2c591905d79a6490424d15bde95a86f1322dd4378148ab661&w=996"
                alt="Team Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-200 py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-lg mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Have questions or need support? Reach out to us through our contact form, and we'll get back to you as soon as possible.
            </motion.p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
