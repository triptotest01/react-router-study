import React from "react";
import {useParams}from 'react-router-dom';

const data= {
  messi:{
    name: 'Messi',
    description: 'best footballer, born in Argentina'
  },
  gaga:{
    name: 'Laday Gaga',
    description: 'famouse american singer'
  }
};

const Profile = () => {
  
 const params = useParams();
  console.log(params); // {username: 'gaga'}

 const profile= data[params.username];
  console.log(profile); // {name: 'Laday Gaga', description: 'famouse american singer'}

  return(
    <div>
      <h1>User profile</h1>

 테스트: http://localhost:3000/profiles/abcd 
 {/* abcd 는 없는 파라미터로 undefined 로 profiles 데이터를 찾아올수없고  false 값을 삼항연산자에서 반환 */}
      {profile?(
            <div>   
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>  
        ) : (
            <p>존재하지 않는 프로필입니다.</p>
        )
      }
    </div>
  );
};

export default Profile;
