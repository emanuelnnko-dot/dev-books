import React from 'react'

function ProductItem({product}) {
    // console.log(product);

    return (
        <>
            <div  className="product-item">
                <div className="image-container">{product.imageUrl ? <img src={product.imageUrl} alt={product.title}/> : <img src="/images/products-images/no-image-available-icon.jpg" alt="No image available"/> }</div>
                <div className="product-content">
                    <p className="product-name">Name: {product.name}</p>
                    <p>Author: {product.author}</p>
                    <p>Price: $ {product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
                {/* <button onClick={clicked}>Remove Product</button> */}
            </div>
        </>
    )
}

export default ProductItem