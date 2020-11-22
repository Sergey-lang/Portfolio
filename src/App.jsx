import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyWorks} from "./MyWorks/MyWorks";
import {OfferWork} from "./OfferWork/OfferWork";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";
import myPhoto from './common/assets/images/me.jpg'

function App() {
   const personalPhoto = {
      backgroundImage:`url(${myPhoto})`,
   }
    return (
        <div className="App">
            <div style={personalPhoto}>
               <Header/>
               <Main/>
            </div>
            <Skills/>
            <MyWorks/>
            <OfferWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
