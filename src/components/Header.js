import React, {useState} from 'react';
import mainLogo from '../assets/mainLogo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faGift, faStar} from "@fortawesome/free-regular-svg-icons";


function Header () {

    const [hide, setHide] = useState(true);
    

    return (
        <header>
            <div className='mallSignature'>
                <img src={mainLogo} className='mallLogo'></img>
                <h1 className='mallName'>COZ Shopping</h1>
            </div>
            <div className='menuBar'  onClick={() => {setHide(!hide)}}>
                <FontAwesomeIcon icon={faBars} size="2x"/>
            </div>
            <div className={`menu ${!hide ? '' : 'hide'}`}>
                <p>OOO님, 안녕하세요</p>
                <hr />
                {/* <FontAwesomeIcon icon={faGift} /> */}
                <p>상품리스트 페이지</p>
                <hr />
                {/* <FontAwesomeIcon icon={faStar} /> */}
                <p>북마크 페이지</p>
            </div>
        </header>
    )
}

export default Header;