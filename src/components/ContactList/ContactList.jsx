import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactList}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
