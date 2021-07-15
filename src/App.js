import { Component } from 'react';
import { nanoid } from 'nanoid';

import Filter from 'components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
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

  addContact = (name, number) => {
    console.log('nameContact', name);
    console.log('numberContact', number);

    const contact = { id: nanoid(), name, number };
    console.log(this.state);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
