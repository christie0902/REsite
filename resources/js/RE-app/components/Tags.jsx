import React, { useState, useEffect } from "react";

const Tags = ({ onTagClick, selectedTags }) => {
  const [tags, setTags] = useState([]);
  
  useEffect(() => {
    loadTags().catch(console.error);

    
  }, [selectedTags]);

  const loadTags = async () => {
    try {
      const response = await fetch(`/api/products/tags`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTags(data || []);
    } catch (error) {
      console.error("Could not load tags:", error);
    }
  };



  return (
    <div className="flex flex-wrap gap-5 p-4 justify-center items-center w-full mx-auto mt-5">
      {tags.map((tag, index) => {
       let activeClass="bg-yellow-800";
       if (selectedTags.some(id => id === tag.id)) {
            activeClass = "bg-red-900";
        }
        return (
        <span
          key={index}
          onClick={() => onTagClick(tag.id)}
          className={`cursor-pointer text-white py-2 px-3 rounded-lg text-sm hover:bg-black transition duration-150 ease-in-out font-bold ` + activeClass }
        >
          {tag.name}
        </span> 
        )
})}
    </div>
  );
};

export default Tags;
