import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryProducts } from '../../services/dataApi';

import ProductsView from '../containers/ProductsView';

export default function Categories() {
	const { categoryName } = useParams();

	const [products, setProducts] = useState(null);
	const [totalPages, setTotalPages] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getCategoryProducts(categoryName, currentPage)
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
	}, [categoryName, currentPage]);

	return (
		<ProductsView
			products={products}
			totalPages={totalPages}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	);
}
