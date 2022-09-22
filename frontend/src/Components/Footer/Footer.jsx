import React from "react";

import "./Footer.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_6irg3if", "template_zmo1u7j", form.current, "YAsjIEn76lx0iXVm0").then(
      (result) => {
        console.log(result.text);
        console.log('Message Sent!');
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div id="footer" className="app__flex">
      <div className="app__container-width form__container">
        <p className="tag">Contact</p>
        <h1 className="head-text">
          Get in <span>Touch</span>.
        </h1>

        <div className="form__content">
          <div className="form__right">
            <p className="p-text">
              Shoot me an message if you have any questions or inquiries and I'll get right back to
              you. You can also contact me on my socials below.
            </p>
            <div className="form__grid">
              <div className="form__contact">
                <a href="https://github.com/KeanuBarnardd" target={"_blank"}>
                  <i className="fa-brands fa-github"></i>
                </a>
                <p className="p-text">KeanuBarnardd</p>
              </div>
              <div className="form__contact">
                <a href="https://twitter.com/keanu__dev" target={"_blank"}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <p className="p-text">@keanu__dev</p>
              </div>
              <div className="form__contact">
                <a href="https://www.linkedin.com/in/keanu-b-262823118/" target={"_blank"}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <p className="p-text">Keanu Barnard</p>
              </div>
              <div className="form__contact">
                <i className="fa-solid fa-envelope"></i>

                <p className="p-text">keanubarnardd@gmail.com</p>
              </div>
            </div>
            <p className="p-text farewell">
              Looking forward to hearing from you, <span>Keanu Barnard</span>.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} action="">
            <div className="form__input-container">
              <p className="p-text">Name</p>
              <input type="text" name="name" />
            </div>
            <div className="form__input-container">
              <p className="p-text">Email</p>
              <input type="text" name="email" />
            </div>
            <div className="form__input-container">
              <p className="p-text">Message</p>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="header-btn work">Send</button>
          </form>
        </div>
        <div className="form__bottom">
          <p className="p-text">@2022 Designed and built by Keanu_Barnard</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
