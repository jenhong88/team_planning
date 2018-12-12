import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAq-9LeA6R9ZPlIwO79BUaycU_U36aIEN0",
	authDomain: "mother-a8604.firebaseapp.com",
	databaseURL: "https://mother-a8604.firebaseio.com",
	projectId: "mother-a8604",
	storageBucket: "mother-a8604.appspot.com",
	messagingSenderId: "287463466392"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;