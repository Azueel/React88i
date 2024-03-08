import React from 'react';

export const TableComponent = (props) => {
	console.log(props);
	const { data, fila } = props;

	return (
		<table className="table">
			<thead>
				<tr>
					{data.map((columna) => {
						return <th>{columna}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{fila.map((fila) => {
					return (
						<tr>
							<td>{fila.nombre}</td>
							<td>{fila.precio}</td>
							<td>{fila.descripcion}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
