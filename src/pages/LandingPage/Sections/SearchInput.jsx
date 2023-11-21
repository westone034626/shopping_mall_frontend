import React from 'react';

const SearchInput = ({ keyword, onSearch }) => {
    return (
        <input
            className='p-2 border border-gray-300 rounded-md'
            type='text'
            placeholder='검색하세요.'
            onChange={(e) => onSearch(e.target.value)}
            value={keyword}
        />
    );
};

export default SearchInput;