import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const createData = () => {
        axios.post("http://localhost:8000/api/products/new", {
            title: title, 
            price: price, 
            description: description
        })
        .then(data=>{
            console.log(data);
        })
        .catch((err) => console.log(err))
    };

    return(
        <form className="form-appearance">
            <label className="form-label">Title</label>
            <input 
            type="text" 
            name="title" 
            onChange={(e) => setTitle(e.target.value)}
            />

            <label className="form-label">Price</label>
            <input 
            type="number" 
            step=".01"
            pattern="^\d+(?:\.\d{1,2})?$"
            name="price" 
            onChange={(e) => setPrice(e.target.value)}
            />

            <label className="form-label">Description</label>
            <input 
            type="text" 
            name="description" 
            onChange={(e) => setDescription(e.target.value)}
            />

            <button 
            className="form-label" 
            type="submit" 
            onClick={createData}>
                Create
            </button>
        </form>
    )
};

export default Form;