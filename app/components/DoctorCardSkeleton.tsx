import React from 'react';

const DoctorCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-2 border border-gray-200 animate-pulse">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gray-200" />
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-2 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
    <div className="h-3 bg-gray-200 rounded w-2/3 mt-2" />
    <div className="flex gap-3 mt-2">
      <div className="h-3 bg-gray-200 rounded w-1/4" />
      <div className="h-3 bg-gray-200 rounded w-1/4" />
      <div className="h-3 bg-gray-200 rounded w-1/4" />
    </div>
    <div className="h-4 bg-gray-200 rounded w-1/4 mt-2" />
    <div className="h-8 bg-gray-200 rounded w-full mt-3" />
  </div>
);

export default DoctorCardSkeleton;
