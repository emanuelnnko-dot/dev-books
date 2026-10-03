import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsListContainer from '../components/ProductsListContainer'

function HomePage() {

    return (
        <>
            <section id="outer-grid-container">
                <Header />
                <h1>Online Books Store for Web Developers</h1>
                <ProductsListContainer />
                <Footer />
            </section>
        </>
    )
}

export default HomePage