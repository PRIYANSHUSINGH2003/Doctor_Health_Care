'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaMapMarkerAlt, FaSearch, FaFlask, FaHeart, FaBookReader, FaUniversity, FaChild, FaFemale, FaEnvelope, FaCommentAlt, FaBook, FaShoppingCart }from 'react-icons/fa';

// Doctor type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  location: string;
  address: string;
  fee: number;
  rating: number;
  patientStories: number;
  gender?: string;
  imageUrl?: string;
  availability?: string;
  proposedTime?: string;
  profileUrl?: string;
}

const popularSearches = [
  { label: 'Dermatologist', icon: <FaHeart className="inline text-blue-300 mr-1" /> },
  { label: 'Pediatrician', icon: <FaChild className="inline text-blue-300 mr-1" /> },
  { label: 'Gynecologist/Obstetrician', icon: <FaFemale className="inline text-blue-300 mr-1" /> },
  { label: 'Others', icon: <FaEnvelope className="inline text-blue-300 mr-1" /> },
];

const bottomMenu = [
  { label: 'Consult with a doctor', icon: <FaCommentAlt className='text-gray-300' size={18} /> },
  { label: 'Order Medicines', icon: <FaShoppingCart className='text-gray-300' size={18} /> },
  { label: 'View medical records', icon: <FaBook className='text-gray-300' size={18} /> },
  { label: 'Book test', icon: <FaFlask className='text-gray-300' size={18} /> },
  { label: 'Read articles', icon: <FaBookReader className='text-gray-300' size={18} /> },
  { label: 'For healthcare providers', icon: <FaUniversity className='text-gray-300' size={18} /> },
];

const DoctorsHeroSection = () => {
  const router = useRouter();
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialSearch = searchParams?.get('search') || '';
  const [search, setSearch] = useState(initialSearch);
  const [location, setLocation] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    if (search.trim() === "") {
      setDoctors([]);
      setShowList(false);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (location) params.append('location', location);
      fetch(`/api/doctors?${params.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          // Support both paginated and non-paginated API responses
          const doctorsArr = Array.isArray(data) ? data : data.data;
          setDoctors(doctorsArr || []);
          setShowList(true);
        })
        .catch(() => setDoctors([]))
        .finally(() => setLoading(false));
    }, 400); // debounce
    return () => clearTimeout(timeout);
  }, [search]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showList) return;
    if (e.key === 'ArrowDown') {
      setHighlighted((prev) => Math.min(prev + 1, doctors.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setHighlighted((prev) => Math.max(prev - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (highlighted >= 0 && doctors[highlighted]) {
        handleDoctorClick(doctors[highlighted]);
      } else {
        handleSearchSubmit();
      }
    }
  };

  const handleSearchSubmit = () => {
    if (search.trim() !== '') {
      router.push(`/doctors?search=${encodeURIComponent(search)}`);
      setShowList(false);
    }
  };

  const handleDoctorClick = (doctor: Doctor) => {
    if (doctor.profileUrl && doctor.profileUrl !== '#') {
      window.location.href = doctor.profileUrl;
    } else {
      router.push(`/doctors?search=${encodeURIComponent(doctor.name)}`);
    }
    setShowList(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listRef.current &&
        !(listRef.current as HTMLDivElement).contains(event.target as Node) &&
        inputRef.current &&
        !(inputRef.current as HTMLInputElement).contains(event.target as Node)
      ) {
        setShowList(false);
      }
    };
    if (showList) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showList]);

  return (
    <section className="relative bg-blue-900 min-h-[560px] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
          <rect width="1440" height="680" fill="#233A95" />
          {/* Sun with subtle animation */}
          <circle cx="720" cy="620" r="60" fill="#FFD600" opacity="0.8" className="animate-pulse" />
          {/* Clouds with slight movement */}
          <ellipse cx="200" cy="100" rx="100" ry="50" fill="#3B53C1" opacity="0.6" className="animate-float" />
          <ellipse cx="1200" cy="150" rx="120" ry="60" fill="#3B53C1" opacity="0.6" className="animate-float delay-1000" />
          {/* Horizon with buildings */}
          <path d="M0 500 Q200 450 400 500 T800 500 T1200 500 T1440 500" fill="none" stroke="#3B53C1" strokeWidth="2" opacity="0.7" />
          <rect x="100" y="450" width="80" height="50" fill="#1A2B6B" opacity="0.7" />
          <rect x="300" y="460" width="100" height="40" fill="#1A2B6B" opacity="0.7" />
          <rect x="500" y="470" width="90" height="30" fill="#1A2B6B" opacity="0.7" />
          <rect x="700" y="460" width="110" height="40" fill="#1A2B6B" opacity="0.7" />
          <rect x="900" y="450" width="80" height="50" fill="#1A2B6B" opacity="0.7" />
          <rect x="1100" y="470" width="100" height="30" fill="#1A2B6B" opacity="0.7" />
          {/* Balloons with animation */}
          <ellipse cx="150" cy="300" rx="30" ry="40" fill="#FFFFFF" opacity="0.8" className="animate-bounce" />
          <ellipse cx="250" cy="250" rx="25" ry="35" fill="#FFFFFF" opacity="0.8" className="animate-bounce delay-500" />
          <ellipse cx="350" cy="280" rx="20" ry="30" fill="#FFFFFF" opacity="0.8" className="animate-bounce delay-1000" />
          {/* Doctor with laptop */}
          <path d="M1300 400 L1350 450 L1400 400 Z" fill="#4A90E2" />
          <circle cx="1325" cy="400" r="25" fill="#4A90E2" />
          <path d="M1325 425 L1325 475 L1350 475 L1350 425 Z" fill="#FFFFFF" />
          {/* Additional details */}
          <path d="M600 400 Q620 380 640 400" fill="none" stroke="#FFD600" strokeWidth="2" opacity="0.7" />
          <circle cx="600" cy="400" r="10" fill="#FFD600" opacity="0.7" />
          <path d="M1000 350 Q1020 330 1040 350" fill="none" stroke="#FFD600" strokeWidth="2" opacity="0.7" />
          <circle cx="1030" cy="340" r="8" fill="#FFD600" opacity="0.7" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-4 pb-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-center drop-shadow-2xl tracking-wide animate-fade-in">
          Your home for health
        </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 text-center drop-shadow-lg animate-fade-in delay-300">
          Find and Book
        </h2>
        <div className="w-full flex flex-col sm:flex-row bg-white rounded-sm shadow-xl overflow-hidden border-2 border-gray-500">
          <div className="flex items-center px-4 sm:px-5 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r w-full sm:w-1/3">
            <FaMapMarkerAlt className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input
              type="text"
              placeholder="Bangalore"
              className="w-full text-gray-700 outline-none text-base sm:text-lg font-medium"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div className="flex items-center px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-2/3 relative">
            <FaSearch className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              className="w-full text-gray-700 outline-none text-base sm:text-lg font-medium"
              value={search}
              onChange={e => { setSearch(e.target.value); setHighlighted(-1); }}
              onFocus={() => { if (doctors.length > 0) setShowList(true); }}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              autoComplete="off"
            />
            {showList && (
              <div ref={listRef} className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-20 max-h-60 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center text-gray-500">Loading...</div>
                ) : doctors.length === 0 ? (
                  <div className="p-4 text-center text-gray-400">No doctors found</div>
                ) : (
                  doctors.map((doctor, idx) => (
                    <div
                      key={doctor.id || idx}
                      className={`p-3 border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${highlighted === idx ? 'bg-blue-100' : ''}`}
                      onMouseDown={() => handleDoctorClick(doctor)}
                      onMouseEnter={() => setHighlighted(idx)}
                    >
                      <div className="font-semibold text-gray-800">{doctor.name}</div>
                      {doctor.specialization && <div className="text-xs text-gray-500">{doctor.specialization}</div>}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-5 sm:mt-6 md:mt-8">
          <span className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base">Popular searches:</span>
          {popularSearches.map((item) => (
            <span
              key={item.label}
              className="text-gray-400 text-xs sm:text-sm md:text-base font-semibold hover:text-white cursor-pointer flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-all hover:bg-opacity-30 animate-fade-in-up"
              onClick={() => { setSearch(item.label); setShowList(true); }}
            >
              {/* {item.icon} */}
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative bottom-0 top-14 left-0 w-full bg-blue-950 bg-opacity-60 flex justify-center items-center py-6 sm:pb-4 md:pb-6 z-10">
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-white text-xs sm:text-sm md:text-base font-semibold">
          {bottomMenu.map((item, idx) => (
            <span key={item.label} className="flex flex-col items-center text-[0.7rem] text-gray-400 border-gray-500 border-r last:border-0 pr-4 sm:pr-6 md:pr-8 hover:text-gray-500 transition-colors">
              <span
                className={`text-gray-500 p-2 sm:p-2.5 md:p-3 my-1  shadow-xl ${idx === 3 ? 'flex border-green-500' : ''} hover:scale-110 transition-transform`}
              >
                {item.icon}
                {idx === 3 && <span className="bg-green-600 text-white text-[0.5rem] px-2 py-0.5  rounded-sm border-2 border-green-500 ml-1 sm:ml-2">New</span>}
              </span>
              <span className={idx === 3 ? 'flex items-center gap-1 sm:gap-2' : ''}>
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsHeroSection;
