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
  };

  addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = e => {
    const id = e.currentTarget.id;

    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(n => n.id !== id) };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  handleCoincidence = currentName => {
    if (
      this.state.contacts.find(({ name }) => name.toLowerCase() === currentName)
    ) {
      alert(`${currentName} is alredy in contacts`);
      return true;
    }
  };

  render() {
    const { filter } = this.state;

    const filterContacts = this.getVisibleContacts();

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmit={this.addContact}
          coincidence={this.handleCoincidence}
        />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
