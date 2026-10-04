import React, { useState } from 'react'
import ProductItem from './ProductItem'

function ProductsListContainer() {
    // const [product, setProduct] = useState({id: "", imageUrl: "", name: "", author: "", price: "", category: ""});

    const [products, setProducts] = useState([
        {
            id: 1,
            imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
            name: "Practical PHP and MySQL",
            author: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        },
        {
            id: 2,
            imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
            name: "Practical PHP and MySQL",
            author: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        },
        {
            id: 3,
            imageUrl: "",
            name: "Practical PHP and MySQL",
            author: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        }

    ]);

    const addNewProduct = (event) => {
        event.preventDefault();
        console.log({...product});
        // products.push({...product});
        setProducts([...products, {...product}]);
        console.log({...products});
    }

    const [product, setProduct] = useState({id: "", imageUrl: "", name: "", author: "", price: "", category: ""});
    const handleInput = (event) => {
        setProduct({...product, id: crypto.randomUUID(), [event.target.name]: event.target.value});
        console.log({...product});
    }

    // const products = [
    //     {
    //         id: 1,
    //         imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
    //         name: "Practical PHP and MySQL",
    //         author: "Jono Bacon",
    //         price: 96.86,
    //         category: "PHP"
    //     },
    //     {
    //         id: 2,
    //         imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
    //         name: "Practical PHP and MySQL",
    //         author: "Jono Bacon",
    //         price: 96.86,
    //         category: "PHP"
    //     },
    //     {
    //         id: 3,
    //         imageUrl: "",
    //         name: "Practical PHP and MySQL",
    //         author: "Jono Bacon",
    //         price: 96.86,
    //         category: "PHP"
    //     }

    // ];

    

    return (
        <>
            <main id="products-list">
                <h3>List of Available books</h3>

                {/* {console.log(...products)} */}
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}

                <form onSubmit={addNewProduct}>
                    <h3>Add new book to the list</h3>
                    <label for="input-image-url">Image: </label> <br />
                    <input type="text" id="input-image-url" name="imageUrl" value={product.imageUrl} onChange={handleInput} placeholder="Enter image link"/> <br />
                    
                    <label for="input-book-name">Name: </label> <br />
                    <input type="text" id="input-book-name" name="name" value={product.name} onChange={handleInput} placeholder="Enter book name"/> <br />

                    <label for="input-author-name">Author: </label> <br />
                    <input type="text" id="input-author-name" name="author" value={product.author} onChange={handleInput} placeholder="Enter author name"/> <br />
                    
                    <label for="input-book-price">Price: </label> <br />
                    <input type="text" id="input-book-price" name="price" value={product.price} onChange={handleInput} placeholder="Enter book price"/> <br />
                    
                    <label for="input-book-category">Category: </label> <br />
                    <input type="text" id="input-book-category" name="category" value={product.category} onChange={handleInput} placeholder="Enter book category"/> <br />

                    <button type="submit">Add new book</button>
                </form>
                

            </main>
        </>
    )
}

export default ProductsListContainer