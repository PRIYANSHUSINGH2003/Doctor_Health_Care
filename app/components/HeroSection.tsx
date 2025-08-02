import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Dropdown from './Dropdown';
import AllFiltersPopover from './AllFiltersPopover';

type HeroSectionProps = {
  gender: string;
  setGender: (v: string) => void;
  experience: string;
  setExperience: (v: string) => void;
  patientStories: string;
  setPatientStories: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  minFee: string;
  setMinFee: (v: string) => void;
  maxFee: string;
  setMaxFee: (v: string) => void;
  availability: string;
  setAvailability: (v: string) => void;
  clinicLocation: string;
  setClinicLocation: (v: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  gender, setGender,
  experience, setExperience,
  patientStories, setPatientStories,
  sortBy, setSortBy,
  location, setLocation,
  searchTerm, setSearchTerm,
  onSearch
}) => {
  // All Filters state
  const [minFee, setMinFee] = React.useState('');
  const [maxFee, setMaxFee] = React.useState('');
  const [availability, setAvailability] = React.useState('');
  const [clinicLocation, setClinicLocation] = React.useState('');
  return (
    <section className="relative bg-white border-b border-gray-200">
      <div className="container mx-auto w-full items-center">
        <div className="text-left">
          <form onSubmit={onSearch}>
            <div className="bg-white px-4 sm:px-12 py-2 ml-0 sm:ml-[7rem] flex flex-col md:flex-row items-center gap-2 md:gap-0">
              <div className="flex-grow w-full flex items-center border rounded-sm py-2 px-3">
                <FaMapMarkerAlt className="text-gray-400 mr-2 text-base sm:text-lg" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full text-gray-700 outline-none text-sm sm:text-base"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex-grow w-full flex items-center border rounded-sm py-2 px-3">
                <FaSearch className="text-gray-400 mr-2 text-base sm:text-lg" />
                <input
                  type="text"
                  placeholder="Doctor, specialty..."
                  className="w-full text-gray-700 outline-none text-sm sm:text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto mx-0 md:mx-2 px-4 sm:px-6 py-2 sm:py-3 text-gray-600 font-medium transitio rounded text-sm sm:text-base"
              >
                Find Doctors
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto w-full items-center">
        <div className="text-left">
          <div className="bg-blue-900 flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-2 px-4 border border-gray-200">
            <Dropdown label="Gender" items={["Male", "Female", "Other"]} value={gender} onChange={setGender} />
            <Dropdown label="Patient Stories" items={["All", "Positive", "Negative"]} value={patientStories} onChange={setPatientStories} />
            <Dropdown label="Experience" items={["0-5 years", "6-10 years", "10+ years"]} value={experience} onChange={setExperience} />
            <AllFiltersPopover
              minFee={minFee}
              setMinFee={setMinFee}
              maxFee={maxFee}
              setMaxFee={setMaxFee}
              availability={availability}
              setAvailability={setAvailability}
              clinicLocation={clinicLocation}
              setClinicLocation={setClinicLocation}
            />
            <span className="text-xs sm:text-sm font-semibold text-white ml-2 sm:ml-4">Sort By: </span>
            <Dropdown label="Relevance" items={["Relevance", "Experience", "Fees", "Patient Stories"]} value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
