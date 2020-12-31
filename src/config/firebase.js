import firebase from 'firebase/app';
import 'firebase/firestore'
import myProjectConfig from './myProjectConfig';

firebase.initializeApp(myProjectConfig);
firebase.firestore().settings({ timestampsinSnapshots: true});

export default firebase;