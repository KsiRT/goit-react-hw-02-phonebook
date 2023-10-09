import React from 'react';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name} : </p>
          <p> {contact.number}</p>
          <button
            onClick={() => {
              onDelete(contact.id, contact.name);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
