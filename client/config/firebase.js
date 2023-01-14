import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

//ahlem

import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};
// initialize firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export const auth = getAuth();
export const database = getFirestore();
//ahlem
export {firebase}