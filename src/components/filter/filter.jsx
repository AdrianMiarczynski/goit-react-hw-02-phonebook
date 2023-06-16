import { Component } from 'react';
import PropTypes from 'prop-types';

class FilterContacts extends Component {
  render() {
    const { filterInputValue } = this.props.filter;
    return (
      <label htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          name="filter"
          id="filter"
          value={filterInputValue}
          onChange={this.props.handlerChange}
        />
      </label>
    );
  }
}
export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
