'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCircle, FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ label, items }: { label: string; items: { name: string; href: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
      >
        {label}
        <FaChevronDown className="ml-1 text-xs" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm flex items-center justify-between px-12 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-1">
        <FaCircle className="text-blue-600 text-sm" />
        <Link href="/" className="font-bold text-2xl text-gray-800 transition">procto</Link>
        <FaCircle className="text-blue-600 text-sm" />
        <nav className="hidden md:flex items-center ml-8 gap-8">
          <Link
            href="/doctors"
            className={`text-gray-700 font-semibold hover:text-blue-600 transition border-b-4 ${typeof window !== 'undefined' && window.location.pathname === '/doctors' ? 'border-b-cyan-500' : 'border-transparent'}`}
          >
            Find a Doctor
          </Link>
          <Link href="/" className="text-gray-700 font-semibold hover:text-blue-600 transition">Video Consult</Link>
          <Link href="/" className="text-gray-700 font-semibold hover:text-blue-600 transition">Surgeries</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <span className='bg-blue-900 text-white px-3 py-1 text-[0.5rem] rounded-full font-medium'>New</span>
        <Dropdown
          label="For Corporates"
          items={[{ name: 'Health Plans', href: '/corporates/health-plans' }, { name: 'Wellness Programs', href: '/corporates/wellness' }]}
        />
        <Dropdown
          label="For Providers"
          items={[{ name: 'Join as Provider', href: '/providers/join' }, { name: 'Provider Login', href: '/providers/login' }]}
        />
        <Dropdown
          label="Security & help"
          items={[{ name: 'Help Center', href: '/help' }, { name: 'Contact Us', href: '/contact' }]}
        />
        <button className="ml-2 px-4 py-2 bg-white border border-gray-300 text-gray-400 font-semibold rounded hover:bg-blue-50 transition">Login / Signup</button>
      </div>
    </header>
  );
};

export default Header;