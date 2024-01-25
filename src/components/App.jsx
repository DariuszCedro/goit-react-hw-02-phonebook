import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
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
  handleAddContact = evt => {
    evt.preventDefault();

    const form = document.querySelector('form');

    const nameToAdd = form.elements.name.value;
    const phoneNumber = form.elements.number.value;

    const newContact = { name: nameToAdd, id: nanoid(), number: phoneNumber };
    this.setState({ contacts: [...this.state.contacts, newContact] });
    form.reset();
  };

  handleFilter = evt => {
    evt.preventDefault();
    this.setState({ filter: evt.target.value.toLowerCase() });
    console.log(this.state.filter);
  };

  showFilteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  }

  render() {
    return (
      <div>
        <Form addContact={this.handleAddContact}></Form>
        <h2>Contacts</h2>
        <Filter contactFilter={this.handleFilter}></Filter>
        <List showFiltered={this.showFilteredContacts()}></List>
        ---------------------------------------
      </div>
    );
  }
}
