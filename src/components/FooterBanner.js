import React from 'react';
import heroBannerImg from "../assets/img/hero-headset-img.webp"
import { Link } from 'react-router-dom'

const FooterBanner = () => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>20% OFF</p>
                    <h3>FINE</h3>
                    <h3>SMILE</h3>
                    <p>2 Nov to 15 Dec</p>
                </div>
                <div className='footer-banner-image-container'>
                    <img src={heroBannerImg} alt="footer banner" className='footer-banner-image'/>
                </div>
                <div className='right'>
                    <p>fashionable</p>
                    <h3>Summer sale</h3>
                    <p>neon headphones</p>
                    <Link to={'/product/headphones'}>
                        <button>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;
