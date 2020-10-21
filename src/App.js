import React from 'react';
import './App.css';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { MyWorks } from './MyWorks/MyWorks';
import { OfferWork } from './OfferWork/OfferWork';
import { Skills } from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Skills/>
      <MyWorks/>
      <OfferWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
