"use client";
import React from 'react';
import JitsiCall from '@/components/call/Jitsi';
import { useParams } from 'next/navigation';

const Page = () => {
  const { room } = useParams<{ room: string }>();
    console.log(room);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mb-8">
        <h2 className="text-3xl font-bold text-teal-800 mb-2 text-center">Mindful Oasis Video Call</h2>
        <p className="text-base text-gray-700 text-center mb-4">
          Welcome to the video call! 🎥 Please ensure your microphone and camera are enabled for the best experience.
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <JitsiCall roomName={room} displayName="YOUR_USERNAME" /> 
      </div>
    </div>
  );
}

export default Page;
