import React, { useCallback } from "react";
import { useUserDispatch, useUserState } from "./UserContext";
import useInput from './useInput'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 50px 5px 50px;
`;

const Title = styled.h2`
  color: #4d2600;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Submitbtn = styled.button`
  font-size: 15px;
  font-weight: 800;
  display: block;
  width: 100%;
  height: 40px;
  cursor: pointer;
  text-align: center;
  border: none;
  background-color: #fcf5e9;
  color: #4d2600;
`;

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

      var usernumber = 0;
      for(var i=0; i<userList.length; i++) {
        if(userList[i].id == id)
          usernumber = i;
      }

      if (usernumber == 0) {
        alert("회원가입을 해주세요");
        return;
      }
      if (userList[usernumber].pwd != pwd) {
        alert("비밀번호가 다릅니다");
        return;
      }

      dispatch({
        type: "LOGIN",
        userId: id,
      });
    
      alert("로그인");
      onReset();

      console.log(userList);
    };
    
    return (
        <Container>
          <Title>Login</Title>
          <form>
            <div className="container-input">
              <div className="inputitem">
                <label htmlFor="user_id"></label>
                <div>
                  <Input
                    id="user_id"
                    value={id}
                    onChange={onChangeId}
                    placeholder="아이디를 입력해주세요"
                    required
                  />
                </div>
              </div>
              <div className="inputitem">
                <label htmlFor="user_pwd"></label>
                <div>
                  <Input
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
          <Submitbtn type="submit" onClick={onLogin}>로그인</Submitbtn>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Submitbtn type="submit" value="회원가입">회원가입</Submitbtn>
          </Link>
        </Container>
    );
}

export default Login;