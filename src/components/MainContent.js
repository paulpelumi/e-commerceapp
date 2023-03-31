import React from 'react';
import FooterBanner from './FooterBanner';
import HeroBanner from './HeroBanner';
import ProductsBanner from './ProductsBanner';

const MainContent = () => {
    return (
        <>
            <HeroBanner />
            <ProductsBanner />
            <FooterBanner /> 
        </>
    );
}

export default MainContent;
