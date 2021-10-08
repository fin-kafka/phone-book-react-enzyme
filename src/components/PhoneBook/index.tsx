import { useState } from "react";
import { defaultPhoneContacts } from "../../constants.js";
import PhoneContact from "../PhoneContact";
import PhoneNewContact from "../PhoneNewContact";

export type PhoneContactType = {
  name: string;
  phone: string;
  id: number;
};

const PhoneBook = () => {
  const [phoneContacts, setPhoneContacts] =
    useState<PhoneContactType[]>(defaultPhoneContacts);

  const deleteContact = (id: number) => {
    const newPhoneContacts = [...phoneContacts];
    const index = phoneContacts.findIndex(
      (contact: PhoneContactType) => contact.id === id
    );
    newPhoneContacts.splice(index, 1);
    setPhoneContacts(newPhoneContacts);
  };

  const updateContact = ({ name, phone, id }: PhoneContactType) => {
    const newPhoneContacts = [...phoneContacts];
    const index = newPhoneContacts.findIndex((contact) => contact.id === id);
    newPhoneContacts[index] = { name, phone, id };
    setPhoneContacts(newPhoneContacts);
  };

  const addNewContact = (contact: PhoneContactType) => {
    const newPhoneContacts = [...phoneContacts];
    newPhoneContacts.push(contact);
    setPhoneContacts(newPhoneContacts);
  };

  return (
    <div>
      {phoneContacts.map((contact: PhoneContactType) => {
        return (
          <PhoneContact
            updateContact={updateContact}
            deleteContact={deleteContact}
            key={contact.id}
            contact={contact}
          ></PhoneContact>
        );
      })}
      <PhoneNewContact addNewContact={addNewContact} />
    </div>
  );
};

export default PhoneBook;
