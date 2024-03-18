import React from 'react'

const MenuItem = ({ label, url, customStyles, onClick }) => {
  return (
    <a href={url} className={`block p-2  hover:bg-gray-700 ${customStyles}`} onClick={onClick}>
      {label}
    </a>
  );
};

export default MenuItem