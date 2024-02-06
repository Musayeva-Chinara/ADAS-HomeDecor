import React from "react";
import style from "./PersonaLInformationPage.module.css";

const PersonaLInformationPage = () => {
  return (
    <div className="container">
      <div className={style.PersonalL}>
        <div className={style.PersonaLInformationPage}>
          <form className={style.form}>
            <input className={style.PersonalI} placeholder="Chinara" />
          </form>
          <form className={style.form}>
            <input className={style.PersonalI} placeholder="Musayeva" />
          </form>
          <form className={style.form}>
            <input
              className={style.PersonalI}
              placeholder="youremailhere@gmail.com"
            />
          </form>
          <form className={style.form}>
            <input className={style.PersonalI} placeholder="....." />
          </form>
          <button className={style.saveButton}>SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
};

export default PersonaLInformationPage;
