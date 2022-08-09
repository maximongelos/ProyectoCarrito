import {collection, getDocs} from 'firebase/firestore';
import {db} from '../components/firebase/config';

const getProductos = async (coleccion) => {
	const data = [];
	const querySnapshot = await getDocs(collection(db, coleccion));
	querySnapshot.forEach((doc) => {
		const dataDetail = {id: doc.id, ...doc.data()};
		data.push(dataDetail);
	});

	return data;
};

export default getProductos;
