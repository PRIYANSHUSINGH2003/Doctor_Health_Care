
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-left px-8">
        <div>
          <h3 className="font-bold text-xl mb-4">HealthPlus</h3>
          <p className="text-gray-400">Your partner in health and wellness.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">For Patients</h3>
          <ul className="space-y-2">
            <li><Link href="/doctors" className="text-gray-400 hover:text-white">Search for Doctors</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Login</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Sign Up</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-400"><FaPhone /> +1 234 567 890</li>
            <li className="flex items-center gap-2 text-gray-400"><FaEnvelope /> support@healthplus.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} HealthPlus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
