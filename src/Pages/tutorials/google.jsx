import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import Gcp1 from "../../assets/images/png/gcp1.png";
import Gcp2 from "../../assets/images/png/gcp2.png";
import Gcp3 from "../../assets/images/png/gcp3.png";
import Gcp4 from "../../assets/images/png/gcp4.png";
import Gcp5 from "../../assets/images/png/gcp5.png";
import Gcp6 from "../../assets/images/png/gcp6.png";
import Gcp7 from "../../assets/images/png/gcp7.png";

import { useNavigate } from "react-router-dom";

const GoogleTutorial = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Google Tutorial | Eagle Bot";
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
              <h1>Instructions for finding your Google Cloud private key</h1>
            </div>
            <div className={Style.panel_body}>
              {/* <p className={Style.update}>Last updated October 27, 2023</p> */}
              <div className={Style.sub_content_section}>
                <h3>
                  <strong>How to find your Google Cloud Private Key</strong>
                </h3>
                <p>
                  1. Go to the Google Cloud Platform Console home page -{" "}
                  <a
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://console.cloud.google.com/
                  </a>
                </p>
                <p>
                  2. Access the Google Cloud Platform menu, then click on{" "}
                  <strong>"IAM & Admin."</strong>
                </p>
                <p>3. Select "Service accounts.".</p>
                <img
                  src={Gcp1}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  4. Choose an existing service account from the list or create
                  one.
                </p>
                <img
                  src={Gcp2}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  If the <strong>‘Create Service Account’</strong> button is not
                  visible, create a project first in order to create a service
                  account’.
                </p>
                <img
                  src={Gcp3}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  5. To create the service account, provide the name, ID, and
                  description during the 'Create Service Account' process.
                  Proceed to grant access and finalize the account creation.
                </p>
                <img
                  src={Gcp4}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>6. Select the email associated with the service account.</p>
                <img
                  src={Gcp5}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  7. To access the keys, click on the 'KEYS' tab. Click the "Add
                  Key" dropdown and then select 'Create New Key'.
                </p>
                <img
                  src={Gcp6}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>8. Choose JSON as the key type.</p>
                <img
                  src={Gcp7}
                  alt="GCP Image"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  9. The service account key JSON file is automatically
                  downloaded to your local machine.
                </p>
                <p>
                  10. Voila! Open your JSON file to access the relevant
                  credentials, and then enter them in the appropriate Eagle Bot
                  form fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleTutorial;
