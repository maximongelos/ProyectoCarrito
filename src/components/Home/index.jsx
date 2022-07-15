import React from 'react';
import ItemListContainer from '../../containers/ItemListContainer';
import Banner from '../../assets/banner.png';

const Home = () => {
	return (
		<>
			<img
				src={Banner}
				alt="banner"
				className="w-full h-5/6 tablet:h-3/6 cel:h-2/6"
			/>
			<ItemListContainer />
		</>
	);
};

export default Home;
