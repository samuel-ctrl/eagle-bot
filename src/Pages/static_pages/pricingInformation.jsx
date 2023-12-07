import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const titleStyle = {
  fontSize: "50px", // Adjust the pixel value to change the font size
};
const PricingInformation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Eagle Browser Pricing Information | Eagle Bot";
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
                <u>Eagle Bot Pricing</u>
              </h1>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}>
                <p>
                  Every operation performed at Eagle-Bot costs a few Eagle Coins
                  to perform. This includes performing an action and content
                  generation from LLMs.
                </p>
                <p>The cost of 1 Eagle Coin is $0.00004 USD</p>
                <table className={Style.table}>
                  <thead>
                    <tr>
                      <th>Operation</th>
                      <th>Cost</th>
                      <th>USD Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chatbot GPT 4 (1 Open AI Token)</td>
                      <td>0.5 Eagle Coin</td>
                      <td>$0.00002</td>
                    </tr>
                    <tr>
                      <td>Image (DallE 2) per Image</td>
                      <td>500 Eagle Coins</td>
                      <td>$0.02</td>
                    </tr>
                    <tr>
                      <td>Azure, AWS, and GCP Automation Executions</td>
                      <td>2500 Eagle Coins</td>
                      <td>$0.1</td>
                    </tr>
                    <tr>
                      <td>Regular API Automations with content</td>
                      <td>2500 Eagle Coins</td>
                      <td>$0.1</td>
                    </tr>
                    <tr>
                      <td>Creating an image with Stable Diffusion AI</td>
                      <td>500 Eagle Coins</td>
                      <td>$0.02</td>
                    </tr>
                    <tr>
                      <td>Text generation with Llama 2 (compute costs)</td>
                      <td>FREE</td>
                      <td>FREE</td>
                    </tr>
                    <tr>
                      <td>Canvas Export (any format)</td>
                      <td>500 Eagle Coins</td>
                      <td>$0.02</td>
                    </tr>
                    <tr>
                      <td>Chatbot GPT 3.5 Turbo (1 Open AI Token)</td>
                      <td>FREE</td>
                      <td>FREE</td>
                    </tr>
                    <tr>
                      <td>Context based AI - Google Search</td>
                      <td>100 Eagle Coins</td>
                      <td>$0.004</td>
                    </tr>
                    <tr>
                      <td>Creating an Eagle RPA Automation</td>
                      <td>FREE</td>
                      <td>FREE</td>
                    </tr>
                    <tr>
                      <td>Post Processing an RPA with AI</td>
                      <td>2500 Eagle Coins</td>
                      <td>$0.1</td>
                    </tr>
                    <tr>
                      <td>
                        Saving an API and RPA Automation Workflow with many
                        steps
                      </td>
                      <td>50000 Eagle Coins</td>
                      <td>$2</td>
                    </tr>
                    <tr>
                      <td>Submitting a verified Eagle Browser Extension***</td>
                      <td>+(200,000) Eagle Coins</td>
                      <td>+$8</td>
                    </tr>
                  </tbody>
                </table>

                <p></p>
                <p>
                  <strong>Note***</strong>: The amount for submitting an RPA
                  Public Automation and Eagle Browser Extension would be
                  credited post a verification process conducted by our internal
                  team at Eagle-Bot.
                </p>
                <p>
                  <strong>
                    <u>Enterprise</u>
                  </strong>{" "}
                  : Our pricing for enterprises is determined by the level of
                  customization and hosting choices. Our platform can be
                  deployed in your private environment, hosted in our cloud, or
                  even deployed on-premise. For customized quotes, please
                  contact us at <strong>support@eagle-bot.com</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInformation;
