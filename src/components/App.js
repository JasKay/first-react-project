import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import './styles.css'

function App() {
  return <div>
    <Header />
    <Note />
    <Footer />
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">Edoyak</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIDTRdQ0s_REO_PS1drsrdbzKcSRP2GOkgZA&usqp=CAU" alt="kay-img"></img>
        </div>
      </div>
    </div>
  </div>
}

export default App;
