import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';
import { Api } from './components/API/Api';


function App() {

  return (
    <div className="App">
        <>
          <NavBar/>
          <Clock />
        </>
        <>
          <ItemListContainer greeting = "Bienvenidos a TB Petshop"/>
        </>
        <>
          <Api />
        </>

    </div>
    
  );
}

export default App;
