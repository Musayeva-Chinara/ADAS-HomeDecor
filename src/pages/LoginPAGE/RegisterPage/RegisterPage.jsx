import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import style from "./RegisterPage.module.css";
import { GoArrowLeft } from "react-icons/go";
import useUserFetch from "../../../features/fetch/userFetch";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { getUserData, checkRegister } = useUserFetch({});
  const { logined } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prew) => ({
      ...prew,
      [name]: value,
    }));
  }

  useEffect(() => {
    logined && navigate("/myaccountlayout");
  }, [logined]);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password == formData.repeatPassword) {
      const userData = {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        wishlist: [],
        cart: [],
      };

      checkRegister(userData);
    }
  }

  return (
    <div className="container">
      <Link to="/">
        <div className={style.Registerpage}>
          <div className={style.registerpage_button}>
            <button className={style.registerpage_button1}>
              <GoArrowLeft />
            </button>
          </div>
          <div className={style.RegisterP}>
            <p>Home</p>
          </div>
        </div>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)} className={style.RegisterPage}>
        <div className={style.Register_h2}>
          <h2>REGISTER</h2>
        </div>
        <div className={style.RegisterForm}>
          <input
            onChange={(e) => handleChange(e)}
            name="fullname"
            className={style.ReactPageform1}
            placeholder="NAME, SURNAME"
            required
          />
          <input
            onChange={(e) => handleChange(e)}
            name="email"
            className={style.ReactPageform1}
            placeholder="E-MAIL ADRESS"
            required
          />
          <input
            onChange={(e) => handleChange(e)}
            name="password"
            className={style.ReactPageform1}
            placeholder="PASSWORD"
            required
          />
          <input
            onChange={(e) => handleChange(e)}
            name="repeatPassword"
            className={style.ReactPageform1}
            placeholder="REPEAT PASSWORD"
            required
          />
        </div>
        <button className={style.register_button}>Login</button>
        <div className={style.RegisterA}>
          <div className={style.RegisterA1}>
            <p>Already have an account?</p>
          </div>
          <Link to="/auth" className={style.log_in}>
            Log in
          </Link>
        </div>
      </form>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RegisterPage;
