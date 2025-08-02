
import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-blue-50 py-20 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Your Health is Our <span className="text-blue-600">Top Priority</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find trusted doctors, book appointments, and manage your health journey all in one place.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-grow w-full flex items-center border rounded-lg p-2">
              <FaSearch className="text-gray-400 mr-2" />
              <input type="text" placeholder="Doctor, specialty..." className="w-full outline-none" />
            </div>
            <div className="flex-grow w-full flex items-center border rounded-lg p-2">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input type="text" placeholder="Location" className="w-full outline-none" />
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/hero-image.png" alt="Doctors" className="rounded-xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
