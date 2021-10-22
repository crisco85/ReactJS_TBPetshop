import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';
//import { Api } from './components/API/Api';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemlistCart } from './components/ItemListCart/ItemListCart';
import { Form } from './components/Form/Form';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([])

  const addToCart = (item) => {
      setCarrito( [...carrito, item] )
  }

  return (

    <CartContext.Provider value={ {addToCart} }>

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

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/contacto">
                <Form />
              </Route>


              <Route exact path="/cart">
                <ItemlistCart />
              </Route>

              <Route path="*">
                <Redirect to="/"/>
              </Route>
          </Switch>
          </div>
      
      </BrowserRouter>
    
    </CartContext.Provider>
  );
}

export default App;
