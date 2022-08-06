import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebase/config';

const eliminarProducto = async (id) => {
	const productDoc = doc(db, 'products', id);
	await deleteDoc(productDoc);
};

export default eliminarProducto;
