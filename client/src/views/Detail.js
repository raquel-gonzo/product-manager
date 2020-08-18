import React,{useEffect, useState} from 'react'
import {Link} from '@reach/router';
import axios from 'axios';

const Detail = props => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data.product
            }))
    }, [props.id])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/">Back</Link>
            <br/>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}
export default Detail;