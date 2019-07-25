import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDJfZ3KkKLfxwzKxq6u6oDI2A2qVy7fUWA',
  authDomain: 'authors-heaven-nicholus.firebaseapp.com',
  databaseURL: 'https://authors-heaven-nicholus.firebaseio.com',
  projectId: 'authors-heaven-nicholus',
  storageBucket: 'authors-heaven-nicholus.appspot.com',
  messagingSenderId: '629270668964',
  appId: '1:629270668964:web:1464b0be6b99f7c0',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
