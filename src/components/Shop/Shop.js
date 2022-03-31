import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();

    // useEffect(() => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[]);

    
    const [cart, setCart] = useCart(products);

    // useEffect( () => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product.id === id)
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // },[products])

    const handle = (SelectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id)
        if(!exists){
            SelectedProduct.quantity = 1;
            newCart = [...cart , SelectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest , exists]
        }
        setCart(newCart)
        addToDb(SelectedProduct.id)
    }

    // mine try

    const deleteCart = () => {
        deleteShoppingCart()
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product = {product}
                        handle = {handle}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                deleteCart = {deleteCart}
                >
                    <Link to='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;