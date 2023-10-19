import React from 'react';
import { Input, Label } from './FilterStyled';

export const Filter = ({ filter, onFilterInput }) => {
  return (
    <div>
      <Label htmlFor="filter">
        Find contacts by name:
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onFilterInput(target.value)}
        />
      </Label>
    </div>
  );
};
