import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';


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

    </div>
    
  );
}

export default App;
