import React from 'react';

const FILTER_LABELS: Record<string, string> = {
  search: 'Search',
  location: 'Location',
  specialization: 'Specialization',
  minFee: 'Min Fee',
  maxFee: 'Max Fee',
  gender: 'Gender',
  experience: 'Experience',
  patientStories: 'Patient Stories',
  sortBy: 'Sort By',
};

interface Props {
  query: Record<string, string>;
}

const ActiveFiltersChips: React.FC<Props> = ({ query }) => {
  const activeFilters = Object.entries(query).filter(
    ([key, value]) => value && key !== 'page' && key !== 'limit'
  );

  if (activeFilters.length === 0) return null;

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(key);
    params.set('page', '1'); // Reset to first page on filter change
    window.location.search = params.toString();
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {activeFilters.map(([key, value]) => (
        <span
          key={key}
          className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm animate-fade-in"
        >
          {FILTER_LABELS[key] || key}: {value}
          <button
            className="ml-2 text-blue-700 hover:text-red-600 focus:outline-none"
            onClick={() => removeFilter(key)}
            aria-label={`Remove filter ${FILTER_LABELS[key] || key}`}
          >
            ×
          </button>
        </span>
      ))}
      <button
        className="ml-2 px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-300"
        onClick={() => {
          window.location.search = '';
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default ActiveFiltersChips;
