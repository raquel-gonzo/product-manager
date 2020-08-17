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
                console.log("res.data");
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <>
        <Form />
        <hr/>
        {loaded && <ProductList products={products}/>}
        </>
    )
}