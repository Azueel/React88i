import React from 'react';
import { TableComponent } from '../components/TableComponent';

export const Productos = () => {
	const columna = ['Nombre', 'precio', 'descripcion'];

	const fila = [
		{ nombre: 'tv', precio: 800000, descripcion: 'abc123' },
		{ nombre: 'Alfajor', precio: 1000, descripcion: 'fantoche' },
	];
	return (
		<div>
			<h1>Lista Productos</h1>
			<TableComponent data={columna} fila={fila} />
		</div>
	);
};
