import { Component } from 'react';
import ContactsForm from './contactsform/contactsform';
import { nanoid } from 'nanoid';
import Contacts from './contactslist/contactslist';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Rormione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlerChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handlerSubmit = ev => {
    ev.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    console.log(name, id);
    this.addContacts({ name, number, id });
    console.log(this.state);
  };

  addContacts = person => {
    this.setState(state => ({
      contacts: [...state.contacts, person],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm
          handlerChange={this.handlerChange}
          handlerSubmit={this.handlerSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <div>
          <h2>Contacts</h2>
          <Contacts contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
export default App;
