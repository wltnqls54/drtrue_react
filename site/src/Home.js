import React from "react";
import { useUserState } from "./UserContext";
import styled from "styled-components";

const Mainp = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

const Home = () => {
    const { user } = useUserState();
  
    return (
      <div>
        <Mainp>{user.userId}님 환영합니다.</Mainp>
      </div>
    );
  };
  
export default Home;