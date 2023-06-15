import { Component } from 'react';
import ContactsForm from './contacts/contacts';
// import { nanoid } from 'nanoid';

export class App extends Component {


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={values => console.log(values)} />
        {/* <div>
          <h2>Contacts</h2>
        </div> */}
      </div>
    );
  }
}
export default App;
