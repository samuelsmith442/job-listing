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
    <div className="bg-white rounded-md shadow-md p-4 mb-6 -mt-8 flex justify-between items-center">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <div 
            key={filter} 
            className="flex items-center overflow-hidden rounded"
          >
            <span className="bg-light-cyan-filter text-primary font-bold px-2 py-1">
              {filter}
            </span>
            <button
              onClick={() => onFilterRemove(filter)}
              className="bg-primary hover:bg-very-dark-cyan p-1 h-full flex items-center justify-center"
            >
              <Image 
                src="/images/icon-remove.svg" 
                alt="Remove filter" 
                width={14} 
                height={14} 
              />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onClearFilters}
        className="text-dark-cyan font-bold hover:text-primary hover:underline"
      >
        Clear
      </button>
    </div>
  );
}
