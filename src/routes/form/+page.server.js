import { initializeApp } from 'firebase/app';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	//here comes the config data
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let data = [];

export const load = async () => {
	const response = await getDocs(collection(db, 'countries'));
	data = response.docs.map((doc) => doc.data());
	return {
		documents: data
	};
};
