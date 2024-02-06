import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./MyAccountLayout.module.css";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

const MyAccountLayout = () => {
  return (
    <>
      <div className="container">
        <div className={style.myAUl}>
          <ul className={style.myALi}>
            <li>Home</li>
            <li>My account</li>
          </ul>
        </div>
        <div className={style.Account1}>
          <div className={style.MyAccount}>
            <h2>MY ACCOUNT</h2>
            <div className={style.CiUser}>
              <button className={style.CiUser1}>
                <CiUser />
                <Link to="/myaccountlayout"> PERSONAL INFORMATION</Link>
              </button>
            </div>
            <div className={style.ioHeart}>
              <button className={style.ioHeart1}>
                <IoIosHeartEmpty />
                <Link to="wishlist"> WISHLIST</Link>
              </button>
            </div>
            <div className={style.BiLog}>
              <button className={style.BiLog1}>
                <BiLogOut />
                <Link to="/auth">LOG OUT</Link>
              </button>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountLayout;
