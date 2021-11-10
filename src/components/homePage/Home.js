import { getProducts } from '../../services/dataApi';
import { useEffect, useState } from 'react';

import ProductsView from '../containers/ProductsView';

export default function Home() {
	const [products, setProducts] = useState(null);
	const [totalPages, setTotalPages] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getProducts(currentPage)
			.then(res => {
				if (res.data.products) {
					setProducts(res.data.products);
					setTotalPages(res.data.pagesCount);
				} else {
					setProducts([]);
				}
			})
			.catch(err => {
				setProducts([]);
			});
	}, [currentPage]);

	return (
		<ProductsView
			products={products}
			totalPages={totalPages}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	);
}
