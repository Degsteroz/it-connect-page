import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIND_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

const eventsCollectionName = 'events';

const eventsCollection = collection(dataBase, eventsCollectionName);

const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence).then(() => {});

export { eventsCollection, auth };
