import React from 'react';
import { FaThumbsUp, FaCalendarCheck, FaStar, FaMapMarkerAlt, FaUserMd, FaLanguage } from 'react-icons/fa';

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

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
  <div className="bg-white rounded-lg shadow p-5 flex flex-row items-center gap-6 border border-gray-200 hover:shadow-lg transition-shadow min-h-[120px]">
    {/* Avatar */}
    <div className={`relative w-16 h-16 rounded-full border-2 ${doctor.isFeatured ? 'border-yellow-400' : 'border-blue-200'} shadow-sm flex-shrink-0`}>
      <img
        src={doctor.imageUrl || '/doctor-placeholder.png'}
        alt={doctor.name}
        className="w-full h-full rounded-full object-cover"
      />
      {doctor.isFeatured && (
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-white rounded-full p-0.5 shadow" title="Featured Doctor">
          <FaStar className="text-xs" />
        </span>
      )}
    </div>
    {/* Info */}
    <div className="flex-1 flex flex-col gap-2 min-w-0">
      <div className="flex flex-wrap items-center gap-2 min-w-0">
        <a href={doctor.profileUrl} className="text-base font-bold text-blue-900 hover:underline truncate">
          {doctor.name}
        </a>
        {doctor.specializations && doctor.specializations.map((spec) => (
          <span key={spec} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {spec}
          </span>
        ))}
        {!doctor.specializations && (
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {doctor.specialization}
          </span>
        )}
        {doctor.badges && doctor.badges.map((badge) => (
          <span
            key={badge}
            className={
              badge === 'Available Today'
                ? 'bg-green-100 text-green-700'
                : badge === 'No Booking Fee'
                ? 'bg-blue-100 text-blue-700'
                : badge === 'Featured'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-700'
            }
            style={{ fontSize: '0.7rem', fontWeight: 600, borderRadius: '9999px', padding: '0.15rem 0.7rem', letterSpacing: '0.01em' }}
          >
            {badge}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1 text-xs text-gray-500">
        <div className="flex flex-wrap items-center gap-2">
          <FaUserMd className="inline mr-1" />
          <span>{doctor.experience}</span>
          {doctor.gender && <span>| {doctor.gender}</span>}
          {doctor.languages && doctor.languages.length > 0 && <span className="flex items-center"><FaLanguage className="inline mr-1" />{doctor.languages.join(', ')}</span>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FaMapMarkerAlt className="inline mr-1" />
          <span>{doctor.location}</span>
          {doctor.clinicName && <span className="text-blue-700 font-semibold ml-2">{doctor.clinicName}</span>}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs mt-1">
        <span className="flex items-center gap-1 text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-semibold" title="Patient Satisfaction">
          <FaThumbsUp className="inline-block text-green-600 text-xs" /> {doctor.rating}%
        </span>
        <span className="flex items-center gap-1 text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full font-semibold" title="Patient Stories">
          {doctor.patientStories} Stories
        </span>
        {doctor.availability && (
          <span className="flex items-center gap-1 text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-semibold">
            <FaCalendarCheck className="inline-block text-green-600 text-xs" /> Today
          </span>
        )}
        {doctor.proposedTime && (
          <span className="flex items-center gap-1 text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
            {doctor.proposedTime}
          </span>
        )}
        <span className="text-blue-900 font-bold ml-auto">₹{doctor.fee}</span>
        <span className="text-gray-400">Fee</span>
      </div>
      <div className="flex flex-row gap-2 mt-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded font-semibold hover:bg-blue-700 transition text-xs">Book</button>
        <button className="bg-gray-100 text-blue-700 px-4 py-1 rounded font-semibold border hover:bg-blue-50 transition text-xs">Contact</button>
      </div>
    </div>
  </div>
);

export default DoctorCard;