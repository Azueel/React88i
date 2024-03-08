import React from 'react';
import '../css/style.css';

export const Card = (props) => {
	const { productos } = props;

	return (
		<div className="d-flex justify-content-around">
			{productos.map((producto) => {
				return (
					<div className="card contenedor">
						<img src={producto.imagen} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{producto.titulo}</h5>
							<p className="card-text">{producto.descripcion}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
