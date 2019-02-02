import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* ==========================================
  Assignment 4-1: Click to Change Text.
============================================= */
const headline = document.querySelector('.headline');
headline.addEventListener('click', () => {
  headline.textContent = "Have a Good Time!";
})

/* ==========================================
  Assignment 4-2: Click to Show/Close Menu.
============================================= */
const openNav = document.querySelector('.main-nav')
const menuIcon = document.querySelector('.menu')
const closeIcon = document.querySelector('.closebtn')

menuIcon.addEventListener('click', () =>{
  openNav.style.width = '100px';
})
closeIcon.addEventListener('click', () =>{
  openNav.style.width = '0px';
})

/* ==========================================
  Assignment 4-3: Click to Show More Content Boxes.
============================================= */
const mainFooter = document.querySelector('.mainFooter');
const hide = document.querySelector('.hide');
mainFooter.addEventListener('click', () => {
  hide.style.display = "flex";
})
serviceWorker.unregister();
