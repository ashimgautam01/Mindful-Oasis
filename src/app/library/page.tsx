"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar/Navbar';
import { Loader } from "@/components/Loader";

const Page = () => {
  interface Book {
    name: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [showMore, setShowMore] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=books&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=30`
      );
      if (response.status === 200) {
        setData(response.data.articles);
        console.log(response.data.articles);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prevCount => {
      const newCount = prevCount + 8;
      if (newCount >= data.length) {
        setShowMore(false);
      }
      return newCount;
    });
  };

  const handleShowLess = () => {
    setVisibleCount(8);
    setShowMore(true);
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen">
        <div className="relative h-64 md:h-96">
          <Image
            src="https://img.freepik.com/free-photo/books-imagination-still-life_23-2149082218.jpg?t=st=1726470397~exp=1726473997~hmac=afb2b528cb1a48187c296fb1d8044f143cae15fc92c1ab32c425dcfde6ec71a6&w=996"
            alt="Books Shelf"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center font-serif text-white text-4xl md:text-5xl font-extrabold bg-black bg-opacity-50 p-4">
            Book Resources
          </div>
        </div>
        <div className="py-6 px-4 md:px-8 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-900 text-center">
            The Power of Reading for Mental Health
          </h2>
          <p className="mb-4 text-gray-800 text-center">
            For those facing mental health challenges, reading offers a sanctuary of peace and escape. Immersing oneself in a good book can significantly reduce stress and anxiety.
          </p>
          <p className="mb-4 text-gray-800 text-center">
            Books serve as a form of therapy, providing solace and a sense of understanding through relatable narratives and characters.
          </p>
          <p className="text-gray-800 text-center">
            Engaging with literature also fosters mindfulness and introspection, contributing to improved mental well-being and personal growth.
          </p>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4 text-center text-black">
        List of Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
        {data.slice(0, visibleCount).map((result, index) => (
          <motion.div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            {result.urlToImage ? (
              <Image
                src={result.urlToImage}
                alt={result.title}
                width={400}
                height={250}
                layout="responsive"
                objectFit="cover"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-48 bg-gray-200">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                {result.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Author:</strong> {result.author || 'Unknown'}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Description:</strong> {result.description || 'No description available'}
              </p>
              <p className="text-sm text-gray-500 mb-4 truncate">
                {result.content || 'No content available'}
              </p>
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        {showMore ? (
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default Page;
