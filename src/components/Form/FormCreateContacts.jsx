// import { nanoid } from 'nanoid';
import React, { Component } from 'react'


class FormCreateContacts extends Component {
  state = {}
  render() {
    return (
      <form>
        <div>
          <input
            id="nanoid()"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <button type='submit'>Add contact</button>
      </form>
    )
  }
}

export default FormCreateContacts;