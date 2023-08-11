import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages > 1) {
    return (
      <nav className="flex items-center justify-center space-x-2 mt-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === page ? 'bg-blue-500  dark:bg-gray-900 dark:text-white border' : 'dark:bg-gray-900 dark:text-white text-black'
              }`}
          >
            {page}
          </button>
        ))}
      </nav>
    );
  }
};

export default Pagination;
