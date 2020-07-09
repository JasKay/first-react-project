import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from "./Card";
import contacts from "../Contacts";

import './styles.css';

function App() {
  return <div>
    <Header />
    <Note />
    <Footer />
    <Card
      name = {contacts[0].myname}
      img  = {contacts[0].myimg}
      tel  = {contacts[0].mytel}
      email= {contacts[0].myemail}
      />
    <Card
      name = {contacts[1].myname}
      img  = {contacts[1].myimg}
      tel  = {contacts[1].mytel}
      email= {contacts[1].myemail}
      />
      <Card
      name = {contacts[2].myname}
      img  = {contacts[2].myimg}
      tel  = {contacts[2].mytel}
      email= {contacts[2].myemail}
      />
      <Card
      name = {contacts[3].myname}
      img  = {contacts[3].myimg}
      tel  = {contacts[3].mytel}
      email= {contacts[3].myemail}
      />
  </div>
}

export default App;
