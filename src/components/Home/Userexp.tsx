"use client";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

export const UserExp = () => {
  const items = [
    {
      name: "Jane Doe",
      quote: "This website has been a transformative experience for my business. The intuitive interface and powerful features have helped me streamline my workflows and boost productivity to unprecedented levels.",
      gradient: "bg-gradient-to-r from-[#9b59b6] to-[#8e44ad]",
    },
    {
      name: "John Smith",
      quote: "I was initially hesitant to try this website, but I'm so glad I did. The powerful analytics and reporting tools have transformed the way I make data-driven decisions, leading to significant improvements in my business.",
      gradient: "bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]",
    },
    {
      name: "Emily Johnson",
      quote: "This website has been a game-changing experience for my small business. The user-friendly interface and comprehensive features have allowed me to streamline my operations and focus on growing my company in ways I never thought possible.",
      gradient: "bg-gradient-to-r from-[#16a085] to-[#1abc9c]",
    },
    {
      name: "David Brown",
      quote: "The seamless integration and user-friendly design of this website have made a significant impact on my business operations. Highly recommended for anyone looking to enhance their productivity.",
      gradient: "bg-gradient-to-r from-[#e74c3c] to-[#c0392b]",
    },
    {
      name: "Sophia Lee",
      quote: "An incredible tool that has revolutionized how we manage our projects. The user experience is top-notch and the support team is incredibly responsive.",
      gradient: "bg-gradient-to-r from-[#f39c12] to-[#f1c40f]",
    },
    {
      name: "Michael Brown",
      quote: "A fantastic resource for anyone looking to optimize their workflow. The features are comprehensive and easy to use, making it a great investment for my business.",
      gradient: "bg-gradient-to-r from-[#8e44ad] to-[#9b59b6]",
    },
    {
      name: "Sarah Davis",
      quote: "I was hesitant to try this website at first, but I'm so glad I did. The customer support team has been incredibly helpful, and the platform has allowed me to streamline my operations and focus on growing my business.",
      gradient: "bg-gradient-to-r from-[#e67e22] to-[#f39c12]",
    },
    {
      name: "Lucas White",
      quote: "The website's innovative features have significantly improved my workflow. It's intuitive, reliable, and has become an essential tool for my business.",
      gradient: "bg-gradient-to-r from-[#d35400] to-[#e67e22]",
    },
  ];

  return (
    <>
      <h2 className="text-3xl text-center mb-10 -mt-20 text-black font-bold sm:text-4xl sm:mt-20">
        We are here for you,<br />
        whenever you need someone to talk to
      </h2>
      <Card className="w-full max-w-6xl mx-auto mb-10 p-0 bg-transparent border-transparent relative">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-4 py-6"
              >
                <div
                  className={`flex flex-col items-center justify-center gap-4 p-6 ${item.gradient} text-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105`}
                  style={{ height: '100%' }}
                >
                  <Avatar className="w-16 h-16 border-4 border-white bg-gray-800">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt={`@${item.name.replace(" ", "").toLowerCase()}`}
                    />
                    <AvatarFallback className="text-white">
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm">{item.quote}</p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
            <span className="sr-only">Previous</span>
            <ArrowLeftCircleIcon className="h-6 w-6 text-black" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
            <span className="sr-only">Next</span>
            <ArrowRightCircleIcon className="h-6 w-6 text-black" />
          </CarouselNext>
        </Carousel>
      </Card>
    </>
  );
};
