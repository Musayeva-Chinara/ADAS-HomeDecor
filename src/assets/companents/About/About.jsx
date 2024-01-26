import React from "react";
import style from "./About.module.css";
import aboutImg from "../../img/aboutImg.png";

const About = () => {
  return (
    <>
      <div className="container">
        <h2 className={style.AboutH2}>ABOUT US</h2>
        <div className={style.about}>
          <div className={style.aboutImg}>
            <a href="">
              <img src={aboutImg} alt="" />
            </a>
          </div>
          <div>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. <br />
              <br /> Temporibus autem quibusdam et aut officiis debitis aut
              rerum necessitatibus saepe eveniet ut et voluptates repudiandae
              sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <button className={style.about_button}>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
