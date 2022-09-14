import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} pattern="^[2-9]\d{2}-\d{3}-\d{4}$" placeholder="Phone Number (XXX-XXX-XXXX)" />
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address'/>
      <input type='submit' />
    </form>
  );
};
