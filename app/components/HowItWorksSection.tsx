import React from 'react';
import { FaThumbsUp, FaCalendarCheck } from 'react-icons/fa';
import AddressWithMore from './AddressWithMore';

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
  noBookingFee?: boolean;
}

interface HowItWorksSectionProps {
  doctors: Doctor[];
  location?: string;
  searchSubmitted?: boolean;
  showNoResult?: boolean;
}

const HowItWorksSection = ({ doctors, location, searchSubmitted, showNoResult }: HowItWorksSectionProps) => {
  const displayLocation = location && location.trim() ? location : 'Bangalore';
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {doctors.length} Dermatologists available in {displayLocation}
        </h2>
        <p className="text-gray-600 mb-6">Book appointments with minimum wait-time &amp; verified doctor details</p>
        {showNoResult ? (
          <div className="text-center text-gray-500 text-lg py-12">No result found</div>
        ) : (
          <div className="space-y-6">
            {doctors.map((doctor: Doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <img src={doctor.imageUrl} alt={doctor.name} className="w-24 h-24 rounded-full object-cover border" />
                <div className="flex-1 w-full flex flex-col md:flex-row md:items-center md:gap-6">
                  <div className="flex-1">
                    <a href={doctor.profileUrl} className="text-lg md:text-xl font-bold text-blue-500 hover:underline">{doctor.name}</a>
                    <div className="text-gray-400 text-[0.7rem] mt-1">{doctor.specialization}</div>
                    <div className="text-gray-500 text-[0.7rem] mb-2">{doctor.experience} experience</div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-[0.7rem] font-bold">{doctor.location}</span>
                      <AddressWithMore address={doctor.address} />
                    </div>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-gray-700 font-semibold text-[0.7rem]">₹{doctor.fee}</span>
                      <span className="text-gray-600 text-[0.7rem]">Consultation Fee</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <FaThumbsUp className="inline-block text-green-600 text-xs" /> {doctor.rating}%
                      </span>
                      <span className="text-black text-xs font-medium underline">{doctor.patientStories} Patient Stories</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between h-full md:min-w-[220px] md:ml-auto">
                    {doctor.availability && (
                      <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mt-2">
                        <FaCalendarCheck className="text-green-500 text-base" />
                        <span>Available Today</span>
                      </div>
                    )}
                    {doctor.proposedTime && (
                      <div className="text-gray-600 text-xs mt-1">Proposed Time: <span className="font-semibold">{doctor.proposedTime}</span></div>
                    )}
                    <div className="flex flex-col gap-2 mt-4 w-full">
                      <div className="w-full">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition w-full">Book Clinic Visit</button>
                        {doctor.noBookingFee && (
                          <div className="text-blue-700 text-xs font-semibold mt-1 text-center">No Booking Fee</div>
                        )}
                      </div>
                      <button className="bg-gray-100 text-blue-700 px-4 py-2 rounded font-semibold border hover:bg-blue-50 transition w-full">Contact Clinic</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default HowItWorksSection;
