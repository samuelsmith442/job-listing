'use client';

import Image from 'next/image';
import { JobListing } from '../types';

interface JobCardProps {
  job: JobListing;
  onFilterClick: (filter: string) => void;
}

export default function JobCard({ job, onFilterClick }: JobCardProps) {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={`bg-white rounded-md shadow-md p-6 mb-6 relative ${
      job.featured ? 'border-l-4 border-primary' : ''
    } md:flex md:items-center md:justify-between`}>
      <div className="md:flex md:items-center">
        {/* Company logo */}
        <div className="absolute -top-6 md:static md:mr-6">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden">
            <Image 
              src={job.logo.startsWith('./') ? job.logo.substring(1) : job.logo} 
              alt={`${job.company} logo`} 
              width={80}
              height={80}
              className="w-full h-full object-contain md:object-cover"
            />
          </div>
        </div>

        {/* Job info */}
        <div className="mt-4 md:mt-0">
          <div className="flex items-center mb-2">
            <h3 className="text-primary font-bold mr-4">{job.company}</h3>
            <div className="flex">
              {job.new && (
                <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-bold mr-2">
                  NEW!
                </span>
              )}
              {job.featured && (
                <span className="bg-very-dark-cyan text-white px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          
          <h2 className="font-bold text-very-dark-cyan hover:text-primary cursor-pointer mb-2">
            {job.position}
          </h2>
          
          <div className="text-dark-cyan flex items-center text-sm">
            <span>{job.postedAt}</span>
            <span className="mx-2">•</span>
            <span>{job.contract}</span>
            <span className="mx-2">•</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      {/* Divider for mobile */}
      <hr className="my-4 border-dark-cyan/30 md:hidden" />

      {/* Filters/tags */}
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterClick(filter)}
            className="bg-light-cyan-filter text-primary font-bold px-2 py-1 rounded hover:bg-primary hover:text-white"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
