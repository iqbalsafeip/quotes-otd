import * as Firebase from 'firebase';
import * as App from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// firebase config
var firebaseConfig = {
	apiKey: 'AIzaSyCMnqvlx3O3gROi45WypFiuOPE2aLWhxnU',
	authDomain: 'qotd-e387b.firebaseapp.com',
	databaseURL: 'https://qotd-e387b.firebaseio.com',
	projectId: 'qotd-e387b',
	storageBucket: 'qotd-e387b.appspot.com',
	messagingSenderId: '472036948154',
	appId: '1:472036948154:web:550778d3764dda3f0aaa83'
};

// initializing the firebase
export const app = App.initializeApp(firebaseConfig);

export const firebase = Firebase;
