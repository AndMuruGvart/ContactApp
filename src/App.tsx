import React, { useEffect, useState} from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import {Layout} from './shared/Layout';
import { Header } from "./shared/Header";
import { applyMiddleware, createStore } from "redux";
import { Provider, useSelector} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { MyAction, rootReducer, RootState} from "./store/reducer";
import { saveToken, SetToken, TOKEN } from "./store/saveToken/actionsToken";
import { BrowserRouter } from "react-router-dom";
import AppList from "./AppList";
import { UserContextProvider } from "./shared/Context/userContext";
import { PostsContextProvider } from "./shared/Context/postsContext";
import { CardsLists } from "./CardsLists";
import { Check } from "./Check";



const store=createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, MyAction> ),
));


function AppComponent() {
    const [mounted, setMounted]=useState(false);


    useEffect(() => {
        setMounted(true)
    }, []);
    store.dispatch(saveToken());

    
     return (
         <Provider store={store}>
             { mounted &&(
                <UserContextProvider>
                <PostsContextProvider>
                <BrowserRouter>
                <Layout>
                <Header />
                    <Check/>
                </Layout>
                </BrowserRouter>
                </PostsContextProvider>
                 </UserContextProvider>
             )
             }
         </Provider>
    );
};

export const App=hot(()=><AppComponent/>);