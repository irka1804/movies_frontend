import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

// import i18n (needs to be bundled ;))
import i18n from './i18n'
import Header from './Header'
import LoginPage from './LoginPage'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path='/login' component={ LoginPage }/>
            </div>
        </BrowserRouter>
    );
}

export default App;
