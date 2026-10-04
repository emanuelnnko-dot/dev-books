import React, { useState } from 'react'
import ProductItem from './ProductItem'

function ProductsListContainer() {
    // const [product, setProduct] = useState({id: "", imageUrl: "", name: "", author: "", price: "", category: ""});

    const [products, setProducts] = useState([
        {
            id: "f5c4aa1c-7810-4088-878e-f6cea9200df8",
            imageUrl: "public/images/products-images/practical-php-and-mysql.jpg",
            name: "Practical PHP and MySQL",
            author: "Jono Bacon",
            price: 96.86,
            category: "PHP"
        },
        {
            id: "0521e538-2bc3-472d-a31d-d10268e1ff6c",
            imageUrl: "public/images/products-images/javascript-the-definitive-guide.png",
            name: "Javascript: The Definitive Guide: Master the World's Most-Used Programming Language",
            author: "David Flanagan",
            price: 71.77,
            category: "JavaScript"
        },
        {
            id: "76356878-e1d2-41ef-b132-95bc0692e7bb",
            imageUrl: "public/images/products-images/eloquent-javascript.png",
            name: "Eloquent Javascript: A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            price: 54.50,
            category: "JavaScript"
        },
        {
            id: "81a6f31c-0041-4375-bb91-1f96f86a5039",
            imageUrl: "public/images/products-images/react-design-patterns-and-best-practices.png",
            name: "React Design Patterns and Best Practices: Design, build, and deploy production-ready web applications by leveraging industry-best practices",
            author: "Carlos Santana Roldán",
            price: 85.05,
            category: "React"
        },
        {
            id: "e57cf660-d19e-4446-bdb7-81669c1b7a76",
            imageUrl: "public/images/products-images/react-and-react-native.png",
            name: "React and React Native: Build cross-platform JavaScript and TypeScript apps for web and mobile",
            author: "Mikhail Sakhniuk ",
            price: 92.92,
            category: "React"
        },
        {
            id: "fd3b56de-dbce-4b40-8e63-22ee907ce30b",
            imageUrl: "public/images/products-images/html-and-css-design-and-build-websites.png",
            name: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            price: 29.86,
            category: "HTML and CSS"
        },
        {
            id: "74fd67c7-792d-4fa1-9a79-805d42f7d34f",
            imageUrl: "public/images/products-images/learning-python.png",
            name: "Learning Python: Powerful Object-Oriented Programming",
            author: "Mark Lutz ",
            price: 137.86,
            category: "Python"
        },
        {
            id: "8a670afd-a27c-4693-9b9b-d30e124bf57f",
            imageUrl: "public/images/products-images/django-5-by-example.png",
            name: "Django 5 By Example: Build powerful and reliable Python web applications from scratch",
            author: "Antonio Melé",
            price: 75.60,
            category: "Python"
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
                    <label htmlFor="input-image-url">Image: </label> <br />
                    <input type="text" id="input-image-url" name="imageUrl" value={product.imageUrl} onChange={handleInput} placeholder="Enter image link"/> <br />
                    
                    <label htmlFor="input-book-name">Name: </label> <br />
                    <input type="text" id="input-book-name" name="name" value={product.name} onChange={handleInput} placeholder="Enter book name"/> <br />

                    <label htmlFor="input-author-name">Author: </label> <br />
                    <input type="text" id="input-author-name" name="author" value={product.author} onChange={handleInput} placeholder="Enter author name"/> <br />
                    
                    <label htmlFor="input-book-price">Price: </label> <br />
                    <input type="text" id="input-book-price" name="price" value={product.price} onChange={handleInput} placeholder="Enter book price"/> <br />
                    
                    <label htmlFor="input-book-category">Category: </label> <br />
                    <input type="text" id="input-book-category" name="category" value={product.category} onChange={handleInput} placeholder="Enter book category"/> <br />

                    <button type="submit">Add new book</button>
                </form>
                

            </main>
        </>
    )
}

export default ProductsListContainer

// ***********************************************
// code for generating UUID
// for (let i = 0; i < 10; i++) {
//     let UUID_No = crypto.randomUUID();
//     console.log(UUID_No);
// }

//  List of unused UUID:

//  
//  
//  
//  
//  
//  c8d68569-2a89-488b-8952-178f73bb4e67
//  c2576d53-e5c5-46e4-b6b5-8743ec59db64
//  e3668336-0df2-48c8-bb92-bee0159f4e4a
//  823441b5-fe5b-4568-a1c8-632a7663a901
//  7a323fdd-ae3e-4937-bac3-13ba9e0ba2d2
//  d26d0e49-d084-45bc-848c-7a064cb0e01d
//  452ed280-d9fe-4bd8-b09f-2b52fb19f27d
//  588b40e7-cadf-4ffd-8b1f-9358ba6fc9f6
//  e8ea78b0-b3a8-4ee4-8278-41b8a8e07a78
//  f7376ad9-7f64-41ce-a509-2a7970b9fbb6
//  d777218f-8f91-4073-a5a0-dfe9409c78d5
//  362cba91-7f3c-4dc7-a5ce-926eace702fd