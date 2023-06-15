import { nanoid } from 'nanoid';

const { Component } = require('react');

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerChange = ev => {
    this.setState({ name: ev.target.value });
  };
  handlerSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit({
      ...this.state,
      id: nanoid(),
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name
            <input
              onChange={this.handlerChange}
              value={name}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <div>
            <ul></ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactsForm;
