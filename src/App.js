import React from 'react'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './styles/index.css'
// import i18n (needs to be bundled ;))
import i18n from './i18n'
import Header from './Components/Header'
import LoginPage from './scenes/LoginPage'
import MainPage from './scenes/MainPage'
import SearchPage from './scenes/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App text-lg">
        <Header />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/search" component={SearchPage} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
