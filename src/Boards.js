import React from "react";
import {Link, Outlet} from "react-router-dom";

const Boards = () => {

  return(

    <div>
      <Outlet/>

      <ul>
        <li>
          <Link to ="/boards/1">게시글 제목 1</Link>
        </li>
        <li>
          <Link to ="/boards/2">게시글 제목 2</Link>
        </li>
        <li>
          <Link to ="/boards/3">게시글 제목 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Boards;