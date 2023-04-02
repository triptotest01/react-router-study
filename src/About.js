// import React from "react";
// import {useLocation} from "react-router-dom";

// const About = ()=>{
 
//   const location = useLocation();

//   return(
//     <div>
//     <h1>About</h1>
//     <p> 이 사이트는 리액트 라우터를 실습해 보는 예제 프로젝트 입니다.</p>
//     <p>쿼리스트링 search: {location.search}</p>
//     <p>쿼리스트링 key: {location.key}</p>
//     <p>쿼리스트링 pathname: {location.pathname}</p>
//     <p>쿼리스트링 state: {location.state}</p>
//     <p>쿼리스트링 hash: {location.hash}</p>
//   </div>
//   )
  
// }

// export default About;



import React from "react";
import { useSearchParams} from 'react-router-dom';

const About = ()=>{

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode =searchParams.get('mode');

 const onToggleDetail =()=>{
  setSearchParams({mode, detail:detail==='true'?false:true });
 }

 const onIncreaseMode =()=>{
  const nextMode = mode===null? 1: parseInt(mode) +1;
  setSearchParams({mode: nextMode, detail});
 }

  return(
    <div>
    <h1>About</h1>
    <p> 이 사이트는 리액트 라우터를 실습해 보는 예제 프로젝트 입니다.</p>
    <p>detail: {detail}</p>
    <p>mode: {mode} </p>
    <button onClick={onToggleDetail}>Toggle detail</button>
    <button onClick={onIncreaseMode}>mode +1</button>
    
  </div>
  )
  
}

export default About;