import React, { Component } from 'react'
import FormCreateContacts from './Form/FormCreateContacts'
import Section from './Section/Section';


class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  render() {
    // const { contacts, name } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <FormCreateContacts />
        </Section>

      </div>
    );
  }

};


export default App;