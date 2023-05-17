import React, {useState} from 'react';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal'

function Product ({products}) {

    // const [isBookmark, setIsBookmark] = useState([false, false, false, false]);
    // const [isModal, setIsModal] = useState(false);

    // const BookmarkChange = (index) => {
    //     const newIsBookmark = [... isBookmark];
    //     newIsBookmark[index] = !isBookmark[index];
    //     setIsBookmark(newIsBookmark);
    // }

    // const ModalOnOff = () => {
    //     setIsModal(!isModal);
    // }
    // // {`${isModal ? 'productModal' : 'hide'}`}
    return (
        <>
            {/* {products.map((el, index) => 
                <li key={el.id} className='productCnt' onClick={ModalOnOff}>
                    <img className='productImg' src={el.image_url !== null ? el.image_url : imgReady} alt="상품사진" />
                    <FontAwesomeIcon icon={faStar} size='2x' className={`productBM ${isBookmark[index] ? 'productBMCheck' : ''}`} onClick={() => BookmarkChange(index)}/>
                    <div className='productDetail'>
                        <h4 className='productTitle'>{el.title !== null ? (el.type === 'Category' ? '# '+el.title : el.title) : el.brand_name}</h4>
                        <span className={`productRate ${el.discountPercentage !== null ? 'blueHighlgiht' : ''}`}>{el.discountPercentage !== null ? el.discountPercentage+'%': (el.follower !== null ? '관심고객수' : '')}</span>
                        <p className='productSubTitle'>{el.sub_title !== null ? el.sub_title : ''}</p>
                        <span className='productAmount'>{el.price !== null ? el.price+'원' : el.follower}</span>
                    </div>
                </li>
            )}
            {products.map((el, index) => 
                <div className= 'productModal'>
                    <div className='productModalCnt'>
                        안녕하세용? 모달입니당?
                    </div>
                </div>
            )} */}
        </>
    )
}

export default Product;