import { Link, useNavigate } from "react-router-dom";

import Style from "./style.module.css";
import { useEffect } from "react";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Eagle Bot - Not Found";
    return () => {
      document.title = "Eagle Bot";
    };
  });

  return (
    <>
      <div className={Style.logo}>
        <img
          src={EagleBotLogoSvg}
          alt="EagleBot logo"
          onClick={() => navigate("/")}
        ></img>
      </div>
      <div className={Style._404Container}>
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
