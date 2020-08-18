import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const UpdateProd = props => {
    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
        .then(res => console.log(res));
    }
    return (
        <div>
            <h2>Update a Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input type="text" 
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}/>
                </p>

                <p>
                    <label>Price: </label>
                    <input type="text" 
                    name="price"
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}/>
                </p>

                <p>
                    <label>Description: </label>
                    <input type="text" 
                    name="description"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}/>
                </p>

                <input type="submit" />
                <br/>
                <Link to="/">Back</Link>
            </form>
        </div>
    )
}

export default UpdateProd;