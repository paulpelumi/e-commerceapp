import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../components/Home';

const useChangeUrl = () => {
    const [productState, setproductState] = useState([]);
    const { products } = useContext(Products);
    let { id } = useParams()
    const { title } = products
    const ChangeUrl = () => {
        id = title
        useEffect(() => {   
            setproductState(products.filter(({title}) => title === id));
        }, [products]);
    
    }; 
    return ChangeUrl()
}
export default useChangeUrl