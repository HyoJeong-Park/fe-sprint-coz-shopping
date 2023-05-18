import {useState, useEffect} from 'react';
import Filter from './Filter'
import { json } from 'react-router-dom';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"


function BookmarkPage ({isBookmark, setIsBookmark}) {

    const productId = isBookmark.map((el) => el.id)

    const changeBookmarkState = (item) => {
        if(!productId.includes(item.id)){
            let newIsBookmark = [item, ... isBookmark];
            setIsBookmark(newIsBookmark);
            localStorage.setItem("bookmark", JSON.stringify(newIsBookmark));

        }else{
            let updatedBookmark = [...isBookmark];
            let itemIndex = productId.indexOf(productId.filter((el) => el===item.id)[0]);
            updatedBookmark.splice(itemIndex, 1);
            setIsBookmark(updatedBookmark);
            localStorage.setItem('bookmark', JSON.stringify(updatedBookmark));
        }
    };

    return (
        <section>
            <Filter />
            <ul className='productsList'>
                {isBookmark.map((el) =>       
                    <li key={el.id} className='item'>
                        <img className='productImg' src={el.image_url !== null ? el.image_url : imgReady} alt="상품사진" />
                        <FontAwesomeIcon icon={faStar} size='2x' className={`productBM ${productId.includes(el.id) ? 'productBMCheck' : ''}`} onClick={() => changeBookmarkState(el)}/>
                        <div className='productDetail'>
                            <h4 className='productTitle'>{el.title !== null ? (el.type === 'Category' ? '# '+el.title : el.title) : el.brand_name}</h4>
                            <span className={`productRate ${el.discountPercentage !== null ? 'blueHighlgiht' : ''}`}>{el.discountPercentage !== null ? el.discountPercentage+'%': (el.follower !== null ? '관심고객수' : '')}</span>
                            <p className='productSubTitle'>{el.sub_title !== null ? el.sub_title : ''}</p>
                            <span className='productAmount'>{el.price !== null ? el.price+'원' : el.follower}</span>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default BookmarkPage;