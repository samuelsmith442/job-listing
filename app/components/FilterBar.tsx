'use client';

import Image from 'next/image';

interface FilterBarProps {
  filters: string[];
  onFilterRemove: (filter: string) => void;
  onClearFilters: () => void;
}

export default function FilterBar({ 
  filters, 
  onFilterRemove, 
  onClearFilters 
}: FilterBarProps) {
  if (filters.length === 0) return null;

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-6 -mt-8 flex justify-between items-center transition-colors"
      role="search"
      aria-label="Active filters"
    >
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <div 
            key={filter} 
            className="flex items-center overflow-hidden rounded"
          >
            <span className="bg-light-cyan-filter dark:bg-gray-700 text-primary dark:text-primary-light font-bold px-2 py-1 transition-colors">
              {filter}
            </span>
            <button
              onClick={() => onFilterRemove(filter)}
              className="bg-primary hover:bg-very-dark-cyan dark:hover:bg-gray-900 p-1 h-full flex items-center justify-center transition-colors"
              aria-label={`Remove ${filter} filter`}
            >
              <Image 
                src="/images/icon-remove.svg" 
                alt="" 
                width={14} 
                height={14} 
                aria-hidden="true"
              />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onClearFilters}
        className="text-dark-cyan dark:text-gray-400 font-bold hover:text-primary dark:hover:text-primary-light hover:underline focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-sm transition-colors"
        aria-label="Clear all filters"
      >
        Clear
      </button>
    </div>
  );
}
