'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import Header from './components/Header';

// Doctor type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  specializations?: string[];
  experience: string;
  location: string;
  address: string;
  clinicName?: string;
  fee: number;
  rating: number;
  patientStories: number;
  gender?: string;
  imageUrl?: string;
  availability?: string;
  proposedTime?: string;
  profileUrl?: string;
  noBookingFee?: boolean;
  badges?: string[];
  languages?: string[];
  isFeatured?: boolean;
}

export default function HomePage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [patientStories, setPatientStories] = useState('');
  const [experience, setExperience] = useState('');
  const [sortBy, setSortBy] = useState('Relevance');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  // All Filters state
  const [minFee, setMinFee] = useState('');
  const [maxFee, setMaxFee] = useState('');
  const [availability, setAvailability] = useState('');
  const [clinicLocation, setClinicLocation] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const params = new URLSearchParams();
      if (gender) params.append('gender', gender);
      if (patientStories) params.append('patientStories', patientStories);
      if (experience) params.append('experience', experience);
      if (sortBy && sortBy !== 'Relevance') params.append('sortBy', sortBy);
      const res = await fetch(`/api/doctors?${params.toString()}`);
      const data = await res.json();
      const doctorsArr = Array.isArray(data) ? data : data.data;
      setDoctors(doctorsArr || []);
      setFilteredDoctors(doctorsArr || []);
    };
    fetchDoctors();
  }, [gender, patientStories, experience, sortBy]);

  // Filtering logic on submit (main search bar)
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchSubmitted(true);
    // Filtering will be handled by useEffect below
  };

  // Live filtering for all filters (including All Filters popover)
  useEffect(() => {
    // If all filters are empty, show all doctors
    if (!location && !searchTerm && !minFee && !maxFee && !availability && !clinicLocation) {
      setFilteredDoctors(doctors);
      return;
    }
    const filtered = doctors.filter((doc: Doctor) => {
      const matchesLocation = location ? doc.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesSearch = searchTerm
        ? (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
           (doc.specializations && doc.specializations.some((s: string) => s.toLowerCase().includes(searchTerm.toLowerCase()))))
        : true;
      const matchesMinFee = minFee ? doc.fee >= parseInt(minFee) : true;
      const matchesMaxFee = maxFee ? doc.fee <= parseInt(maxFee) : true;
      const matchesAvailability = availability ? (doc.availability && doc.availability === availability) : true;
      const matchesClinicLocation = clinicLocation ? doc.clinicName && doc.clinicName.toLowerCase().includes(clinicLocation.toLowerCase()) : true;
      return matchesLocation && matchesSearch && matchesMinFee && matchesMaxFee && matchesAvailability && matchesClinicLocation;
    });
    setFilteredDoctors(filtered);
  }, [doctors, location, searchTerm, minFee, maxFee, availability, clinicLocation]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main>
        <HeroSection
          gender={gender}
          setGender={setGender}
          patientStories={patientStories}
          setPatientStories={setPatientStories}
          experience={experience}
          setExperience={setExperience}
          sortBy={sortBy}
          setSortBy={setSortBy}
          location={location}
          setLocation={setLocation}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          minFee={minFee}
          setMinFee={setMinFee}
          maxFee={maxFee}
          setMaxFee={setMaxFee}
          availability={availability}
          setAvailability={setAvailability}
          clinicLocation={clinicLocation}
          setClinicLocation={setClinicLocation}
          onSearch={handleSearch}
        />
        <HowItWorksSection
          doctors={filteredDoctors}
          searchSubmitted={searchSubmitted}
          showNoResult={searchSubmitted && filteredDoctors.length === 0}
        />
      </main>
    </div>
  );
}
