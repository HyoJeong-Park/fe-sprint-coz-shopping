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

  // 배열에 0번~99번 전부 false 로 채운 상태
  const [isBookmark, setIsBookmark] = useState(Array(100).fill(false));
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main  isBookmark={isBookmark} setIsBookmark={setIsBookmark}/>}></Route>
        <Route path='/product/list' element={<ProductPage />}></Route>
        <Route path='/bookmark' element={<BookmarkPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

