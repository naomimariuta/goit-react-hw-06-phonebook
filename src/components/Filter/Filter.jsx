import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/features/contactSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find contact by name:
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
