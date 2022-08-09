import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '../components/firebase/config';

const eliminarProducto = async (id) => {
	const productDoc = doc(db, 'products', id);
	await deleteDoc(productDoc);
};

export default eliminarProducto;
