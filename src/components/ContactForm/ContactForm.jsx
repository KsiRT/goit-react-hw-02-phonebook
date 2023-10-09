import React, { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <>
        <form>
          <label>
            <p>Name</p>
            <input type="text" name="Name" />
          </label>

          <label>
            <p>Number</p>
            <input type="text" name="Number" />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
