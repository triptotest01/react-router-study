import React from "react";
import About from "./About";
import Home from "./Home";
import {Route, Routes, Link} from "react-router-dom";
import Profile from "./Profile";
import Boards from "./Boards";
import Board from "./Board";
import Layout from "./Layout";
import NotFound from "./NotFound";

const App =() => {
  return (
    <div>
      {/* 2. a태그와 Link 비교: 새로고침유무 (리액트의 Link 방식은 전체페이지가 새로고침되지 않고 필요한 부분만 렌더링) */}
      <a href="/about">이동</a>
    <hr/>
      <ul>
        <li><Link to="/">메인홈</Link></li>
        <li><Link to="/about">사이트소개</Link></li>      
      </ul>
      
    <hr/>
      {/* 1. <Rountes> 를 활용하여 url 경로와 렌더링해줄 컴포넌트를 연결한다.  */}
      <Routes>

        <Route element={<Layout/>}> 
          {/* <Route path="/" element={<Home/>}/> */}
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile/>}/>
        </Route>  
 
        {/* 게시글방법 1 - 게시글 목록(Boards)과 게시글 상세내용(Board) 분리 */}
        {/* <Route path="/boards" element={<Boards/>}/>
        <Route path="/boards/:id" element={<Board/>}/> */}

        {/* 게시글 방법2. - 게시글 상세내용이라는 하위 컴포넌트진입시, 게시글목록 상위컴포넌트가 보여지게함 */}
        <Route path="/boards" element={<Boards/>}>
          <Route path=":id" element={<Board/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
