import React, { useState } from "react";
import "./phone-contact.css";

type PhoneContactType = {
  contact: {
    name: string;
    phone: string;
    id: number;
  };
  deleteContact: (id: number) => void;
  updateContact: (contact: { phone: string; name: string; id: number }) => void;
};

const PhoneContact = ({
  contact: { name, phone, id },
  deleteContact,
  updateContact,
}: PhoneContactType) => {
  const [newName, setNewName] = useState<string>(name);
  const [newPhone, setNewPhone] = useState<string>(phone);

  const handleNewName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(event.target.value);
  };

  const handleUpdateContact = () => {
    updateContact({ name: newName, phone: newPhone, id });
  };

  return (
    <div className="phone-contact">
      <input
        value={newName}
        onChange={handleNewName}
        className="phone-contact-name"
      />
      <input
        value={newPhone}
        onChange={handleNewPhone}
        className="phone-contact-phone"
      />
      {(name !== newName || newPhone !== phone) && (
        <button onClick={handleUpdateContact}>Save changes</button>
      )}
      <button
        className="phone-contact-delete"
        onClick={() => deleteContact(id)}
      >
        Delete contact
      </button>
    </div>
  );
};

export default PhoneContact;
