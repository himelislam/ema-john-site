import React, { useContext } from 'react';
import { NameContext } from '../Shop/Shop';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    const name = useContext(NameContext);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p><small>{name}</small></p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${parseInt(tax)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button className='dlt-btn' onClick={props.deleteCart}>Clear Cart</button>
            {props.children}
        </div>
    );
};

export default Cart;