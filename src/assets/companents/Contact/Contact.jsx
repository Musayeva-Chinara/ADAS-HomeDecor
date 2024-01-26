import React from "react";
import style from "./Contact.module.css";
import contactImg from "../../img/Rectangle 145.png";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <h2 className={style.conth2}>CONTACT</h2>
        <div className={style.contact}>
          <form action="" className={style.contact1}>
            <input type="text" placeholder="NAME, SURNAME" />
            <input type="text" placeholder="E-MAIL ADRESS" />
            <input type="text" placeholder="THEME" />
            <textarea placeholder="YOUR MESSAGE"></textarea>
            <button className={style.login}>LOGIN</button>
          </form>
          <div className={style.contactImg}>
            <img src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
