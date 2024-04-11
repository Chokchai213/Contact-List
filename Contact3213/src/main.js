import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { initializeApp } from 'firebase/app'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

let app
let auth

const firebaseConfig = {

    apiKey: "AIzaSyA5tAUlsRQVeQvWlEDMSVyB5UvZp9hABKw",
  
    authDomain: "fir-vue-egco427.firebaseapp.com",
  
    projectId: "fir-vue-egco427",
  
    storageBucket: "fir-vue-egco427.appspot.com",
  
    messagingSenderId: "546632326160",
  
    appId: "1:546632326160:web:f7b3b696fbe8e9d93c7e95"
  
  };
  

// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth()

onAuthStateChanged(auth, (user)=> {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})









