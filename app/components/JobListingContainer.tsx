'use client';

import { useState, useEffect } from 'react';
import { JobListing } from '../types';
import { getJobListings, filterJobListings } from '../utils/data';
import JobCard from './JobCard';
import FilterBar from './FilterBar';

interface JobListingContainerProps {}

export default function JobListingContainer({}: JobListingContainerProps) {
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    try {
      const data = getJobListings();
      setJobListings(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load job listings. Please try again later.');
      setLoading(false);
      console.error('Error loading job listings:', err);
    }
  }, []);

  const filteredJobs = filterJobListings(jobListings, activeFilters);

  const handleFilterClick = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleFilterRemove = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-very-dark-cyan transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {activeFilters.length > 0 && (
        <FilterBar 
          filters={activeFilters} 
          onFilterRemove={handleFilterRemove} 
          onClearFilters={handleClearFilters} 
        />
      )}

      <div className="mt-16">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onFilterClick={handleFilterClick} 
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-dark-cyan">No job listings match your selected filters.</p>
            {activeFilters.length > 0 && (
              <button
                onClick={handleClearFilters}
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-very-dark-cyan transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
