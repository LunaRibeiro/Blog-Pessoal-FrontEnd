import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import {Grid} from '@material-ui/core';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
   <Router>
    <Navbar />
      <Switch>
        <div style={{minHeight: '63.8vh'}}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
          
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
        </div>
      </Switch>
    <Footer />
   </Router>
  );
}

export default App;
