import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
// 	apiKey: 'AIzaSyARzDEzNglq9U0bFiUCW35PQc7Y5nDwFag',
// 	authDomain: 'devtalk-de696.firebaseapp.com',
// 	projectId: 'devtalk-de696',
// 	storageBucket: 'devtalk-de696.appspot.com',
// 	messagingSenderId: '976914399832',
// 	appId: '1:976914399832:web:3a857065240fea18b5402d',
// 	measurementId: 'G-1CMXLEDFBL',
// };

const app = initializeApp(firebaseConfig);

export default app;
