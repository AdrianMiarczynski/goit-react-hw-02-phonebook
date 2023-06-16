const { Component } = require('react');

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
