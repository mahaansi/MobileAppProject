// import firebaseApp from './firebaseApp';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDx92aAOTGPzHpkjKBOG4z1dYOcL8euCwc',
  authDomain: 'bookshare-ba8b7.firebaseapp.com',
  databaseURL: 'https://bookshare-ba8b7.firebaseio.com',
  projectId: 'bookshare-ba8b7',
  storageBucket: 'bookshare-ba8b7.appspot.com',
  messagingSenderId: '196648989119',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;