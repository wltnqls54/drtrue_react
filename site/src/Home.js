import React from "react";
import { useUserState } from "./UserContext";

const Home = () => {
    const { user } = useUserState();
  
    return (
      <div>
        <p>{user.userId}님 환영합니다.</p>
      </div>
    );
  };
  
export default Home;