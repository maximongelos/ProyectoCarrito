import {collection, addDoc, writeBatch, getDoc, doc} from 'firebase/firestore';
import {db} from '../components/firebase/config';

const guardarOrden = async (cart, orden) => {
	const batch = writeBatch(db);

	const outStock = [];

	cart.forEach((prodCart) => {
		getDoc(doc(db, 'products', prodCart.id))
			.then(async (documentSnapshot) => {
				const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

				if (producto.stock >= prodCart.quantity) {
					batch.update(doc(db, 'products', producto.id), {
						stock: producto.stock - prodCart.quantity,
					});
				} else {
					outStock.push(producto);
				}

				if (outStock.length === 0) {
					addDoc(collection(db, 'orders'), orden)
						.then(({id}) => {
							batch.commit().then(() => {
								alert('Se genero la order con id: ' + id);
							});
						})
						.catch((err) => {
							console.log(`Error: ${err.message}`);
						});
				} else {
					let msj = '';
					for (const producto of outStock) {
						msj += `${producto.title} - Disponible: ${producto.stock}`;
					}
					alert(`Cantidades disponibles:
                ${msj}`);
				}
			})
			.catch();
	});
};

export default guardarOrden;
