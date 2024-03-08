import React from 'react';
import { TableComponent } from '../components/TableComponent';

export const Usuarios = () => {
	const columna = ['Nombre', 'Apellido', 'Edad', 'Email'];
	return (
		<div>
			<h1>Lista Usuarios</h1>
			<TableComponent data={columna} />
		</div>
	);
};
