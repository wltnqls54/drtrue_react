import React, { useCallback } from "react";
import { useUserDispatch, useUserState } from "./UserContext";
import useInput from './useInput'
import { Link } from "react-router-dom";

const Login = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pwd, onChangePwd, setPwd] = useInput("");
    
    const { userList } = useUserState();
    const dispatch = useUserDispatch();

    const onReset = useCallback(() => {
      setId("");
      setPwd("");
    }, [setId, setPwd]);
  
    const onLogin = () => {
      if (!id || !pwd) {
        alert("모든 값을 정확하게 입력해주세요");
        return;
      }
  
      dispatch({
        type: "LOGIN",
        userId: id,
      });

      alert("로그인");
      onReset();
    };
    
    return (
        <div className="container">
          <h3>Login해보자</h3>
          <form>
            <div className="container-input">
              <div className="inputitem">
                <label htmlFor="user_id">아이디:</label>
                <div>
                  <input
                    id="user_id"
                    value={id}
                    onChange={onChangeId}
                    placeholder="아이디를 입력해주세요"
                    required
                  />
                  <hr />
                </div>
              </div>
              <div className="inputitem">
                <label htmlFor="user_pwd">비밀번호:</label>
                <div>
                  <input
                    id="user_pwd"
                    value={pwd}
                    onChange={onChangePwd}
                    placeholder="비밀번호를 입력해주세요"
                    required
                  />
                  <hr />
                </div>
              </div>
            </div>
          </form>
          <button type="submit" onClick={onLogin}>로그인</button>
          <Link to="/signup">
            <button type="submit" value="회원가입">회원가입</button>
          </Link>
        </div>
      );
}

export default Login;