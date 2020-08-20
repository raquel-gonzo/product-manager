import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

    const ProductList = props => {
        const [products, setProducts] = useState([]);
        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
            axios.get('http://localhost:8000/api/products')
                .then(res => {
                    setProducts(res.data);
                    setLoaded(true);
                });
        })

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
        return(
            <div>
                {loaded && props.products.map((product, index) => {
                    return <p key={index}>
                        <Link to={"/" + product._id}>{product.title}</Link>
                        <br/>
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                        </p>
                })}
            </div>  
        )}

        export default ProductList;