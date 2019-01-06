import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          defaultValue={getFunName()}
          required
          placeholder="Store"
        />
        <button type="submit">Visit Store ➞</button>
      </form>
    );
  }
}

export default StorePicker;
