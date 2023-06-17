import React from "react";
import pcss from "../phonebook/phonebook.module.css";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={pcss.clabel} htmlFor="filterInput">
      Find contacts by name:
      <input
        className={pcss.cinput}
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;