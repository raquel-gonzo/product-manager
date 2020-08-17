import React from 'react';

const ProductList = props => {
    console.log("props.products");
    console.log(props.products);
    console.log(props.products.products);
    return(
        <div>
            {props.products && props.products.map((products, index) => {
                return <p key={index}>
                    {products.title}, 
                    {products.price}, 
                    {products.description}
                    </p>
            })}
        </div>
    )
}
export default ProductList;