import React,{useState} from 'react';
import styled from 'styled-components';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function ProductList ({products}) {
    const List = styled.ul`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    `;

    const [isBookmark, setIsBookmark] = useState(false);

    const BookmarkChange = (index) => {
        // 클릭한 것만 체크되게
        // 인덱스 별로 상태 관리?
        // setIsBookmark(!isBookmark);
        // console.log(products[index]);
        console.log(index);
    }

    console.log(isBookmark)
    console.log(products)
    

    return (
        <section>
            <h1 className='listName'>상품 리스트</h1>
            <List>
                {products.map((el, index) => 
                    <li key={el.id} className='productCnt'>
                        <img className='productImg' src={el.image_url !== null ? el.image_url : imgReady} alt="상품사진" />
                        <FontAwesomeIcon icon={faStar} size='2x' className={`productBM ${isBookmark ? 'productBMCheck' : ''}`} onClick={() => BookmarkChange(index)}/>
                        <div className='productDetail'>
                            <h4 className='productTitle'>{el.title !== null ? (el.type === 'Category' ? '# '+el.title : el.title) : el.brand_name}</h4>
                            <span className={`productRate ${el.discountPercentage !== null ? 'blueHighlgiht' : ''}`}>{el.discountPercentage !== null ? el.discountPercentage+'%': (el.follower !== null ? '관심고객수' : '')}</span>
                            <p className='productSubTitle'>{el.sub_title !== null ? el.sub_title : ''}</p>
                            <span className='productAmount'>{el.price !== null ? el.price+'원' : el.follower}</span>
                        </div>
                    </li>
                )}
            </List>
        </section>
    )
}

export default ProductList;