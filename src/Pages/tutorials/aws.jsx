import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import aws1 from "../../assets/images/png/aws1.png";
import aws2 from "../../assets/images/png/aws2.png";
import aws3 from "../../assets/images/png/aws3.png";
import aws4 from "../../assets/images/png/aws4.png";
import aws5 from "../../assets/images/png/aws5.png";
import { useNavigate } from "react-router-dom";

const AWSTutorial = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "AWS Tutorial | Eagle Bot";
    return () => {
      document.title = "Eagle Bot";
    };
  });

  return (
    <>
      <div className={Style.logo}>
        <img
          src={EagleBotLogoSvg}
          onClick={() => navigate("/")}
          alt="EagleBot logo"
        ></img>
      </div>
      <div className={Style.body_container}>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1>Instructions for generating AWS Acesss Key and Secret Key</h1>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}></div>
              {/* <h3>slcslkcm</h3> */}
              <p>
                {" "}
                1. Go to <strong>Amazon Web Services</strong> console and click
                on the name of your account (it is located in the top right
                corner of the console). Then, in the expanded drop-down list,
                select Security Credentials.
              </p>
              <img
                src={aws1}
                alt="AWS Image"
                style={{ width: "700px", height: "400px" }}
                // className="large-image"
              ></img>
              <p>
                2. Click the <strong>Continue to Security Credentials</strong>{" "}
                button.
              </p>
              <img
                src={aws2}
                alt="AWS Image"
                style={{ width: "700px", height: "400px" }}
                // className="large-image"
              ></img>

              <p>
                3. Expand the Access Keys{" "}
                <strong>(Access Key ID and Secret Access Key)</strong>
                option. You will see the list of your active and deleted access
                keys.
              </p>
              <img
                src={aws3}
                alt="AWS Image"
                style={{ width: "700px", height: "400px" }}
                // className="large-image"
              ></img>
              <p>
                <strong>Note</strong>: The AWS secret access key can only be
                viewed once, right after creation. If you need to access it
                again, you will have to generate a new key
              </p>
              <p>
                4. To generate new access keys, click the Create New Access Key
                button.
              </p>
              <img
                src={aws4}
                alt="AWS Image"
                style={{ width: "700px", height: "400px" }}
                // className="large-image"
              ></img>
              <p>
                {" "}
                5. Click 'Show Access Key' to display it on the screen. You can
                also download it as a file to your computer for future use by
                clicking the 'Download Key File' button..
              </p>
              <img
                src={aws5}
                alt="AWS Image"
                style={{ width: "700px", height: "400px" }}
                // className="large-image"
              ></img>
              <p>
                <strong>Note</strong>: Make sure to save the key or download the
                key file to your computer before clicking "Close" or "Cancel."
                Failure to do so may result in the permanent loss of the AWS
                secret access key, requiring you to delete the existing keys and
                generate new ones
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSTutorial;
