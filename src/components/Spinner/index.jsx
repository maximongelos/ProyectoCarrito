import React from 'react';
import './style.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {TailSpin} from 'react-loader-spinner';

const Spinner = () => {
	return (
		<>
			<div className="spinner">
				<TailSpin
					className="spinner"
					ariaLabel="loading-indicator"
					color="#000"
				/>
			</div>
		</>
	);
};

export default Spinner;
