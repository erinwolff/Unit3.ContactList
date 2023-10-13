import React from "react";


function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr onClick={() => {
      setSelectedContactId(contact.id);
    }}>
      <td className="rowDetail">{contact.name}</td>
      <td className="rowDetail">{contact.email}</td>
      <td className="rowDetail">{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;