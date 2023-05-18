import {useState} from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faGift, faStar} from "@fortawesome/free-regular-svg-icons";



function Header () {

    const [hide, setHide] = useState(true);
    const hideOnOff = () => {
        setHide(!hide);
    };

    return (
        <header>
            <div className='headerWrap'>
                <Link to='/'>
                    <div className='mallSignature'>
                        <img src={mainLogo} className='mallLogo'></img>
                        <h1 className='mallName'>COZ Shopping</h1>
                    </div>
                </Link>
                <div className='menuBar'  onClick={hideOnOff}>
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
                <div className={`menu ${!hide ? '' : 'hide'}`}>
                    <p>OOO님, 안녕하세요</p>
                    <hr />
                    {/* <FontAwesomeIcon icon={faGift} /> */}
                    <Link to='/product/list'>
                        <p className={`menuhover ${!hide ? '' : 'hide'}`} onClick={hideOnOff}>상품리스트 페이지</p>
                    </Link>
                    <hr />
                    {/* <FontAwesomeIcon icon={faStar} /> */}
                    <Link to='/bookmark'>
                        <p className={`menuhover ${!hide ? '' : 'hide'}`} onClick={hideOnOff}>북마크 페이지</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;