// import React from "react";
import ContactItem from "./ContactItem";
import { Arraydata } from "./ContactApp";

interface ArrayContact {
  contacts: Arraydata[];
  onDelete: (id: number) => void;
}

function ContactList({ contacts, onDelete }: ArrayContact) {
  return (
    <div className="class-list">
      {contacts.map((item: Arraydata) => (
        <ContactItem key={item.id} onDelete={onDelete} {...item} />
      ))}
    </div>
  );
}

export default ContactList;
