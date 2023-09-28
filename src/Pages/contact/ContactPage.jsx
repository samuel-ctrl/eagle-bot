import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { GoldenButton } from "../../components/button/CustomButton";
import { FaqsData } from "../../components/atoms/index";
import { Axios } from "../../services/Axios";
import APIENDPOINTS from "../../components/constent/endpoints";
import { CustomizedSnackbar } from "../../components/model/Model";

const ContactPage = ({ setFrom }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Support | Eagle Bot";
    return () => {
      document.title = "Eagle Bot";
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogoPress = () => {
    setFrom("contact");
    navigate("/");
  };

  const onSubmit = (event) => {
    setIsLoading(true);
    Axios.post(APIENDPOINTS.USER_QUERY, {
      name: event.name,
      user_email: event.email,
      query_text: event.message,
    })
      .then(function (response) {
        if (response.status == 200) {
          setIsLoading(false);
          setOpenSuccess(true);
          reset();
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        setOpenWarning(true);
      });
  };

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
              autoComplete="off"
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
          <div className={Style.input}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
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
            className={Style.sendBtn}
            isLoading={isLoading}
          />
        </form>{" "}
      </div>
      <div className={Style.faqSection}>
        <h2 className={Style.faq_header}>
          FAQs for &quot;Eagle Bot&quot; - The Next-Gen AI-Powered Browser &amp;
          Automation Software
        </h2>
        <FaqsData />
      </div>
      <div className={Style.footer_sec}>
        <p className={Style.tearmsAndConText}>
          By utilizing our products and services, you implicitly consent to the
          Eagle-Bot&nbsp;
          <strong>
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </strong>
          &nbsp;and&nbsp;
          <strong>
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service.
            </a>
          </strong>
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
      <CustomizedSnackbar
        handleClose={() => setOpenSuccess(false)}
        open={openSuccess}
        alertContent={
          "Thank you for your inquiry! Our team will respond to your message within the next 48 hours."
        }
        alertType={"info"}
      />
      <CustomizedSnackbar
        handleClose={() => setOpenWarning(false)}
        open={openWarning}
        alertContent={"Oop's we can't reach the server, try again later."}
        alertType={"error"}
      />
    </>
  );
};

export default ContactPage;
