import React from "react";
import style from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className="container">
      <div className={style.checkoutUl}>
        <ul className={style.heckoutLi}>
          <li>Home</li>
          <li>Shopping cart</li>
          <li>Checkout</li>
        </ul>
      </div>
      <div className={style.checkouth2}>
        <h2>CHECKOUT</h2>
      </div>
      <div className={style.CheckoutE}>
        <div className={style.checkoutPersonal}>
          <p>PERSONAL INFORMATION</p>
          <div className={style.checkoutInfo}>
            <div className={style.Checkout}>
              <div className={style.checkoutN1}>
                <div className={style.checkoutInput}>
                  <input className={style.checkoutJ} placeholder="Chinara" />
                  <input
                    className={style.checkoutJ}
                    placeholder="chinarachm.code.edu.az"
                  />
                  <input
                    className={style.checkoutJ}
                    placeholder="CITY, STREET"
                  />
                </div>
              </div>
              <div className={style.Payment}>
                <p className={style.PaymentP}>PAYMENT METHOD</p>
                <div className={style.cartColor}>
                  <div className={style.checkoutColor}></div>
                  <p className={style.CardP}>CARD</p>
                </div>
                <div className={style.cartColor}>
                  <div className={style.checkoutColor}></div>
                  <p className={style.CardP}>CASH</p>
                </div>
              </div>
            </div>
            <div className={style.Checkout}>
              <div className={style.checkoutN1}>
                <div className={style.checkout}></div>
                <form className={style.checkoutInput}>
                  <input className={style.checkoutJ} placeholder="CURTIS" />
                  <input
                    className={style.checkoutJ}
                    placeholder="+ 994 (__) ___ __ __"
                  />
                  <input
                    className={style.checkoutJ}
                    placeholder="POSTAL CODE"
                  />
                </form>
              </div>
              <div className={style.Payment}>
                <p className={style.PaymentP}>DELIVERY METHOD</p>
                <div className={style.cartColor}>
                  <div className={style.checkoutColor}></div>
                  <p className={style.CardP}>COURIER</p>
                </div>
                <div className={style.cartColor}>
                  <div className={style.checkoutColor}></div>
                  <p className={style.CardP}>PICKUP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.CardInput}>
          <div>
            <p>CARD INFORMATION</p>
            <div className={style.InputCh}>
              <input className={style.checkoutJ} placeholder="CARD NUMBER" />
              <input className={style.checkoutJ} placeholder="EXPIRY DATE" />
              <input className={style.checkoutJ} placeholder="CW" />
            </div>
          </div>
          <div className={style.FinisOrder}>
            <button>FINISH ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
