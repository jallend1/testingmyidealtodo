import firebase from 'firebase/app';
import "firebase/firestore";
import myProjectConfig from './myProjectConfig';

firebase.initializeApp(myProjectConfig);

export default firebase;