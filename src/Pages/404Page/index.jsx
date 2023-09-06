import { Link } from "react-router-dom";
import Style from "./style.module.css";
import { EagleBotLogo } from "../../components/logo/Logo";

const NotFound = () => {
  return (
    <>
      <div className={Style.logo}>
        <EagleBotLogo />
      </div>
      <div className={Style._404Container}>
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
      </div>
      {/* <div className={Style.footer}>footer todo</div> */}
    </>
  );
};

export default NotFound;
