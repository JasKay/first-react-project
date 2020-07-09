import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from "./Card";
import contacts from "../Contacts";
import './styles.css';

function createCard(contact){
  return (
    <Card 
      key={contact.id}
      name={contact.myname} 
      img={contact.myimg}
      tel={contact.mytel}
      mail={contact.myemail}
  />
  );
}
function App() {
  return <div>
    <Header />
    <Note />
    {contacts.map(createCard)}
    <Footer />
  </div>
}

export default App;
