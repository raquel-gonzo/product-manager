import React from 'react';
import {Link} from '@reach/router';

const ProductList = props => {

    return(
        <div>
            {props.products && props.products.map((products, index) => {
                return <p key={index}>
                    <Link to={"/" + products._id}>{products.title}</Link>
                    </p>
            })}
        </div>
    )
}
export default ProductList;