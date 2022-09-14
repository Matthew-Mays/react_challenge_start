import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange} defaultValue={""}>
      <option value={""} key={-1}>No Contact Selected</option>
      {contacts.map((contact) => {
       return (<option value={contact} key={contact}>{contact}</option>)
      })}
    </select>
  );
};
