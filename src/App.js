import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Inicio from './pages/inicio';
import Productos from './pages/productos';
import AcercaDe from './pages/acercade';
import Contacto from './pages/contacto';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Inicio/>} />
          <Route path="/productos" exact element={<Productos />} />
          <Route path="/acerca-de" exact element={<AcercaDe />}  />
          <Route path="/contacto" exact element={<Contacto/>} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
