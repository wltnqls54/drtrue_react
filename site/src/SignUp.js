import React, {useState, useCallback, useEffect} from "react";
import { useUserDispatch } from "./UserContext";
import useInput from "./useInput";
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


const SignUp = ({ history }) => {
    const [id, onChangeId, setId] = useInput("");
    const [pwd, onChangePwd, setPwd] = useInput("");
    const [confirmPwd, onChangeConfirmPwd, setConfirmPwd] = useInput("");
    const [errorMessage, setErrorMessage] = useState({
      idError: "",
      pwdError: "",
      confirmPwdError: "",
    });
    const { idError, pwdError, confirmPwdError } = errorMessage;
    const dispatch = useUserDispatch();

    const inputRegexs = {
      idReg: /^[A-za-z0-9]{5,15}$/g,
      pwdReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
    };
    const validationCheck = useCallback(
      (input, regex) => {
        let isValidate = false;
        if (input === "") {
          isValidate = false;
        } else if (regex.test(input)) {
          isValidate = true;
        } else {
          isValidate = false;
        }
        return isValidate;
      },
      [pwd, id]
    );
  
    const onReset = useCallback(() => {
      setId("");
      setPwd("");
      setConfirmPwd("");
    }, [setId, setPwd, setConfirmPwd]);
    
    /* 아이디 체크 */
    useEffect(() => {
      if (validationCheck(id, inputRegexs.idReg) || id === "") {
        setErrorMessage({
          ...errorMessage,
          idError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          idError: "아이디는 영문 또는 숫자로 5~15자 이여야 합니다.",
        });
      }
    }, [id]);
  
    /* 비밀번호 체크 */
    useEffect(() => {
      if (validationCheck(pwd, inputRegexs.pwdReg) || pwd === "") {
        setErrorMessage({
          ...errorMessage,
          pwdError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          pwdError:
            "비밀번호는 최소 하나의 문자 및 하나의 숫자로 8자 이상이여야 합니다.",
        });
      }
    }, [pwd]);
    
    /* 비밀번호 확인 체크 */
    useEffect(() => {
      if (pwd === confirmPwd || confirmPwd === "") {
        setErrorMessage({
          ...errorMessage,
          confirmPwdError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          confirmPwdError: "비밀번호 확인이 일치하지 않습니다.",
        });
      }
    }, [confirmPwd]);
  
    const onSignUp = () => {
      if (!id || !pwd || !confirmPwd) {
        alert("모든 값을 정확하게 입력해주세요");
        return;
      }
  
      if (idError) {
        alert("아이디가 형식에 맞지 않습니다");
        return;
      } else if (pwdError) {
        alert("비밀번호가 형식에 맞지 않습니다");
        return;
      } else if (confirmPwdError) {
        alert("비밀번호 확인이 일치하지 않습니다.");
        return;
      }

      dispatch({
          type: "CREATE_USER",
          user: {
              id,
              pwd,
          },
      });
  
      alert("회원 가입 완료");
      history.push("/");
      onReset();
    };
  
    return (
      <Container>
        <Title>회원가입</Title>
        <div className="container-input">
          <div className="inputitem">

            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChangeId}
              required
            />
            {idError ? <errormessage>{idError}</errormessage> : ""}
          </div>
          <div className="inputitem">
           
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pwd}
              onChange={onChangePwd}
              required
            />
            {pwdError ? <errormessage>{pwdError}</errormessage> : ""}
          </div>
          <div className="inputtiem">
           
            <Input
              type="password"
              placeholder="비밀번호 확인을 입력하세요"
              value={confirmPwd}
              onChange={onChangeConfirmPwd}
              required
            />
            {confirmPwdError ? (
              <errormessage>{confirmPwdError}</errormessage>
            ) : (
              ""
            )}
          </div>
        </div>
        <Submitbtn type="submit" onClick={onSignUp}>가입</Submitbtn>
      </Container>
    );
  };
  
  export default SignUp;