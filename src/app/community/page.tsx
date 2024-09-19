"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";
import { DeleteIcon } from "lucide-react";

const Page: React.FC = () => {
  interface Post {
    id?: number;
    image?: string;
    text: string;
    created_at?: Date;
    user_id?: string; 
  }

  interface Comment {
    text: string;
    created_at: Date;
    user_id?: string;
  }

  const user_id = Cookies.get("id");
  const [showAllComments, setShowAllComments] = useState(false);
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [posts, setPosts] = useState<Post>({ image: "", text: "" });
  const [getPost, setGetPost] = useState<Post[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v2/addpost", {
        user_id,
        image: posts.image,
        text: posts.text,
      });
      if (response.status === 201) {
        console.log("Post added");
        setPosts({ text: "", image: "" });
        fetchPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangepostText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPosts((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v2/getallpost");
      if (response.status === 200) {
        setGetPost(response.data.results);
        response.data.results.forEach((post: Post) => fetchComments(post.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async (postId: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v3/getcomment/${postId}`);
      if (response.status === 200) {
        setComments((prev) => ({
          ...prev,
          [postId]: response.data.comments,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (postId: number) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v3/addcomment`, {
        post_id: postId,
        user_id,
        text: newComment,
      });
      if (response.status === 200) {
        console.log("Comment added");
        setNewComment(""); 
        fetchComments(postId); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v2/deletepost/${postId}`);
      if (response.status === 200) {
        console.log('Post deleted successfully:', response.data);
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleDeleteComment = async (postId: number, commentId: number,user_id: string) => {
 
    try {
      const response = await axios.post(`http://localhost:8080/api/v3/deletecomment/${commentId}`);
      if (response.status === 200) {
        console.log('Comment deleted successfully');
        fetchComments(postId); 
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="text-center py-4 bg-teal-600 text-white font-mono text-3xl">
        <h1 className="text-3xl font-bold">Welcome to Your Feed</h1>
      </div>
      <div className="bg-blue-50 text-orange-600 text-center py-4 mx-10 font-semibold font-serif">
        <p className="text-lg font-medium">
          Feeling overwhelmed or going through a tough time? Remember, you're not alone. This community is here to support you. Share your thoughts, seek advice, or just talk about what's on your mind. Together, we can make a difference and uplift each other. 💙
        </p>
      </div>
      <main className="flex-1 container mx-auto grid grid-cols-[300px_1fr] gap-8 py-8">
        <div className="space-y-4">
          {/* User Avatar Section */}
          <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Avatar className="w-12 h-12 border-2 border-purple-600">
              <AvatarImage src="/placeholder-user.jpg" alt="Your Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-900">Anonymous</p>
              <p className="text-gray-600 text-sm">See your profile</p>
            </div>
          </div>
          <img src="https://img.freepik.com/free-vector/watercolor-world-mental-health-day-vertical-flyer-template_23-2149671118.jpg" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
          <img src="https://img.freepik.com/free-vector/world-mental-health-day-flat-design-poster-template_23-2149652481.jpg" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
          <img src="https://img.freepik.com/free-vector/self-care-concept_23-2148521744.jpg" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
          <img src="https://img.freepik.com/free-vector/mental-health-instagram-posts-collection_23-2149054460.jpg" alt="Profile Image" className="mt-4 rounded-lg w-96 h-96 object-cover" />
        </div>
        <div>
          {/* Post Submission Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <div className="relative">
                <input
                  placeholder="What's on your mind?"
                  type="text"
                  name="text"
                  value={posts.text}
                  onChange={handleChangepostText}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChangepostText(e as any)}
                className="w-full border border-gray-300 p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 py-2 px-4 rounded-md"
                >
                  Post
                </Button>
              </div>
            </form>
          </div>

          {/* Posts Section */}
          {getPost.map((post) => (
            <div key={post.id} className="bg-white rounded-lg mt-10 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 mb-8">
              <div className="flex justify-between items-center">
                <CardHeader className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10 border-2 border-purple-800 ml-5">
                    <AvatarImage src="/placeholder-user.jpg" alt="User's Profile" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-gray-900">Anonymous</p>
                    {post.created_at && (
                      <p className="text-gray-600 text-sm">
                        {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                      </p>
                    )}
                  </div>
                </CardHeader>
                {post.user_id == user_id && (
                  <DeleteIcon className="w-8 h-8 cursor-pointer" onClick={() => handleDelete(post.id)} />
                )}
              </div>
              <CardContent>
                <p className="text-gray-800">{post.text}</p>
                {post.image && <img src={post.image} alt="Post Image" className="mt-4 rounded-md" />}
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-4">
                  {/* Comments Section */}
                  {(comments[post.id] || []).map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-4 p-2 bg-gray-50 rounded-lg shadow-sm">
                      <Avatar className="w-8 h-8 border-2 border-purple-800">
                        <AvatarImage src="/placeholder-user.jpg" alt="User's Profile" />
                        <AvatarFallback>AN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-gray-800">{comment.text}</p>
                        {comment.created_at && (
                          <p className="text-gray-600 text-xs">
                            {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                          </p>
                        )}
                      </div>

                      {comment.user_id == user_id && (
     
                        <Button
                          className="text-white font-bold hover:text-red-500 ml-10 bg-red-600"
                          onClick={() => handleDeleteComment(post.id, comment.id,comment.user_id)}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  ))}
                  <form onSubmit={() => handleCommentSubmit(post.id)} className="flex items-center space-x-4">
                    <Input
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="bg-teal-500 text-white hover:bg-teal-600">
                      Comment
                    </Button>
                  </form>
                </div>
              </CardFooter>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
