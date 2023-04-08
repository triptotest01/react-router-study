
// 테스트 url주소: http://localhost:3000/about?detail=true&mode=1


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





// 테스트 url주소: http://localhost:3000/about?detail=true&mode=1

import React from "react";
import { useSearchParams} from 'react-router-dom';

const About = ()=>{

  const [searchParams, setSearchParams] = useSearchParams();

  const detail = searchParams.get('detail');
  console.log(detail)

  const mode =searchParams.get('mode');
  console.log(mode)

 const onToggleDetail =()=>{
  setSearchParams({mode, detail:detail==='true'?false:true });
 }

 const onIncreaseMode =()=>{
 // 테스트 !!!  - 방법 : mode +1 버튼 클릭시 함수코드가 시작!

 console.log(typeof(1)) // number
 console.log(typeof("1")) // string   
 console.log(typeof(1+"1")) // string
 console.log(1+"1") // 11
 console.log(1+1) // 2
 console.log(mode); //1
 console.log(typeof(mode)); // string   

  const nextMode = mode===null? 1: parseInt(mode) +1;
  setSearchParams({mode: nextMode, detail});
 }

  return(
    <div>
    <h1>About</h1>
    <p> 이 사이트는 리액트 라우터를 실습해 보는 예제 프로젝트 입니다.</p>
    <p>detail: {detail}</p>
    <p>mode: {mode} </p>

    <button onClick={onToggleDetail}>Toggle detail</button>&nbsp;&nbsp;
    <button onClick={onIncreaseMode}>mode +1</button>
    
  </div>
  )
  
}

export default About;