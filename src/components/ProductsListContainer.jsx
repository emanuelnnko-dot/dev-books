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
                    <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInput} placeholder="Enter image link"/> <br /> <br />
                    <input type="text" name="name" value={product.name} onChange={handleInput} placeholder="Enter book name"/> <br /> <br />
                    <input type="text" name="author" value={product.author} onChange={handleInput} placeholder="Enter author name"/> <br /> <br />
                    <input type="text" name="price" value={product.price} onChange={handleInput} placeholder="Enter book price"/> <br /> <br />
                    <input type="text" name="category" value={product.category} onChange={handleInput} placeholder="Enter book category"/> <br /> <br />
                    <button type="submit">Add new book</button>
                </form>
                

            </main>
        </>
    )
}

export default ProductsListContainer