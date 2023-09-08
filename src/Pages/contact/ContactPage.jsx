import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { GoldenButton } from "../../components/button/CustomButton";
const ContactPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (event) => {
    reset();
  };

  const handleLogoPress = () => {
    if (localStorage.getItem("fromHome")) {
      localStorage.setItem("fromHome", true);
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    document.title = "Eagle Bot - Support";
    return () => {
      document.title = "Eagle Bot";
    };
  });

  return (
    <>
      <div className={`${Style.contact_section}`}>
        <div className={Style.logo} onClick={handleLogoPress}>
          <img src={EagleBotLogoSvg} alt="EagleBot logo"></img>
        </div>
        <h2>Drop us a Question!</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className={Style.input}>
            <input
              placeholder="Name"
              name="name"
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "Name should be at least 2 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Name should not exceed 30 characters",
                },
              })}
            />
            {errors.name && (
              <p className={Style.errorMessage} role="alert">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className={Style.input} style={{}}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className={Style.errorMessage} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={Style.textArea}>
            <textarea
              rows={4}
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
                maxLength: {
                  value: 500,
                  message: "Message cannot exceed 500 characters",
                },
              })}
            />
            {errors.message && (
              <p className={Style.errorMessage} role="alert">
                {errors.message.message}
              </p>
            )}
          </div>
          <GoldenButton
            type={"submit"}
            buttonName={"Send"}
            style={{ padding: "14px 52px" }}
          />
        </form>{" "}
        <p className={Style.tearmsAndConText}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </a>{" "}
          apply.
        </p>
        <div className={Style.footer}>
          <p className={Style.copyRigthText}>
            Copyright © 2023 Eagle-Bot - An Antimatterr Product. All Rights
            Reserved.
          </p>
          <p className={Style.SupportText}>
            Contact us at support@eagle-bot.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
