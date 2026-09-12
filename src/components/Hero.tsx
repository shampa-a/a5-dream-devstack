//import React from 'react';
import banner from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-105 max-w-304 items-center justify-between px-6 py-12 lg:px-10">
        
        {/* Left Content */}
        <div className="max-w-170">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-162.5 text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-8">
            <button
              className="rounded-lg bg-linear-to-r from-red-500 to-pink-500
                         px-6 py-3 font-medium text-white shadow-md
                         transition hover:scale-105"
            >
              Explore Technologies
            </button>

            <button
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:block">
          <img
            src={banner}
            alt="Development stack illustration"
            className="w-87.5 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;