import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useUserState, useUserDispatch } from './UserContext';

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
    <ul>
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>헤더1</li>
      </Link>
      {user ? (
        <nav>
          <li>{user.userId}님</li>
          <li>
            <Link to="/mypage">
              <input type="submit" value="마이 페이지" />
            </Link>
          </li>
          <li>
            <input type="submit" value="로그아웃" onClick={onLogOut} />
          </li>
        </nav>
      ) : location.pathname === "/signup" ? (
        <nav>
          <li>
            <Link to="/">
              <input type="submit" value="로그인" />
            </Link>
            
          </li>
        </nav>
      ) : (
        <nav>
          <li>
            <Link to="/signup">
              <input type="submit" value="회원가입" />
            </Link>
          </li>
        </nav>
      )}
    </ul>
  );
};
   
export default withRouter(Header);