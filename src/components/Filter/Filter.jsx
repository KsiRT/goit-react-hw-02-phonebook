import React from 'react';

export const Filter = ({ filter, onFilterInput }) => {
  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onFilterInput(target.value)}
        />
      </label>
    </div>
  );
};
