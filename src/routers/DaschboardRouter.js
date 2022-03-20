import { Routes, Route  } from 'react-router-dom';
import React from 'react';
import { ContenidoMain } from '../components/Contenido/ContenidoMain';
import { Keyboards } from '../components/Keyboards/Keyboards';
import { Monitors } from '../components/Monitors/Monitors';
import { Mice } from '../components/Mice/Mice';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { ContenidoScreen } from '../components/Contenido/ContenidoScreen';

export const DaschboardRoutes = () => {
   
  return (

    <>

            <Navbar/>
          
          <Routes>
              <Route path="/" element={<ContenidoMain/>} />
              <Route path="mice" element={<Mice/>} />
              <Route path="keyboard" element={<Keyboards/>} />
              <Route path="monitors" element={<Monitors/>} />
              <Route path="contenidoscreen/:img" element={<ContenidoScreen/>} />


            
              <Route path="/" element={<ContenidoMain />} />
              
          </Routes> 
          
          <Footer/>
        


    </>
  )
}




