import React from "react";
import "./App.css";

const NotFound = ()=>{
const text1={
  color: "yellow"
}

return(

  <div className="App-header">
    <h1 style={text1}>404</h1>
    <p><strong>Page not found :)</strong></p>
    <p>페이지가 삭제되었거나 주소가 변경 되었을 수 있습니다.</p>
    <p> 메인 홈 페이지는 <a href="http://localhost:3000/">go Home</a>을 클릭하면 다시 방문 가능합니다.</p>


  </div>

)

}

export default NotFound;