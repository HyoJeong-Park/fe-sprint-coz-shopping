import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';

function Main () {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
        .then(res => res.json())
        .then(res => setProducts(res));
    }, [])
    
    return (
        <main>
            <ProductList products={products}/>
        </main>
    )
}

export default Main;