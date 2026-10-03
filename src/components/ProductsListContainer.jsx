import React from 'react'
import ProductItem from './ProductItem'

function ProductsListContainer() {
    const products = [
        {
            id: 1,
            imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
            title: "Practical PHP and MySQL",
            autor: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        },
        {
            id: 2,
            imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
            title: "Practical PHP and MySQL",
            autor: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        }

    ];



    return (
        <>
            <main id="products-list">
                <h3>List of Available books</h3>

                {products.map(product => (
                    <ProductItem product={product} />
                ))}
                

            </main>
        </>
    )
}

export default ProductsListContainer