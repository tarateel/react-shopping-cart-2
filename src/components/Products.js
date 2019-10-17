import React, { useContext } from 'react';

// Contexts
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

function Products() {
	// `products and addItem passed into `useContext` hook
	const { products, addItem } = useContext(ProductContext);

	return (
		// `props` removed
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
