import React, {useEffect} from 'react';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Product from './Product'

function ProductList ({products, isBookmark,  setIsBookmark}) {

    // 이 상태를 전역으로 빼는 걸 고민해봐야함
    // 이렇게 해놓으면 메인페이지에서 뜨는 거 밖에
    // 컨트롤 못 함
    // 상품의 id랑 상태의 index를 같은 번호로 취급하자.

    const changeBookmarkState = (index) => {
        setIsBookmark(isBookmark => {
            const newIsBookmark = [...isBookmark];
            newIsBookmark[index] = !newIsBookmark[index];
            return newIsBookmark;
          });
    };

    useEffect(() => {
        console.log(isBookmark);
    }, [isBookmark]);
    



    return (
        <section>
            <h1 className='listName'>상품 리스트</h1>
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
            {/* {products.map((el, index) => 
                <div className= 'productModal hide'>
                    <div className='productModalCnt'>
                        안녕하세용? 모달입니당?
                    </div>
                </div>
            )}             */}
            </ul>
        </section>
    )
}

export default ProductList;