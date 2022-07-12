/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
		},
		minHeight: {
			70: '70px',
		},
		maxWidth: {
			1200: '1200px',
		},
		colors: {
			rosa: '#f4bfbf',
			rosaFuerte: '#F9A0A0',
			gris: '#f0f0f0',
			blanco: '#ffffff',
			negro: '#000000',
		},
		screens: {
			cel: {max: '479px'},
			// => @media (max-width: 470px) { ... }

			tablet: {min: '480px', max: '959px'},
			// => @media (min-width: 480px and max-width: 959px) { ... }

			desktop: {min: '960px'},
			// => @media (min-width: 960px and max-width: 1326px) { ... }
		},
	},
	plugins: [],
};
