import React,{ useEffect, useState} from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/Navbar'
import Home from './components/Home/Home'



function App() {

  const [search, setSearch] = useState('')
  return (

    <Router>

    <div className="App">
      <NavBar/>
      <Route
            path="/" exact
            render={(routerProps) => <Home {...routerProps}  search={search} />}
          />
      <Route path="/" exact render={ (routerProps) => <Home {...routerProps } search={search}/> }/>
    </div>
    </Router>
  );
}

export default App;
