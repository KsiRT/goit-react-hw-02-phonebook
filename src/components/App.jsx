import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { ContactList } from './Contactlist/ContactList';

export class App extends Component {
  state = {
    contacts: [],
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
      <>
        <h1>Phonebook</h1>
        <ContactForm newContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterInput={this.handleFilterInput} />
        <ContactList contacts={filteredContact} onDelete={this.handleDelete} />
      </>
    );
  }
}
