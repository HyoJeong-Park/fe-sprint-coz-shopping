import React from 'react';
import all from '../assets/전체.png'
import product from '../assets/상품.png'
import category from '../assets/카테고리.png'
import exibition from '../assets/기획전.png'
import brand from '../assets/브랜드.png'

function Filter () {

    return (
        <ul className='filter'>
            <li className='filterList'>
                <img src={all} alt='allProduct' />
                <p>전체</p>
            </li>
            <li className='filterList'>
                <img src={product} alt='product' />
                <p>상품</p>
            </li>
            <li className='filterList'>
                <img src={category} alt='category' />
                <p>카테고리</p>
            </li>
            <li className='filterList'>
                <img src={exibition} alt='exibition' />
                <p>기획전</p>
            </li>
            <li className='filterList'>
                <img src={brand} alt='brand' />
                <p>브랜드</p>
            </li>
        </ul>
    )
}

export default Filter;