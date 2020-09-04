import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (!window.localStorage.getItem('users')) {
	console.log('qwqw')
	window.localStorage.setItem('users', JSON.stringify([
		{'login': 'user1', 'password': 'password1'},
		{'login': 'user2', 'password': 'password2'},
		{'login': 'user3', 'password': 'password3'},		
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
