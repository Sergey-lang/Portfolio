import React from 'react'
import Particles from 'react-particles-js'
import {Header} from '../u1-pages/b1-Header/Header'
import {Main} from '../u1-pages/b2-Main/Main'
import {Skills} from '../u1-pages/b3-Skills/Skills'
import {MyWorks} from '../u1-pages/b4-MyWorks/MyWorks'
import {OfferWork} from '../u1-pages/b5-OfferWork/OfferWork'
import {Contact} from '../u1-pages/b6-Contact/Contact'
import {Footer} from '../u1-pages/b7-Footer/Footer'
import {ScrollToUp} from '../u0-common/u0.2-components/ArrowUp/ScrollToUp'

import './App.css'


const params = {
   particles: {
      number: {
         value: 80,
         density: {
            enable: true,
            value_area: 800,
         }
      },
   },
}

function App() {

   return (
       <div className="App">
          <ScrollToUp/>
          <div className='mainBg'>
             <Particles className='particles' params={params}/>
             <Header/>
             <Main/>
          </div>
          <main>
             <Skills/>
             <MyWorks/>
             <OfferWork/>
             <Contact/>
             <Footer/>
          </main>
       </div>
   )
}

export default App
