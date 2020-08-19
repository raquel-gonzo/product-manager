// display the list of products.

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from "../components/ProductList";

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //use useEffect and axios to make an api call:
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return(
        <>
        <Form />
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </>
    )
}