import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Iye0USA01Lak5wYtthVBM9BVvlqlJ6v0m8Vcgdgcc4Z4ZDMHp13UrlV3PdxeTGRMpseev29lB61K85Cvs2hQ8rg00Dn2g6xNK');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // wil only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){
          // the user just loggedin / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
        </Route>
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;