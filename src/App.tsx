import React,{ useEffect, useState} from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/Navbar'
import Home from './components/Home/Home'



function App() {

  return (

    <Router>
    <Container>

      <NavBar/>
      <Route
            path="/" exact
            render={(routerProps) => <Home {...routerProps}  />}
          />
    </Container>
    
    
    </Router>
  );
}

export default App;
