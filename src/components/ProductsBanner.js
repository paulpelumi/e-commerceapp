import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Products } from './Home';

const ProductsBanner = () => {
    const { products } = useContext(Products)
    return (
        <section>
            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Description</p>
            </div>
            <div className='products-container'>
                {
                    products.map(({id, image, title, price}) => {
                        return(
                            <Link to={`/product/${title}`} key={id}>
                                <div>
                                    <div className='product-card'>
                                        <img src={image} alt="" className='product-image'/>
                                        <p className='product-name'>{title}</p>
                                        <p className='product-price'>{`$${price}`}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default ProductsBanner;
