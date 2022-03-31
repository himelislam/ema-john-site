import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveProduct}) => {
    const { name, img, shipping, price, quantity} = product;
    return (
        <div className='review-item'>
            <div className='review-item-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details" title={name}>
                    {name.length >20 ? name.slice(0, 20)+ '...': name}
                    <p>Price: ${price}</p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="review-item-dlt-btn">
                    <button className='button' onClick={()=>handleRemoveProduct(product)}>
                    <TrashIcon className='btn'></TrashIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;