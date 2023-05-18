import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import BookmarkPage from './components/BookmarkPage';

function App() {

  // 여기다가 상품 데이터 상태 관리해야함
  // 로컬에 넣고 상태 관리하기
  // 북마크 상태가 true가 된 상품은 로컬 배열에 넣기
  // id별 상태관리?

  // 북마크 클릭을 하면 로컬에 상품 객체를 넣고
  // 로컬에 있는 상품 중에, 클릭한 상품의 아이디가 없으면 
  // 로컬에 넣어준다.


  // 로컬 스토리지에서 데이터를 가져와 isBookmark 상태를 초기화
  const bookmarkStorage = JSON.parse(localStorage.getItem('bookmark'))
  const initialBookmark = bookmarkStorage || [];
  const [isBookmark, setIsBookmark] = useState(initialBookmark);
  const [isModalOn, setIsModalOn] = useState(Array(100).fill(false));

  console.log(isBookmark)

  const updatedBookmark = [...isBookmark];
  localStorage.setItem('bookmark', JSON.stringify(updatedBookmark));
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main  isBookmark={isBookmark} setIsBookmark={setIsBookmark} isModalOn={isModalOn} setIsModalOn={setIsModalOn} />}></Route>
        <Route path='/product/list' element={<ProductPage isBookmark={isBookmark} setIsBookmark={setIsBookmark} />}></Route>
        <Route path='/bookmark' element={<BookmarkPage isBookmark={isBookmark} setIsBookmark={setIsBookmark} />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

