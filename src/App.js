import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

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
                <Switch>
                    <Route exact path='/login' component={ LoginPage }/>
                    <Route exact path='/main' component={ MainPage }/>
                    <Route exact path='/search' component={ SearchPage }/>
                    <Redirect from='/' to='/login'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
