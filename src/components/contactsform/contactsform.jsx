import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactsForm extends Component {
  render() {
    const { name } = this.props.name;
    const { number } = this.props.number;
    return (
      <form onSubmit={this.props.handlerSubmit}>
        <label htmlFor="name">
          Name
          <input
            onChange={this.props.handlerChange}
            value={name}
            type="text"
            name="name"
            id="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
            value={number}
            onChange={this.props.handlerChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactsForm;

ContactsForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
