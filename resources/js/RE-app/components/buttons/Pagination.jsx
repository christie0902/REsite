import React from 'react';
import Page from './Page';

const Pagination = ({ numberOfPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-gray-500 border border-transparent rounded-s-lg hover:bg-white/50 hover:text-gray-700">Previous</a>
        </li>
        {Array.from({ length: numberOfPages }, (_, index) => (
          <Page key={index + Math.random()} pageNr={index + 1} />
        ))}
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-gray-500 border border-transparent rounded-e-lg hover:bg-white/50 hover:text-gray-700 dark:bg-gray-800/30 backdrop-blur-md">Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;