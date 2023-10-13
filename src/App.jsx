import React from 'react';
import { useState } from 'react';
import ContactList from './Components/ContactList';
import SelectedContactID from './Components/SelectedContactID';
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId? (<SelectedContactID selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
  );
}

export default App

