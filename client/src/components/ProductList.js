import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
// import { deleteProduct } from '../../../server/controllers/product.controllers';

    const ProductList = props => {

        const {removeFromDom} =props;
        
        const deleteProduct = (productId) =>{   // productId is the argument for the axios delete function. 
            axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
        }
    
        return(
            <div>
                {props.products && props.products.map((product, index) => {
                    return <p key={index}>
                        <Link to={"/" + product._id}>{product.title}</Link>
                        <br/>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </p>
                })}
            </div>
        )}

        export default ProductList;