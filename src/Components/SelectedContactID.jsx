import React from 'react';
import { useEffect, useState } from 'react';

function SelectedContactID({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState();

  useEffect(() => {
    async function selectContact() {
      try {
        const users = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const response = await users.json();
        setContact(response);
      } catch (error) {
        console.error(error)
      }
    }
    selectContact();
  }, []);

  return (
    <>
      {contact ?
        (<table>
          <thead>
            <tr>
              <th colSpan="7">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rowTitle">Name</td>
              <td className="rowTitle">Email</td>
              <td className="rowTitle">Phone</td>
              <td className="rowTitle">Address</td>
              <td className="rowTitle">Username</td>
              <td className="rowTitle">Website</td>
              <td className="rowTitle">Company</td>
            </tr>
            <tr>
              <td className="rowDetail">{contact.name}</td>
              <td className="rowDetail">{contact.email}</td>
              <td className="rowDetail">{contact.phone}</td>
              <td className="rowDetail">{contact.address.city}</td>
              <td className="rowDetail">{contact.username}</td>
              <td className="rowDetail">{contact.website}</td>
              <td className="rowDetail">{contact.company.name}</td>
            </tr>
          </tbody>
        </table>)
        : (<p>Loading...</p>)
      }
      <button className="returnButton" onClick={() => setSelectedContactId(null)}>Return to list</button>
    </>
  );

}

export default SelectedContactID