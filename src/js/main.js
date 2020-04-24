"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Hamburger menu

const hamburger = document.querySelector('.navigation__hamburger--button');
const navigation = document.querySelector('.navigation');

const cross = document.querySelector('.nav__cross--button');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

cross.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

// Nav options

const home = document.getElementById('home');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');


home.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

skills.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

projects.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

contact.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  navigation.classList.toggle('navigation--js');
})

const msnry = new Macy({
  container: '.gallery__box',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    500: 2,
    700: 3,
    1100: 4,
  },
  // margin: {
  //   x: 20,
  //   y: 5,
  // }
})