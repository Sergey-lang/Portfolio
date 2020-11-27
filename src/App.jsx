import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyWorks} from './MyWorks/MyWorks';
import {OfferWork} from './OfferWork/OfferWork';
import {Contact} from './Contact/Contact';
import {Footer} from './Footer/Footer';

function App() {

   return (
      <div className="App">
         <div className='mainBg'>
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
