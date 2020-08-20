import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
    const {
    initialTitle,
    initialPrice,
    initialDescription,
    onSubmitProp,
    } = props;  // the form can be used with any onSubmit method that takes the title, price and description as an object. 
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
    };

    // const createData = () => {
    // axios.post("http://localhost:8000/api/products/new", {
    //     title: title,
    //     price: price,
    //     description: description,
    //     })
    //     .then((data) => {
    //     console.log(data);
    //     })
    //     .catch((err) => console.log(err));
    // };

    return (
    <form onSubmit={onSubmitHandler} className="form-appearance">
    <label className="form-label">Title</label>
    <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />

    <label className="form-label">Price</label>
    <input
        type="number"
        step=".01"
        // pattern="^\d+(?:\.\d{1,2})?$"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
    />

    <label className="form-label">Description</label>
    <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />

    <button className="form-label" type="submit" onSubmit={onSubmitProp}>
        {props.buttonText}
    </button>
    </form>
);
};

export default Form;
