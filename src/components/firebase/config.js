// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBX1VlJOU_b7FQpdzOi9sZv4axZzC6Wap8',
	authDomain: 'carrito-ropas.firebaseapp.com',
	projectId: 'carrito-ropas',
	storageBucket: 'carrito-ropas.appspot.com',
	messagingSenderId: '742890488989',
	appId: '1:742890488989:web:7443fe522051a6c8dc0074',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
