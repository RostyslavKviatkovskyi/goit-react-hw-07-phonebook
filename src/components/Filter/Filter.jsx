// import React, { useCallback } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFilterName, setSearch } from 'redux/store';
import { updateFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="">
        <p> Find contacts by name</p>
        {/* <input type="text" value={filterValue} onChange={handleChange} /> */}
        <input
          type="text"
          // name="filter"
          value={filterValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  // onChange: PropTypes.func,
};
