const { Component } = require('react');

class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name} <span>{number}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
