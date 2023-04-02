import React from "react";
import About from "./About";
import Home from "./Home";
import {Route, Routes, Link} from "react-router-dom";
import Profile from "./Profile";

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
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
