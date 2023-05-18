import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import BookmarkList from './BookmarkList';

function Main ({isBookmark, setIsBookmark, isModalOn, setIsModalOn}) {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
        .then(res => res.json())
        .then(res => setProducts(res));
    }, [])
    
    return (
        <main>
            <ProductList products={products} isBookmark={isBookmark} setIsBookmark={setIsBookmark} isModalOn={isModalOn} setIsModalOn={setIsModalOn}/>
            <BookmarkList isBookmark={isBookmark} setIsBookmark={setIsBookmark} isModalOn={isModalOn} setIsModalOn={setIsModalOn}/>
        </main>
    )
}

export default Main;