import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
// - First, let's head to our `ShoppingCart` component and import the `useContext` hook and our `CartContext`.

// Components
import Item from './ShoppingCartItem';

// - Now in the component, pass `CartContext` to the `useContext` hook and assign it to a variable named cart.
function ShoppingCart() {
	const cart = useContext(CartContext);

	//   - Remove the `props` parameter
	const getCartTotal = () => {
		//   - Remove the `props` portion in our `getCartTotal` function
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{/*   - Remove `props` when we're mapping over our cart */}
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
