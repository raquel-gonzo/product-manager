// display the list of products.

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from "../components/ProductList";

export default () => {
    const [prod, setProd] = useState([]);

    //use useEffect and axios to make an api call:
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => setProd(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <>
        <Form />
        <ProductList prod={prod}/>
        </>
    )
}