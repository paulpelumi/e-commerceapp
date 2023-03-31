import React, { useContext, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Products } from './Home';


const Header = ({setDrawer}) => {
    const { cartNumber } = useContext(Products);
    return (
        <nav>
            <div className='navbar-container'>
                <h1 className='logo'>
                    <Link to={"/"}>Headphones</Link> 
                </h1>
                <button onClick={() => setDrawer(true)} className='cart-icon'>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>{cartNumber}</span>
                </button>
            </div>
            
        </nav>
    );
}

export default Header;
