import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const titleStyle = {
  fontSize: "40px", // Adjust the pixel value to change the font size
};

const ApiBasedAutomations = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Eagle Browser Api Based Automations | Eagle Bot";
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
              <h1 style={titleStyle}>
                <u>Eagle Bot API Based Automations</u>
              </h1>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}>
              <h3>
                <u>API Based Automations Tutorial</u>
              </h3>
              <p>
                The API based automations at Eagle Bot are a combination of
                custom backend AI Engines built from the ground up specially
                designed for a seamless user experience. We use GPT-4 for
                content generation, however all other actions to enable API
                automations are powered by our internal custom trained AI/ML
                Engines.
              </p>
              <p>
                Our Infrastructure has been built on Azure, is Enterprise grade
                and is highly scalable.
              </p>
              <p>
                In this version, you can perform the following actions on your
                account <strong>just by using a prompt</strong>:
              </p>
              <p>
                <h3>
                  <u>Microsoft Azure:</u>
                </h3>
                <ol>
                  <li>Create and Delete Virtual Machines.</li>
                  <li>Create and Delete Storage Accounts.</li>
                </ol>
              </p>

              <p>
                <h3>
                  <u>Google Cloud Platform:</u>
                </h3>
                <ol>
                  <li>Create and Delete Virtual Machines.</li>
                  <li>Create and Delete Storage Buckets.</li>
                </ol>
              </p>

              <p>
                <h3>
                  <u>Amazon Web Services:</u>
                </h3>
                <ol>
                  <li>Create and Delete Virtual Machines.</li>
                  <li>Create and Delete Storage Buckets.</li>
                </ol>
              </p>
              <p>
                <strong>Example Prompt</strong>: “Create a Google storage bucket
                called ‘NewBucket1234’ in the East-US region”
              </p>
              <p>
                In the next release planned during the week of Nov 20, 2023 ,
                you could use <strong>prompt-based executions</strong> for the
                following tasks:
              </p>
              <p>
                1. Sending email and scheduling meetings with content using
                Gmail.
              </p>
              <p>2. Sending email and scheduling meetings with Outlook.</p>
              <p>3. Creating JIRA tickets with content.</p>
              <p>4. Posting a Tweet.</p>
              <p>5. Sending a WhatsApp message from a business account.</p>
              <p>6. Posting a draft for a blog using Blogger.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiBasedAutomations;
