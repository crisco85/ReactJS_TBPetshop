
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/minty/bootstrap.min.css";
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Clock } from './components/Clock/Clock';
//import { Api } from './components/API/Api';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemlistCart } from './components/ItemListCart/ItemListCart';
import { Form } from './components/Form/Form';
import { CartProvider } from './Context/CartContext';
import { UIProvider } from './Context/UIContext';
import { UserAuthContext } from './Context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuhenticate/UserAuthenticate';
import { Signup } from './components/UserAuhenticate/Signup';



function App() {

  const { isAuthenticated } = useContext(UserAuthContext);

  return (
    <>
      <UIProvider>
        <CartProvider>

          <BrowserRouter>
              
                <Route exact path='/login'>
                  <UserAuthenticate />
                </Route>

                  {/* <Route exact path='/signup'>
                    <UserAuthenticate />
                  </Route> */}

                <Route exact path='/signup' component={Signup} />
              
                <Switch>
                  { isAuthenticated ? (             
                    <>

                      <div className="App">
                        <>
                          <NavBar/>
                          <Clock />
                        </>
                

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

                      </div>
                    </>
                    ) : (
                    <UserAuthenticate />
                    )
                  }
                </Switch>
          
          </BrowserRouter>
        
        </CartProvider>

      </UIProvider>
    </>
  );
}

export default App;
