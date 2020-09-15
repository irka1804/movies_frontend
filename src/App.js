import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

// import i18n (needs to be bundled ;))
import i18n from './i18n'
import Header from './Header'
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import SearchPage from './SearchPage'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path='/login' component={ LoginPage }/>
                <Route exact path='/main' component={ MainPage }/>
                <Route exact path='/search' component={ SearchPage }/>
            </div>
        </BrowserRouter>
    );
}

export default App;
