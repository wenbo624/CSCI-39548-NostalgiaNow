import React, {useEffect, useState} from 'react';
import {BrowserRouter , Router, Route, Switch, Link,Redirect} from 'react-router-dom';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
const App =() => {


  return(

    <BrowserRouter>
      <Route
        path="/"
        exact
        component ={Login} />
      <Route
        path="/signup"
        exact
        component ={Signup} />
      <Route
        path="/home/:name"
        exact
        component ={Home} />
      
    </BrowserRouter>


  );
};

export default App;