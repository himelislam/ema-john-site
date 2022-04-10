import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shippment = () => {

    const [user] = useAuthState(auth)

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');


    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value)
    }

    const handleShippingSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleShippingSubmit}>
                    <h2 className='form-title'>Shipping Information</h2>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="phone-number" name="phone-number" id="" required/>
                    </div>
                    <p style={{color : 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
        </div>
    );
};

export default Shippment;