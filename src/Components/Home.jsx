import React, { useState, useEffect } from 'react';
import Hero from './Hero';

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col justify-center mt-[130px] text-white">
    <div className="flex flex-col md:flex-row items-center justify-center gap-[200px]">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <div className="text-3xl font-bold mb-4">
          Your Dream. <br />
          Our Expertise.
        </div>
        <div className="text-lg mt-[80px]">
          What brings you to us today?
        </div>
        <div className="space-x-4 mt-[20px]">
          <button className="px-6 py-1 text-white border-2 border-blue-400 rounded-full shadow-md transition">
            NEET
          </button>
          <button className="px-6 py-1 text-white border-2 border-blue-400 rounded-full shadow-md hover:bg-green-600 transition">
            JEE
          </button>
          <button className="px-6 py-1 text-white border-2 border-blue-400 rounded-full shadow-md  transition">
            Grade 6-10
          </button>
        </div>
      </div>
  
      {/* Image Carousel */}
      <div className="relative w-[400px] overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="min-w-full">
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-[350px] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Hero/>
  </div>
  
  );
};

export default Home;
