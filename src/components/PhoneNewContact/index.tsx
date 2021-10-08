import React, { useState } from "react";
import { PhoneContactType } from "../PhoneBook";
import "./phone-new-contact.css";

type PhoneNewContactType = {
  addNewContact: (contact: PhoneContactType) => void;
};

const PhoneNewContact = ({ addNewContact }: PhoneNewContactType) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleNewContactName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNewContactPhone = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(event.target.value);
  };

  const handleAddContact = () => {
    addNewContact({ name, phone, id: Math.random() });
    setName("");
    setPhone("");
  };

  return (
    <div className="phone-new-contact">
      <input
        className="phone-new-contact-name"
        value={name}
        placeholder="Name"
        type="text"
        onChange={handleNewContactName}
      />
      <input
        className="phone-new-contact-phone"
        value={phone}
        placeholder="Phone"
        type="text"
        onChange={handleNewContactPhone}
      />
      <button onClick={handleAddContact}>Add contact</button>
    </div>
  );
};

export default PhoneNewContact;
