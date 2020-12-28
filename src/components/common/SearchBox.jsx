import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label className="sr-only" htmlFor="query">
        Search
      </label>
      <input
        id="query"
        name="query"
        className="form-control"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
