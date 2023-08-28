import React, { useState } from 'react';

const FilterKategori = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'kategori 1',
    'kategori 2',
    'kategori 3',
    'Kategori 4',
    'Kategori 5',
    // Add more categories here
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="relative">
      <button
      theme="dark"
        className="w-full text-white py-2 px-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Kategori
      </button>
      {isOpen && (
        <div theme="dark" className="absolute mt-2 w-full text-white shadow-lg">
          <div className="flex flex-col pl-4">
            {categories.map(category => ( 
              <label key={category} className="flex items-center space-x-2 space-y-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span>{category}</span> 
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterKategori;
