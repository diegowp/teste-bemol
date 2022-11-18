// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrKFMmgZcx-u7Qy9benHC2fz6r_ZwxGPY',
  authDomain: 'teste-bemol-6a9a0.firebaseapp.com',
  projectId: 'teste-bemol-6a9a0',
  storageBucket: 'teste-bemol-6a9a0.appspot.com',
  messagingSenderId: '925001121042',
  appId: '1:925001121042:web:27604e65cd93305900c7cb',
  databaseURL: 'https://teste-bemol-6a9a0-default-rtdb.firebaseio.com',
}

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig)
export const databaseFirebase = getDatabase(initFirebase)
