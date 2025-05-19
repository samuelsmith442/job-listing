import { JobListing } from '../types';
import data from '../../data.json';

export const getJobListings = (): JobListing[] => {
  return data as JobListing[];
};

export const filterJobListings = (
  jobListings: JobListing[],
  filters: string[]
): JobListing[] => {
  if (filters.length === 0) return jobListings;

  return jobListings.filter((job) => {
    const jobTags = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools
    ];

    return filters.every(filter => jobTags.includes(filter));
  });
};
