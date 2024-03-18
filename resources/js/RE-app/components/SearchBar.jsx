import React, { useContext,useState,useEffect,useRef } from 'react'
import CustomButton from './buttons/CustomButton'
import Context from '../store/Context'


const SearchBar = () => {
const {state, dispatch} = useContext(Context);
const [searchQuery, setSearchQuery] = useState('');
const searchBarRef = useRef(null);




useEffect(() => {
  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (searchBarRef?.current !== event.target && state.searchActive=== true ) {
      !event.target.dataset.allowsearch && dispatch({
        type: "search/set-searchVisibility",
        payload: false
      });
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [dispatch]);


const handleSearch = async (event) => {
  dispatch({
    type: "products/setSearchQuery",
    payload: searchQuery
  })
  event.preventDefault();
  try {
    const response = await fetch(`/api/products/search/${encodeURIComponent(searchQuery)}`);
    if (!response.ok) {
        throw new Error('Failed to fetch search results');
    }
    const searchData = await response.json();
    dispatch({
        type: "product/set-searchResults",
        payload: searchData
     
    });
} catch (error) {
    console.error('Error searching products:', error.message);
}
};

  return (
    <div ref={searchBarRef} >
     <form className="max-w-fit mx-auto backdrop-blur-md bg-white/10 rounded-lg border border-gray-200/50"
     onSubmit={handleSearch}
     >
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" 
            data-allowsearch="true"
            id="default-search" 
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-transparent rounded-lg bg-transparent backdrop-blur-lg"
            placeholder="Enter your search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required />
            <CustomButton 
            allowSearch={"true"}
            type="static" 
            title="Search" 
            customStyles="absolute end-2.5 bottom-1 bg-transparent text-white"/>
        </div>
    </form>
    </div>
  )
}

export default SearchBar