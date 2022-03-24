import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './paginas/home/Home';
import {Grid} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <>
        <Navbar />
            <Home />
        <Footer/>   
    </>
  );
}

export default App;
