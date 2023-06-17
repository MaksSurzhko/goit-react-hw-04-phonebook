/*import React, { Component } from "react";
import { nanoid } from "nanoid";
import pcss from "../phonebook/phonebook.module.css"

class inputForm extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const errorContact = contacts.find(contact => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
    }
    
     deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    const { contacts, name, filter, number } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={pcss.cont}>
        <h2 className={pcss.ptitle}>Phonebook</h2>
        <form className={pcss.pform} onSubmit={this.handleAddContact}>
          <label className={pcss.plabel} htmlFor="nameInput">
            Name
            <input className={pcss.pinput}
              id="nameInput"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={pcss.plabel} htmlFor="numberInput">
            Number
            <input className={pcss.pinput}
              id="numberInput"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={pcss.pbtn} type="submit">Add contact</button>
        </form>
        <div className={pcss.ccont}>
          <h2 className={pcss.ctitle}>Contacts</h2>
          <label className={pcss.clabel} htmlFor="filterInput">
            Find contacts by name:
            <input className={pcss.cinput}
              id="filterInput"
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleInputChange}
            />
          </label>
          
            {filteredContacts.map(contact => (
                <ul className={pcss.llist}>
              <li className={pcss.item} key={contact.id}>
                {contact.name}: {contact.number}
                </li>
                <button className={pcss.bbtn} onClick={() => this.deleteContact(contact.id)}>delete</button>    
                </ul>
            ))}
          
        </div>
      </div>
    );
  }
}

export default inputForm;*/


/*import React, { Component } from "react";
import { nanoid } from "nanoid";
import pcss from "../phonebook/phonebook.module.css";
import ContactForm from "../contform/form";
import Filter from "../filter/filter";
import ContactList from "../contlist/list";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: ""
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={pcss.cont}>
        <h2 className={pcss.ptitle}>Phonebook</h2>

        <ContactForm
          name={name}
          number={number}
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />

        <div className={pcss.ccont}>
          <h2 className={pcss.ctitle}>Contacts</h2>

          <Filter
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;*/