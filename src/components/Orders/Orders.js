import React from 'react';
import './Orders.css'
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [cart, setCart] = useCart();

    // mine try
    const deleteCart = () => {
        deleteShoppingCart()
        setCart([])
    }

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        const newCart = rest;
        
        setCart(newCart);
        removeFromDb(product._id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-item-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        deleteCart={deleteCart}
                    >
                        <Link to='/shippment'>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;