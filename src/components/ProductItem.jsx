import React from 'react'

function ProductItem({product}) {
    console.log(product);

    return (
        <>
            <div  className="product-item">
                <div>{product.imageUrl ? <img src={product.imageUrl} alt={product.title}/> : <img src="public/images/products-images/no-image-available-icon.jpg" alt="No image available"/> }</div>
                <p>Author: {product.author}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
        </>
    )
}

export default ProductItem