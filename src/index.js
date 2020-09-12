import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


if (!window.localStorage.getItem('users')) {
	window.localStorage.setItem('users', JSON.stringify([
		{'login': 'user1@m.m', 'password': 'password1'},
		{'login': 'user2@m.m', 'password': 'password2'},
		{'login': 'user3@m.m', 'password': 'password3'},		
	]))
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
