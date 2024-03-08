import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos';
import { Usuarios } from '../pages/Usuarios';
import { Home } from '../pages/Home';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/producto" element={<Productos />} />
				<Route path="/usuarios" element={<Usuarios />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
