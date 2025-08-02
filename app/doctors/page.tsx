'use client';

import React, { useEffect, useState } from 'react';
import DoctorsHeroSection from '../components/DoctorsHeroSection';
import Header from '../components/Header';
import { FaThumbsUp, FaCalendarCheck } from 'react-icons/fa';
import DoctorCardSkeleton from '../components/DoctorCardSkeleton';
import ActiveFiltersChips from './ActiveFiltersChips';
import DoctorCard from '../components/DoctorCard';

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

import { useRouter, useSearchParams } from 'next/navigation';

function useQuery() {
  if (typeof window === 'undefined') return {};
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

const DoctorsPage = () => {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // You can adjust the page size here
  const query = useQuery();

  // Extract all possible filters
  const search = query.search || "";
  const location = query.location || "";
  const specialization = query.specialization || "";
  const minFee = query.minFee || "";
  const maxFee = query.maxFee || "";
  const pageParam = parseInt(query.page || '1', 10);

  useEffect(() => {
    setPage(pageParam);
  }, [pageParam]);

  useEffect(() => {
    setLoading(true);
    setError("");
    // Build query string for API
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (location) params.append('location', location);
    if (specialization) params.append('specialization', specialization);
    if (minFee) params.append('minFee', minFee);
    if (maxFee) params.append('maxFee', maxFee);
    params.append('page', String(page));
    params.append('limit', String(limit));
    const queryString = params.toString();
    fetch(`/api/doctors?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setDoctors(data.data);
        setTotal(data.total);
      })
      .catch(() => setError("Failed to load doctors."))
      .finally(() => setLoading(false));
  }, [search, location, specialization, minFee, maxFee, page, limit]);

  // Pagination controls
  const totalPages = Math.ceil(total / limit);
  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', String(newPage));
    router.push(`/doctors?${params.toString()}`);
  };

  return (
    <>
      <Header />
      <div className="bg-blue-50 pt-6 pb-1 ">
        <DoctorsHeroSection />
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Active Filters as Chips */}
          <ActiveFiltersChips query={query} />
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: limit }).map((_, idx) => (
                <DoctorCardSkeleton key={idx} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : doctors.length === 0 ? (
            <div className="text-center text-gray-400 py-8">No doctors found</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    className="px-3 py-1 rounded border bg-white text-blue-700 font-semibold disabled:opacity-50"
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx + 1}
                      className={`px-3 py-1 rounded border font-semibold ${page === idx + 1 ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
                      onClick={() => goToPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    className="px-3 py-1 rounded border bg-white text-blue-700 font-semibold disabled:opacity-50"
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
