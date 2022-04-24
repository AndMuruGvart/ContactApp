import React, { useEffect, useState} from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import {Layout} from './shared/Layout';
import {  createStore } from "redux";
import { Provider, useSelector} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Check } from "./Check";
import Login from "./Authentification/Login";
import SignUp from "./Authentification/SignUp";
import { rootReducer, setToken } from "./store/store";
import { Break } from "./shared/Break";


const store=createStore(rootReducer, composeWithDevTools());


    function AppComponent() {

 
     return (

        <Provider store={store}>
                <BrowserRouter >
                <Layout>
                    <Break size={20} top/>
                    <Link to={'/login'}> Login Form </Link>
                    <Break size={20} top/>
                    <Link to={'/signup'}> SignUp Form </Link>
                        <Switch>
                            <Route path={'/login'} exact component={Login} />
                            <Route path={'/signup'} exact component={SignUp} />
                        </Switch>
                        <Break size={20} top/>
                        <Check/>
                </Layout>
                </BrowserRouter>
         </Provider>
    );
};

export const App=hot(()=><AppComponent/>);