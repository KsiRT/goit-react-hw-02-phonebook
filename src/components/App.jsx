import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { ContactList } from './Contactlist/ContactList';
import { styled } from 'styled-components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // Принимаем фильтр из инпута
  handleFilterInput = value => {
    this.setState({ filter: value });
  };
  addNewContact = newContact => {
    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name === newContact.name
    );
    checkContact
      ? Notiflix.Notify.failure(`${newContact.name} is already in contacts`)
      : this.setState(prev => ({
          contacts: [...prev.contacts, newContact],
        }));
  };
  // Фильтруем
  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // Удаляем контакт
  handleDelete = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

    Notiflix.Notify.success(
      `${name} was successfully deleted from your Phonebook`
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilteredContact(filter);
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm newContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterInput={this.handleFilterInput} />
        <ContactList contacts={filteredContact} onDelete={this.handleDelete} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8295b8;
  height: 100vh;
`;
