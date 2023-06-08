import { useEffect } from 'react';
import imgReady from '../assets/다운로드.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

function BookmarkList ({isBookmark,  setIsBookmark}) {

    // const changeBookmarkState = (index) => {
    //     setIsBookmark(isBookmark => {
    //         const newIsBookmark = [...isBookmark];
    //         newIsBookmark[index] = !newIsBookmark[index];
    //         return newIsBookmark;
    //       });
    // };

    const productId = isBookmark.map((el) => el.id)
    const bookmarkStorage = JSON.parse(localStorage.getItem('bookmark'))

    const changeBookmarkState = (item) => {

        if(!productId.includes(item.id)){
            let newIsBookmark = [item, ...isBookmark];
            setIsBookmark(newIsBookmark);
            localStorage.setItem("bookmark", JSON.stringify(newIsBookmark));
        }else{
            let updatedBookmark = [...bookmarkStorage];
            let itemIndex = productId.indexOf(productId.filter((el) => el===item.id)[0]);
            updatedBookmark.splice(itemIndex, 1);
            setIsBookmark(updatedBookmark);
        }
    };


    return(
        <section>
            <h1 className='listName'>북마크 리스트</h1>
            <div className='bookmarkRealShow'>
                <ul className='list bookmarkShow'>
                {/* 북마크 상태가 true 인 상품들만 불러오기 */}

                {bookmarkStorage
                .map((el) =>
                    <li key={el.id} className='productCnt bookmarkList'>
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
            </div>
        </section>
    )
}

export default BookmarkList;