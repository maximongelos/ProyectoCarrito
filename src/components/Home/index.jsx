import React from 'react';
import ItemListContainer from '../../containers/ItemListContainer';
import Banner from '../../assets/banner.jpg';

const Home = () => {
	return (
		<>
			<img
				src={Banner}
				alt="banner"
				className=" w-screen tablet:h-3/6 cel:h-2/6"
			/>

			<ItemListContainer />
		</>
	);
};

export default Home;
