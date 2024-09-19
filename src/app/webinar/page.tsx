import React from 'react';
import Navbar from '@/components/Navbar/Navbar'
const webinars = [
  {
    title: "Managing Anxiety in Daily Life",
    date: "October 10, 2024",
    time: "3:00 PM - 4:00 PM",
    description: "Join us for a session on effective techniques to manage anxiety in your daily routine.",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-trekking-webinar_23-2149242632.jpg?t=st=1726762664~exp=1726766264~hmac=0fd855e2ee5d868a474e800467b21207adc769d4e572a80b4ab0c3446bff0400&w=996", 
  },
  {
    title: "Building Resilience: Coping with Stress",
    date: "October 17, 2024",
    time: "5:00 PM - 6:00 PM",
    description: "Learn strategies to build resilience and cope with stress in challenging times.",
    image: "https://img.freepik.com/free-vector/flat-world-mental-health-day-webinar-template_23-2149652536.jpg?t=st=1726762806~exp=1726766406~hmac=f1ec632034e6d894663f052b57d3d33cb9ee1e492ad7b91df1960ba01817c9a6&w=1060", 
  },
  {
    title: "Mindfulness and Mental Well-being",
    date: "October 24, 2024",
    time: "1:00 PM - 2:00 PM",
    description: "Discover how mindfulness practices can enhance your mental well-being.",
    image: "https://img.freepik.com/free-vector/flat-world-mental-health-day-webinar-template_23-2149641848.jpg?t=st=1726762828~exp=1726766428~hmac=a85a53acd0f78179d2e4f5af21ed6bee8d1c9ea2ce83e0a8581fadd5f3ff3989&w=1060", 
  },
  {
    title: "Overcoming Negative Thoughts",
    date: "October 31, 2024",
    time: "4:00 PM - 5:00 PM",
    description: "Explore techniques to identify and overcome negative thought patterns.",
    image: "https://img.freepik.com/free-vector/minimalist-psychologist-consultation-webinar-template_23-2150011096.jpg?t=st=1726762905~exp=1726766505~hmac=a2215fee5143134c2e31a6e34c3f3193c69ec6206e3fc866ec31fa3a0d575e82&w=996", 
  },
  {
    title: "Sleep Hygiene for Better Mental Health",
    date: "November 7, 2024",
    time: "6:00 PM - 7:00 PM",
    description: "Learn the importance of sleep hygiene for mental well-being.",
    image: "https://img.freepik.com/free-photo/sleeping-woman-bed_23-2148513765.jpg", 
  },
];

const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="relative mb-0">
        <img 
          src="https://img.freepik.com/free-vector/hand-drawn-business-workshop-youtube-channel-art_23-2149416515.jpg?t=st=1726762458~exp=1726766058~hmac=9601a79a884a90d17a800c15bd4e7b9cdc331c5b56a81a7e30aa3afced7e59d0&w=1380" 
          alt="Mental Health"
          className="w-screen h-64 object-cover rounded-lg shadow-md opacity-75" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl text-green-600 font-extrabold bg-opacity-70 p-4 rounded-lg shadow-lg">
            Upcoming Webinars
          </h2>
        </div>
      </div>
      
      <div className="text-center mb-10">
        <h2 className="text-5xl text-gray-900 font-extrabold bg-opacity-70 p-4 rounded-lg shadow-lg inline-block">
          Upcoming Webinars
        </h2>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinars.map((webinar, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img 
              src={webinar.image} 
              alt={webinar.title} 
              className="rounded-lg h-48 w-full object-cover transition-transform duration-500 transform hover:scale-110" 
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-teal-800 transition-colors duration-200">
                {webinar.title}
              </h3>
              <p className="text-gray-600 text-sm">{webinar.date} | {webinar.time}</p>
              <p className="mt-1 text-gray-800 text-sm">{webinar.description}</p>
              <button className="mt-4 bg-teal-700 text-white font-semibold py-2 px-4 rounded transition duration-200 hover:bg-teal-900 shadow-md">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
