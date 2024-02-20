import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import style from "./LoginPage.module.css";
import useUserFetch from "../../../features/fetch/userFetch";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const { getUserData } = useUserFetch({});
  const { logined } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    logined && navigate("/myaccountlayout");
  }, [logined]);

  function handleLogin(e) {
    e.preventDefault();
    getUserData(email, password);
  }

  return (
    <div className="container">
      <Link to="/">
        <div className={style.loginIcons}>
          <div className={style.goArrIcon}>
            <button className={style.icon_button}>
              <GoArrowLeft />
            </button>
          </div>
          <div className={style.loginP}>
            <p>Home</p>
          </div>
        </div>
      </Link>
      <div className={style.Login}>
        <div className={style.Login_title}>
          <h2>Log In</h2>
        </div>
        <form onSubmit={(e) => handleLogin(e)} className={style.loginPageform}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={style.loginPageform1}
            placeholder="E-MAIL ADRESS"
            type="email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={style.loginPageform1}
            placeholder="PASSWORD"
            type="password"
            required
          />
          <div className={style.resetP}>
            <Link to="/ResetPasswordPage">Forgot password?</Link>
          </div>
          <div>
            <button className={style.page_button}>LOG IN</button>
          </div>
        </form>
        <div className={style.LoGIn}>
          <div className={style.LPage}>
            <p>Don’t have an account?</p>
            <Link to="/RegisterPage" className={style.register3}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
