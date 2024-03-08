import React from 'react';
import { Card } from '../components/Card';

export const Home = () => {
	const productos = [
		{
			imagen:
				'https://www.sony.com.ar/image/f161a88d5921dbaa007f98e46074bc1b?fmt=png-alpha&wid=960',
			titulo: 'TV LG',
			descripcion: "TV de alta calidad 4k de 90' SmartTV",
		},
		{
			imagen:
				'https://www.sony.com.ar/image/f161a88d5921dbaa007f98e46074bc1b?fmt=png-alpha&wid=960',
			titulo: 'Alfajor',
			descripcion: 'Fantoche Triple blanco',
		},
		{
			imagen:
				'https://www.sony.com.ar/image/f161a88d5921dbaa007f98e46074bc1b?fmt=png-alpha&wid=960',
			titulo: 'Monitor Samsung',
			descripcion: "Monitor Samsung de 27' Full HD 240hz",
		},
	];

	return (
		<div>
			<h1>Cards</h1>

			<Card productos={productos} />
		</div>
	);
};
