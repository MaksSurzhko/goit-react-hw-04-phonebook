// import React, { Component } from "react";
// import fcss from "../contform/form.module.css";

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: ""
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact(name, number);
//     this.setState({ name: "", number: "" });
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={fcss.pform} onSubmit={this.handleSubmit}>
//         <label className={fcss.plabel} htmlFor="nameInput">
//           Name
//           <input
//             className={fcss.pinput}
//             id="nameInput"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={fcss.plabel} htmlFor="numberInput">
//           Number
//           <input
//             className={fcss.pinput}
//             id="numberInput"
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={fcss.pbtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;



import React, { useState } from "react";
import fcss from "../contform/form.module.css";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  return (
    <form className={fcss.pform} onSubmit={handleSubmit}>
      <label className={fcss.plabel} htmlFor="nameInput">
        Name
        <input
          className={fcss.pinput}
          id="nameInput"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={fcss.plabel} htmlFor="numberInput">
        Number
        <input
          className={fcss.pinput}
          id="numberInput"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={fcss.pbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;