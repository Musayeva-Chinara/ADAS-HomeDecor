import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import style from "./MyAccountLayout.module.css";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../features/user/userSlice";

const MyAccountLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logined } = useSelector((state) => state.user);

  useEffect(() => {
    !logined && navigate("/auth");
  }, [logined]);

  function handleLogout() {
    dispatch(setLogout());
  }

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
              <button onClick={handleLogout} className={style.BiLog1}>
                <BiLogOut />
                LOG OUT
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
