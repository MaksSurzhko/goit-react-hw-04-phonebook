import React from "react";
//import { nanoid } from "nanoid";
import lcss from "../contlist/list.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={lcss.llist}>
      {contacts.map((contact) => (
        <li className={lcss.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={lcss.bbtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;