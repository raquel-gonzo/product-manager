import React,{useEffect, useState} from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Detail = props => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProduct({...res.data.product});
            })
    }, [props.id])
        
    const deleteProduct = (productId) =>{   // productId is the argument for the axios delete function. 
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/">Back</Link>
            <br/>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
            <br/>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
export default Detail;