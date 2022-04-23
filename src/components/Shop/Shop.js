import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, deleteShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

export const NameContext = createContext('name');

const Shop = () => {
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0); 
    const [pageSize, setPageSize] = useState(10);


    useEffect( () => {
        fetch(`http://localhost:5000/product?page=${page}&size=${pageSize}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page, pageSize]);

    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    },[])


    const handle = (SelectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === SelectedProduct._id)
        if (!exists) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== SelectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(SelectedProduct._id)
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
                            key={product._id}
                            product={product}
                            handle={handle}
                        ></Product>)
                    }
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()]
                            .map(number => <button
                                onClick={()=> setPage(number)}
                                className={page === number ? 'selected' : ''}
                            >{number +1}</button>)
                        }
                        <select onChange={e => setPageSize(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        deleteCart={deleteCart}
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