import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
//import registerServiceWorker from './registerServiceWorker';



  const config = {
    apiKey: "AIzaSyCMW5_n0J8gkXVffm2P66d5LalfiS7lxE0",
    authDomain: "twitterclone-f28e9.firebaseapp.com",
    databaseURL: "https://twitterclone-f28e9.firebaseio.com",
    projectId: "twitterclone-f28e9",
    storageBucket: "twitterclone-f28e9.appspot.com",
    messagingSenderId: "803841740315"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

if(module.hot){
    module.hot.accept();
}