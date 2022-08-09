import {addDoc, collection} from 'firebase/firestore';
import {db} from '../components/firebase/config';

const guardarProducto = async (nuevoProducto) => {
	console.log(nuevoProducto);

	// const {title, price, description, category, image, stock} = nuevoProducto;

	// Add a new document with a generated id.
	const docRef = await addDoc(collection(db, 'products'), nuevoProducto);
	alert('Se guardo nuevo producto con el id: ', docRef.id);
};
export default guardarProducto;
