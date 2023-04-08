import React from "react"
import { useParams } from "react-router-dom";

const Board = () =>{

  // 비구조화 할당방식 
   // {id: '2'}
  const {id} = useParams()
  console.log({id});

  return(
    <h2> 게시글 내용 {id} 입니다.</h2>
  )
}

export default Board;