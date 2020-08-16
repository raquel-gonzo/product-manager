import React from 'react';
import axios from 'axios';

export default props => {
    return(
        <div>
            {props.products.map((products, index) => {
                return <p key={index}>
                    {products.title}, 
                    {products.price}, 
                    {products.description}
                    </p>
            })}
        </div>
    )
}