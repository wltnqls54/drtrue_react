import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useUserState, useUserDispatch } from './UserContext';
import styled from "styled-components";

const LogoTitle = styled.div`
  text-align: center;
`;

const Headerul = styled.ul`
`;

const Mainnav = styled.nav`
`;

const Mainli = styled.li`
  display: inline-block;
  font-size: 15px;
  padding: 10px;
  font-weight: 500;
`;

const Submitinput = styled.input`
  font-size: 15px;
  font-weight: 800;
  display: block;
  width: 100%;
  height: 40px;
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 3px;
  background-color: #fcf5e9;
  color: #4d2600;
`;

const Header = ({ location }) => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();
    
  const onLogOut = () => {
    alert("로그아웃 되었습니다.");
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <Headerul>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <LogoTitle><img src="https://drtrue.kr/web/upload/logo/footer_logo.png" style={{height: 'auto'},{width: '150px'}}/></LogoTitle>
      </Link>
      {user ? (
        <Mainnav>
          <Mainli>{user.userId}님</Mainli>
          <Mainli>
            <Link to="/page" style={{ textDecoration: 'none' }}>
              <Submitinput type="submit" value="api 페이지" />
            </Link>
          </Mainli>
          <Mainli>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Submitinput type="submit" value="로그아웃" onClick={onLogOut} />
            </Link>
          </Mainli>
        </Mainnav>
      ) : location.pathname === "/signup" ? (
        <Mainnav>
          <Mainli>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Submitinput type="submit" value="로그인" />
            </Link>           
          </Mainli>
        </Mainnav>
      ) : (
        <Mainnav>
          <Mainli>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Submitinput type="submit" value="회원가입" />
            </Link>
          </Mainli>
        </Mainnav>
      )}
    </Headerul>
  );
};
   
export default withRouter(Header);