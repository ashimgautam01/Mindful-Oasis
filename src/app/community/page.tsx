"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FileImageIcon, MessageCircleIcon, ShareIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const Page: React.FC = () => {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Anonymous',
      time: '2 hours ago',
      text: 'Had a great time at the park with my friends today! The weather was perfect.',
      image: 'https://img.freepik.com/free-vector/vertical-poster-template-world-mental-health-day-celebration_23-2149669076.jpg?t=st=1726557299~exp=1726560899~hmac=3ff37cf99e6815e033895d06e3e101e9807da7c3b3c443323b2cb941645caa34&w=740',
      comments: [
        { user: 'Anonymous', text: 'Great post! Really enjoyed it.' },
        { user: 'Anonymous', text: 'Thanks for sharing this.' },
        { user: 'Anonymous', text: 'Nice photo! Where was this taken?' },
        { user: 'Anonymous', text: 'I agree, the weather looks amazing!' },
      ],
    },
    {
      id: 2,
      user: 'Anonymous',
      time: '1 day ago',
      text: 'Excited to start my new job next week! Can\'t wait to see what the future holds.',
      comments: [
        { user: 'Anonymous', text: 'Congratulations! Best of luck in your new job.' },
        { user: 'Anonymous', text: 'Wishing you all the best in your new role!' },
      ],
    },
  ]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (postId: number) => {
    if (comment.trim()) {
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, comments: [{ user: 'Anonymous', text: comment }, ...post.comments] }
          : post
      ));
      setComment(''); // Clear the textarea after submission
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="text-center py-4 bg-teal-600 text-white font-mono text-3xl">
        <h1 className="text-3xl font-bold">Welcome to Your Feed</h1>
      </div>
      <div className="bg-blue-50 text-orange-600 text-center py-4 ml-10 mr-10 font-semibold font-serif">
        <p className="text-lg font-medium">Feeling overwhelmed or going through a tough time? Remember, you're not alone. This community is here to support you. Share your thoughts, seek advice, or just talk about what's on your mind. Together, we can make a difference and uplift each other. 💙</p>
      </div>
      <main className="flex-1 container mx-auto grid grid-cols-[300px_1fr] gap-8 py-8">
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Avatar className="w-12 h-12 border-2 border-purple-600">
              <AvatarImage src="/placeholder-user.jpg" alt="Your Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-900">Anonymous</p>
              <p className="text-gray-600 text-sm">See your profile</p>
            </div>
          </div >
              <img src="https://img.freepik.com/free-vector/watercolor-world-mental-health-day-vertical-flyer-template_23-2149671118.jpg?t=st=1726557240~exp=1726560840~hmac=6fa4663c9648f637889be31f95fa287b0a76f19a4620952ed76431cdf6e56825&w=740" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
              <img src="https://img.freepik.com/free-vector/world-mental-health-day-flat-design-poster-template_23-2149652481.jpg?t=st=1726557369~exp=1726560969~hmac=9982237e788ab4c43b3e3d720db2efb17182f4adc98a651e7580f6c43abc753a&w=740" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
              <img src="https://img.freepik.com/free-vector/self-care-concept_23-2148521744.jpg?t=st=1726557446~exp=1726561046~hmac=a7d56c7166a8ec05e2626887f927edf3ec4dcc021bfbc8d11b21acebc13e2783&w=740" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
              <img src="https://img.freepik.com/free-vector/mental-health-instagram-posts-collection_23-2149054460.jpg?t=st=1726557462~exp=1726561062~hmac=d325b200de22975ba9595914e6bd2530ec31a569118745940106fbe4100f0e3c&w=740" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
        </div>
        <div>
          {posts.map(post => {
            const [showAllComments, setShowAllComments] = useState(false);

            return (
              <div key={post.id} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 mb-8">
                <CardHeader className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-purple-800">
                    <AvatarImage src="/placeholder-user.jpg" alt="User's Profile" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-gray-900">{post.user}</p>
                    <p className="text-gray-600 text-sm">{post.time}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{post.text}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post Image"
                      width={600}
                      height={400}
                      className="mt-4 rounded-lg transition-transform transform hover:scale-105 duration-300"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col space-y-4">
                    {post.comments.slice(0, showAllComments ? undefined : 2).map((comment, index) => (
                      <div key={index} className="flex items-start space-x-4 p-2 bg-gray-50 rounded-lg shadow-sm">
                        <Avatar className="w-10 h-10 border-2 border-pink-600">
                          <AvatarImage src="/placeholder-user.jpg" alt="Commenter's Profile" />
                          <AvatarFallback>AN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{comment.user}</p>
                          <p className="text-gray-700 text-sm">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                    {post.comments.length > 2 && (
                      <Button
                        onClick={() => setShowAllComments(!showAllComments)}
                        className="text-sm bg-orange-700 text-white hover:bg-orange-600 transition-colors duration-300"
                      >
                        {showAllComments ? 'See less comments' : 'See more comments'}
                      </Button>
                    )}
                  </div>
                </CardFooter>
                <div className="mt-4">
                  <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(post.id); }}>
                    <Textarea
                      placeholder="Write your comment here..."
                      value={comment}
                      onChange={handleCommentChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      rows={4}
                    />
                    <Button type="submit" className="w-26 h-12 mt-2 bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
                      Post Comment
                    </Button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Page;
