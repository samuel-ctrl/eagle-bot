import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import Azure1 from "../../assets/images/png/azure1.png";
import AzureNewReg from "../../assets/images/png/azure-new-reg.png";
import AzureReg from "../../assets/images/png/azure-register.png";
import AzureNewApp from "../../assets/images/png/azure-new-app.png";
import AzureAppSelect from "../../assets/images/png/azure-app-select.png";
import AzureAddSecret from "../../assets/images/png/azure-add-secret.png";
import AzureNewSecret from "../../assets/images/png/azure-new-client-secret.png";
import AzureSecretDesc from "../../assets/images/png/azure-secret-desc.png";
import AzureClientSecret from "../../assets/images/png/azure-client-secret.png";
import AzureKeyClient from "../../assets/images/png/azure-key-vault.png";
import AzureGenerateSecret from "../../assets/images/png/azure-generate-secret.png";
import AzureSpSecret from "../../assets/images/png/azure-sp-secret.png";
import { useNavigate } from "react-router-dom";

const MicrosoftTutorial = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Microsoft Tutorial | Eagle Bot";
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
              <h1>
                Instructions for generating Microsoft Azure Client Id and Client
                Secret
              </h1>
            </div>
            <div className={Style.panel_body}>
              {/* <p className={Style.update}>Last updated October 27, 2023</p> */}
              <div className={Style.sub_content_section}>
                <h3>
                  <strong>App registration</strong>
                </h3>
                <p>
                  1. Navigate to the{" "}
                  <a href="https://portal.azure.com/#home">Azure portal</a>.
                </p>
                <p>
                  2. Select <strong>Microsoft Entra ID</strong> from the
                  left-hand side menu. In the Microsoft Entra Overview page, you
                  can find the <strong>Microsoft Entra tenant ID</strong>.
                </p>

                <img
                  src={Azure1}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  3. Now Go ahead and Select <strong>App registrations</strong>{" "}
                  and + <strong>New registration.</strong>
                </p>
                <img
                  src={AzureNewReg}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  4. Enter a name for the <strong>application</strong> (the
                  service principal name).
                </p>
                <p>
                  5. Select{" "}
                  <strong>
                    Accounts in this organizational directory only.
                  </strong>
                </p>
                <p>
                  6. For the <strong>Redirect URI</strong>, select{" "}
                  <strong>'Web'</strong> and enter the desired URL. If you don't
                  have an authentication endpoint for your organization, you can
                  use https://example.com/auth.
                </p>
                <p>7. Then select Register.</p>
                <img
                  src={AzureReg}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  8. Copy the <strong>Application (client) ID</strong> value.
                  We'll use this later to create a credential in Microsoft
                  Purview.
                </p>
                <img
                  src={AzureNewApp}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
              </div>

              <div className={Style.sub_content_section}>
                <h3>
                  <strong>Adding a secret to the client credentials</strong>
                </h3>
                <p>
                  1. Select the app from the <strong>App registrations</strong>.
                </p>

                <img
                  src={AzureAppSelect}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  2. Select <strong>Add a certificate or secret</strong>.
                </p>
                <img
                  src={AzureAddSecret}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>

                <p>3. Select + New client secret under Client secrets.</p>
                <img
                  src={AzureNewSecret}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>

                <p>
                  4. Provide a Description and set the Expires for the secret.
                </p>
                <img
                  src={AzureSecretDesc}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>

                <p>
                  5. Copy the value of the Secret value. We'll use this later to
                  create a secret in Azure Key Vault.
                </p>
                <img
                  src={AzureClientSecret}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  6. Voila! You now have all the required fields such as
                  tenantId, clientId, and clientSecret. Enter them in the
                  corresponding Eagle Bot form fields.
                </p>
              </div>
              {/* 
              <div className={Style.sub_content_section}>
                <h3>
                  <strong>Adding the secret to your Azure Key Vault</strong>
                </h3>
                <p>
                  To allow Microsoft Purview to use this service principal to
                  authenticate with other services, you'll need to store this
                  credential in Azure Key Vault.
                </p>
                <p>
                  1. Navigate to your <strong>Key vault</strong>.
                </p>
                <img
                  src={AzureKeyClient}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  2. Select{" "}
                  <strong>
                    Settings --&gt; Secrets --&gt; + Generate/Import
                  </strong>
                  <img
                    src={AzureGenerateSecret}
                    alt="Azure logo"
                    style={{ width: "700px", height: "400px" }}
                    // className="large-image"
                  ></img>
                </p>

                <p>
                  3. Enter the <strong>Name</strong> of your choice, and save it
                  to create a credential in Microsoft Purview.
                </p>
                <p>
                  4. Enter the <strong>Value</strong> as the{" "}
                  <strong>Secret value</strong> from your Service Principal.
                </p>
                <img
                  src={AzureSpSecret}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  5. Select <strong>Create</strong> to complete
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicrosoftTutorial;
