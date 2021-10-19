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
      <Link to="/" >
        <h2>Dr.true react</h2>
      </Link>
      {user ? (
        <nav>
          <li>{user.userId}님</li>
          <li>
            <Link to="/page">
              <input type="submit" value="api 페이지" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <input type="submit" value="로그아웃" onClick={onLogOut} />
            </Link>
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