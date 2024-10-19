import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/features/contactSlice';
import styles from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleAdd = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={handleAdd} />
      <h2>Contacts:</h2>
      <Filter filter={filter} onFilterChange={handleFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDelete} />
    </div>
  );
};

export default App;
