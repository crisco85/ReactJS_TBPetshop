import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';
import { useEffect, useState } from 'react';

function App() {

  /* const [clock, setClock] = useState(true);

  useEffect (() =>{
    setTimeout(() => {
      setClock(!clock)
    }, 5000)

  }, [clock]) */


  return (
    <div className="App">
        <>
          <NavBar/>
          <Clock />
        </>
        <>
          <ItemListContainer greeting = "Bienvenidos a TB Petshop"/>
        </>

    </div>
    //  <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
    //    <p>
    //      Edit <code>src/App.js</code> and save to reload.
    //    </p>
    //    <a
    //      className="App-link"
    //      href="https://reactjs.org"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      Learn React
    //    </a>
    //  </header>
    


  );
}

export default App;
