import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';
import { Api } from './components/API/Api';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <>
              <NavBar/>
              <Clock />
            </>
        
        <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            
            <Route exact path="/productos/:categoryId">
              <ItemListContainer />
            </Route>

            <Route path="*">
              <Redirect to="/"/>
            </Route>
        </Switch>
        </div>
    
    </BrowserRouter>
    
    
  );
}

export default App;
