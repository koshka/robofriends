import React from 'react';

const SearchBox = ({ onChange }) => {
  return (
    <div className="pa2 mb4">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onChange}
        placeholder="Search cats"
        type="search"
      />
    </div>
  );
};

export default SearchBox;
