import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/LoginModal.css";
import { EmailValidation } from "../utils/validation";
import { handleLogin, handleLoginSuccess } from "../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function LoginModal({ setShowLoginModal, setShowSignUpModal }) {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginState;
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.usersReducer);

  const onChangeLoginState = (e) => {
    const { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value }); //로그인 정보 state 업데이트

    //email 유효성 검사 후 에러 메세지 설정
    if (name === "email") {
      if (value !== "" && EmailValidation(value)) {
        setEmailErrorMessage("");
      } else if (value === "") {
        setEmailErrorMessage("이메일을 입력하세요");
      } else {
        setEmailErrorMessage("이메일 형식이 올바르지 않습니다.");
      }
    } // password 유효성 검사 후 에러 메세지 설정
    else {
      if (value === "") {
        setPasswordErrorMessage("비밀번호를 입력하세요");
      } else {
        setPasswordErrorMessage("");
      }
    }
  };

  const onClickLogin = (e) => {
    e.preventDefault();

    const getToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        return `Bearer ${token}`;
      } else {
        return null;
      }
    };

    if (!(email !== "" && password !== "")) {
      setEmailErrorMessage("이메일을 입력하세요");
      setPasswordErrorMessage("비밀번호를 입력하세요");
    } else if (!EmailValidation(email)) {
      setEmailErrorMessage("이메일 형식이 올바르지 않습니다.");
    } else {
      // 유효성 검사 통과 후 로그인 요청
      axios
        .post("http://localhost:4000/auth/login", loginState, {
          headers: {
            Authorization: getToken(),
          },
        })
        .then((response) => {
          console.log("response", response.data);
          const accessToken = getToken(); //Local Storage에 저장된 토큰 accessToken에 할당
          dispatch(handleLogin(accessToken)); //store state에 accessToken 저장
          isAuthenticated();
        })
        .catch((error) => {
          console.log("error", error.response);
          setEmailErrorMessage("아이디 또는 비밀번호가 잘못 입력 되었습니다");
          setPasswordErrorMessage("아이디와 비밀번호를 정확히 입력해 주세요");
        });
    }

    // 인증 성공 후, 사용자 정보를 호출. 성공하면 로그인 여부 state 업데이트
    const isAuthenticated = () => {
      axios
        .get("http://localhost:4000/users", {
          headers: {
            Authorization: localStorage.getItem(state.accessToken),
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          dispatch(handleLoginSuccess(res.data.data));
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 401) {
            setEmailErrorMessage("아이디 또는 비밀번호가 잘못 입력 되었습니다");
            setPasswordErrorMessage("아이디와 비밀번호를 정확히 입력해 주세요");
          }

          console.log(res);
          console.log("로그인을 완료했습니다");
          setShowLoginModal();
        });
    };
  };

  return (
    <div className="page">
      <div className="modalback">
        <div className="modalview">
          <div
            className="headarea"
            onClick={() => {
              setShowLoginModal(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} size="1x" spin={false} />
          </div>
          <div className="headarea">LOGIN</div>
          <form onSubmit={onClickLogin}>
            <div className="area emailarea">
              <div>
                Email
                <span>{emailErrorMessage}</span>
              </div>
              <input
                type="text"
                placeholder="example@example.com"
                onChange={onChangeLoginState}
                name="email"
                required
                value={loginState.email}
              />
            </div>
            <div className="area passwordarea">
              <div>
                Password<span>{passwordErrorMessage}</span>
              </div>
              <input
                type="password"
                placeholder="password"
                onChange={onChangeLoginState}
                name="password"
                required
                value={loginState.password}
              />
            </div>
            <button type="submit" className="loginbutton">
              LOGIN
            </button>
          </form>
          <button className="socialloginBtn">
            <img
              className="logo"
              width="20px"
              height="20px"
              src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH_400x400.jpg"
              alt="google"
            ></img>
            <div>Sign in with Google</div>
          </button>
          <div className="checksignup">
            <Link to="/">
              <span
                className="pathsignup"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignUpModal(true);
                }}
              >
                Don't have an account? Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
