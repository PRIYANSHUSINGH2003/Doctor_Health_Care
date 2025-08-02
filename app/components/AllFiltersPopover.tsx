import React, { useState, useRef, useEffect } from 'react';

interface AllFiltersPopoverProps {
  minFee: string;
  setMinFee: (v: string) => void;
  maxFee: string;
  setMaxFee: (v: string) => void;
  availability: string;
  setAvailability: (v: string) => void;
  clinicLocation: string;
  setClinicLocation: (v: string) => void;
}

const AllFiltersPopover: React.FC<AllFiltersPopoverProps> = ({
  minFee, setMinFee,
  maxFee, setMaxFee,
  availability, setAvailability,
  clinicLocation, setClinicLocation
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative inline-block text-left" ref={wrapperRef}>
      <button
        className="bg-blue-900 text-white font-semibold px-4 py-2 min-w-[120px] flex items-center gap-2 rounded focus:outline-none"
        type="button"
        onClick={() => setOpen((o) => !o)}
      >
        All Filters
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg z-50 p-4">
          <div className="mb-3">
            <label className="block text-xs font-semibold mb-1">Fees (₹)</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="border rounded px-2 py-1 w-1/2 text-sm text-gray-800"
                value={minFee}
                onChange={e => setMinFee(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="border rounded px-2 py-1 w-1/2 text-sm text-gray-800"
                value={maxFee}
                onChange={e => setMaxFee(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-xs font-semibold mb-1">Availability</label>
            <select
              className="border rounded px-2 py-1 w-full text-sm text-gray-800"
              value={availability}
              onChange={e => setAvailability(e.target.value)}
            >
              <option value="">Any</option>
              <option value="Available Today">Available Today</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-xs font-semibold mb-1">Clinic Location</label>
            <input
              type="text"
              placeholder="Clinic Location"
              className="border rounded px-2 py-1 w-full text-sm text-gray-800"
              value={clinicLocation}
              onChange={e => setClinicLocation(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFiltersPopover;
