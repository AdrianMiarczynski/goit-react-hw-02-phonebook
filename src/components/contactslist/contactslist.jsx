import { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}: <span>{number}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

Contacts.protoTypes = {
  contacts: PropTypes.array.isRequired,
};
