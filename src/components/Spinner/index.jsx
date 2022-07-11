import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {TailSpin} from 'react-loader-spinner';

const Spinner = () => {
	return (
		<>
			<div className="mt-24 mx-auto mb-0 w-20 text-center">
				<TailSpin ariaLabel="loading-indicator" color="#000" />
			</div>
		</>
	);
};

export default Spinner;
