import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { ContactList } from './Contactlist/ContactList';

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
    this.setState(prev => prev.contacts.filter(contact => contact.id !== id));

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
        <ContactForm />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterInput={this.handleFilterInput} />
        <ContactList contacts={filteredContact} onDelete={this.handleDelete} />
      </>
    );
  }
}
