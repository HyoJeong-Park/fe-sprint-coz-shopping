import React from 'react';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

function BookmarkList ({products, isBookmark,  setIsBookmark}) {

    const changeBookmarkState = (index) => {
        setIsBookmark(isBookmark => {
            const newIsBookmark = [...isBookmark];
            newIsBookmark[index] = !newIsBookmark[index];
            return newIsBookmark;
          });
    };

    return(
        <section>
            <h1 className='listName'>북마크 리스트</h1>
            <ul className='list'>
            {products.map((el) => 
                <li key={el.id} className='productCnt'>
                    <img className='productImg' src={el.image_url !== null ? el.image_url : imgReady} alt="상품사진" />
                    <FontAwesomeIcon icon={faStar} size='2x' className={`productBM ${isBookmark[el.id] ? 'productBMCheck' : ''}`} onClick={() => changeBookmarkState(el.id)}/>
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

export default BookmarkList;