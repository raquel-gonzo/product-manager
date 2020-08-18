import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UpdateProd = props => {
    const {id} = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http:localhost:8000/api/' + id, {
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
                    <label></label>
                    <input type="text" 
                    name="title"
                    value={title}
                    onChange={(e)=> {setTitle(e.target.value)}}/>
                </p>

                <p>
                    <label></label>
                    <input type="text" 
                    name="price"
                    value={price}
                    onChange={(e)=> {setPrice(e.target.value)}}/>
                </p>

                <p>
                    <label></label>
                    <input type="text" 
                    name="description"
                    value={description}
                    onChange={(e)=> {setPrice(e.target.value)}}/>
                </p>

                <input type="submit" />

            </form>
        </div>
    )
}