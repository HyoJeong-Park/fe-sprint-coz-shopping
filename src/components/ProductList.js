import React, {useEffect, useState} from 'react';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Product from './Product'
import { json } from 'react-router-dom';

function ProductList ({products, isBookmark,  setIsBookmark, isModalOn, setIsModalOn}) {

    // 이 상태를 전역으로 빼는 걸 고민해봐야함
    // 이렇게 해놓으면 메인페이지에서 뜨는 거 밖에
    // 컨트롤 못 함
    // 상품의 id랑 상태의 index를 같은 번호로 취급하자.
    const productId = isBookmark.map((el) => el.id)

    const changeBookmarkState = (item) => {
        // setIsBookmark(isBookmark => {
            // const newIsBookmark = [...isBookmark];
            // newIsBookmark[index] = !newIsBookmark[index];

            // localStorage.setItem('bookmark', JSON.stringify(newIsBookmark))
            // console.log(newIsBookmark)
            // return JSON.parse(localStorage.getItem('bookmark'));

            // let newIsBookmark = [...isBookmark];
        //   });  

        if(!productId.includes(item.id)){
            let newIsBookmark = [item, ... isBookmark];
            setIsBookmark(newIsBookmark);
            localStorage.setItem("bookmark", JSON.stringify(newIsBookmark));

        }else{
            // 클릭한 아이템의 id 가 북마크 상태에 있는 상품의 id 와 같으면
            // 해당 id를 가진 객체를 상태에서 빼주세요.
            let updatedBookmark = [...isBookmark];
            let itemIndex = productId.indexOf(productId.filter((el) => el===item.id)[0]);
            updatedBookmark.splice(itemIndex, 1);
            setIsBookmark(updatedBookmark);
            localStorage.setItem('bookmark', JSON.stringify(updatedBookmark));
        }
    };

    
    
    

    const changeModalState = (index) => {
        setIsModalOn(isModalOn => {
            const newIsModalOn = [...isModalOn];
            newIsModalOn[index] = !newIsModalOn[index];
            return newIsModalOn;
          });
    }


    return (
        <section>
            <h1 className='listName'>상품 리스트</h1>
            <ul className='list'>
            {products.map((el) =>     
                <li key={el.id} className='productCnt'>
                    <img className='productImg' src={el.image_url !== null ? el.image_url : imgReady} alt="상품사진" onClick={() => changeModalState(el.id)} />
                    <FontAwesomeIcon icon={faStar} size='2x' className={`productBM ${productId.includes(el.id) ? 'productBMCheck' : ''}`} onClick={()=>changeBookmarkState(el)}/>
                    <div className='productDetail'>
                        <h4 className='productTitle'>{el.title !== null ? (el.type === 'Category' ? '# '+el.title : el.title) : el.brand_name}</h4>
                        <span className={`productRate ${el.discountPercentage !== null ? 'blueHighlgiht' : ''}`}>{el.discountPercentage !== null ? el.discountPercentage+'%': (el.follower !== null ? '관심고객수' : '')}</span>
                        <p className='productSubTitle'>{el.sub_title !== null ? el.sub_title : ''}</p>
                        <span className='productAmount'>{el.price !== null ? el.price+'원' : el.follower}</span>
                    </div>
                </li>
            )}
            {products.map((el) => 
                <div key={el.id} className= {`productModal ${!isModalOn[el.id] ? 'hide' : ''}`} onClick={() => changeModalState(el.id)}>
                    <div className='productModalCnt'>
                        <img src={el.image_url !== null ? el.image_url : imgReady} alt='' className='modalImg'/>
                        <FontAwesomeIcon icon={faStar} size='2x' className={`modalBM ${isBookmark[el.id] ? 'productBMCheck' : ''}`} onClick={() => changeBookmarkState(el.id)}/>
                        <h4 className='modalTitle'>{el.title !== null ? (el.type === 'Category' ? '# '+el.title : el.title) : el.brand_name}</h4>
                    </div>
                </div>
            )}            
            </ul>
        </section>
    )
}

export default ProductList;