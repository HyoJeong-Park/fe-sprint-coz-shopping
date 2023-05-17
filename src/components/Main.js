import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import BookmarkList from './BookmarkList';

function Main ({isBookmark, setIsBookmark}) {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
        .then(res => res.json())
        .then(res => setProducts(res));
    }, [])
    
    return (
        <main>
            <ProductList products={products} isBookmark={isBookmark} setIsBookmark={setIsBookmark} />
            <BookmarkList products={products} isBookmark={isBookmark} setIsBookmark={setIsBookmark} />
        </main>
    )
}

export default Main;