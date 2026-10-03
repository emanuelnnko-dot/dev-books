import React from 'react'

function ProductItem(product) {

    return (
        <>
            <div key={product.id} className="product-item">
                <img src={product.imageUrl} alt={product.title} />
                <p>Author: {product.author}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
        </>
    )
}

export default ProductItem