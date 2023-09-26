// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: 'AIzaSyD-YvUP3UgG0Nm7b9U6KjrgVcBjMOcLl-4',
	authDomain: 'calculon-325e2.firebaseapp.com',
	projectId: 'calculon-325e2',
	storageBucket: 'calculon-325e2.appspot.com',
	messagingSenderId: '350794380098',
	appId: '1:350794380098:web:e3b4f85e1807e6175a8edb',
	measurementId: 'G-VE8NR920Q3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
