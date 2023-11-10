import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import aws1 from "../../assets/images/png/aws1.png";
import aws2 from "../../assets/images/png/aws2.png";
import aws3 from "../../assets/images/png/aws3.png";
import aws4 from "../../assets/images/png/aws4.png";
import aws5 from "../../assets/images/png/aws5.png";
import azure from "../../assets/images/png/azure.png";
import AzureNewReg from "../../assets/images/png/azure-new-reg.png";
import AzureReg from "../../assets/images/png/azure-register.png";
import AzureNewApp from "../../assets/images/png/azure-new-app.png";
import AzureAppSelect from "../../assets/images/png/azure-app-select.png";
import AzureAddSecret from "../../assets/images/png/azure-add-secret.png";
import AzureNewSecret from "../../assets/images/png/azure-new-client-secret.png";
import AzureSecretDesc from "../../assets/images/png/azure-secret-desc.png";
import AzureClientSecret from "../../assets/images/png/azure-client-secret.png";
import AzureSubId from "../../assets/images/png/azure-subscription-id.png";
import AzureRoleAssignments from "../../assets/images/png/azure-role-assignments.png";
import AzureRoleAssignment from "../../assets/images/png/azure-role-assignment.png";
import ContributorRole from "../../assets/images/png/contributor-role.png";
import ContributorAssignment from "../../assets/images/png/contributor-assignment.png";
import AzureRole from "../../assets/images/png/azureRole.png";
import Gcp1 from "../../assets/images/png/gcp1.png";
import Gcp2 from "../../assets/images/png/gcp2.png";
import Gcp3 from "../../assets/images/png/gcp3.png";
import Gcp4 from "../../assets/images/png/gcp4.png";
import Gcp5 from "../../assets/images/png/gcp5.png";
import Gcp6 from "../../assets/images/png/gcp6.png";
import Gcp7 from "../../assets/images/png/gcp7.png";
import { useNavigate } from "react-router-dom";

const titleStyle = {
  fontSize: "40px", // Adjust the pixel value to change the font size
};

const CloudAcessTutorials = () => {
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
        <div className={Style.menu_container}>
          <h4 className={Style.table_of_content_head}>Table of Contents</h4>
          <ol>
            <li>
              <a href="#aws">AWS Tutorial</a>
            </li>
            <li>
              <a href="#microsoft">Microsoft Tutorial</a>
            </li>
            <li>
              <a href="#google">Google Tutorial</a>
            </li>
          </ol>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div id="aws" className={Style.panel_head}>
              <h1 style={titleStyle}>
                Setting Up Cloud Automations on Eagle Bot
              </h1>
              <p>
                To enable API automations with the cloud services on our Eagle
                platform, you would have to follow a few steps and complete a
                <strong> One-Time</strong> setup for AWS, GCP and AZ.
              </p>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}></div>
              <h1>Instructions for generating AWS Acesss Key and Secret Key</h1>
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

          {/* Microsoft Instruction */}
          <div className={Style.content_container}>
            <div id="microsoft" className={Style.panel_head}>
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
                  src={azure}
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
                <p></p>

                <p></p>
                <h3>
                  <strong>
                    Assign a Contributor Role To Your App Registration
                  </strong>
                </h3>
                <p>
                  In Azure Role Based Access Control (RBAC), to grant access,
                  you assign an Azure role. This could be done at a Subscription
                  level or even at a resource group level.{" "}
                  <storng>
                    We recommend that you assign the role at a subscription
                    level as this would enable you to create resources using our
                    automations feature across the whole Subscription
                  </storng>
                  .
                </p>
                <p>
                  1. Click on the desired <strong>Subscription</strong>.
                </p>
                <p>
                  2. In the navigation menu, click{" "}
                  <strong>Access control (IAM)</strong>.
                </p>
                <p>
                  3. Click the <strong>Role assignments</strong> tab to see the
                  current list of role assignments.
                </p>
                {/* <img
                  src={AzureRoleAssignments}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img> */}
                <p>
                  4. Click <strong>Add {">"} Add role assignment</strong>.
                </p>
                <p>
                  If you don't have permissions to assign roles, the Add role
                  assignment option will be disabled.
                </p>
                <img
                  src={AzureRoleAssignment}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  5. On the Role tab, select the{" "}
                  <strong>Contributor role</strong>.
                </p>
                <img
                  src={ContributorRole}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  6. On the <strong>Members</strong> tab, select the app you
                  registered.
                </p>
                <img
                  src={AzureRole}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                <p>
                  7. On the <strong>Review + assign</strong> tab, review the
                  role assignment settings.
                </p>
                <p>
                  8. Click <strong>Review + assign</strong> to assign the role.
                </p>
                {/* <img
                  src={ContributorAssignment}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img> */}
                <p></p>
                <h3>
                  <strong>Find your Azure subscription Id</strong>
                </h3>
                <p>
                  1. Sign in to the{" "}
                  <strong>
                    <a href="https://portal.azure.com/#home">Azure portal</a>
                  </strong>
                  .
                </p>
                <p>
                  2. Under the Azure services heading, select{" "}
                  <strong>Subscriptions</strong>. If you don't see{" "}
                  <strong>Subscriptions</strong> here, use the search box to
                  find it.
                </p>
                
                <p>
                  3. To easily copy the <strong>Subscription ID</strong>, select
                  the subscription name to display more details. Select the{" "}
                  <strong>Copy to clipboard</strong>
                  icon shown next to the <strong>Subscription ID</strong> in the{" "}
                  <strong>Essentials</strong>
                  section. You can paste this value into a text document or
                  other location.
                </p>
                <img
                  src={AzureSubId}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img>
                {/* <img
                  src={AzureSubId}
                  alt="Azure logo"
                  style={{ width: "700px", height: "400px" }}
                  // className="large-image"
                ></img> */}
                <p>
                  4. Voila! You now have all the required fields such as
                  tenantId, clientId, and clientSecret. Enter them in the
                  corresponding Eagle Bot form fields.
                </p>
              </div>
            </div>
          </div>

          {/* Google Instuctions */}
          <div className={Style.content_container}>
            <div id="google" className={Style.panel_head}>
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

export default CloudAcessTutorials;
