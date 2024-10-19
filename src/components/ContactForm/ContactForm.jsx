import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    const newName = event.target.value.replace(/[^a-zA-Z\s'-]/g, '');
    setName(newName);
  };

  const handleNumberChange = event => {
    const newNumber = event.target.value.replace(
      /[^+\d\s()-]|^[\s()-]+|(?<=\d)[+]|\b[+]\b/g,
      ''
    );
    setNumber(newNumber);
  };

  const handleAdd = () => {
    if (name.trim() !== '' && number.trim() !== '') {
      onAdd(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.container}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Full Name:"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={styles.label}>
        Number:
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Phone:"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>

      <Button type="button" action={handleAdd}>
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
