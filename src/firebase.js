import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyD7oit6YLMHfhpA7ntBF3NAR20LPGXGUBQ',
   authDomain: 'fir-test-ce7a4.firebaseapp.com',
   projectId: 'fir-test-ce7a4',
   storageBucket: 'fir-test-ce7a4.appspot.com',
   messagingSenderId: '686907575049',
   appId: '1:686907575049:web:ee0bd5853ddbe429a2a1d8',
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export { db };
export default firebase;
