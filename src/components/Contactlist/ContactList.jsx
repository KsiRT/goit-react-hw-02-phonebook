import React from 'react';
import { Button, Item, List, Name, Number } from './ContactListStyled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Name>{contact.name} : </Name>
          <Number> {contact.number}</Number>
          <Button
            onClick={() => {
              onDelete(contact.id, contact.name);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
