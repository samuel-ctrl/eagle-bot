import { useEffect } from "react";
import Style from "../../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../../assets/images/svg/eagle-bot-logo.svg";
import EagleBotLogoBlack from "../../../assets/images/png/eagle-black-bg.jpg";
import { useNavigate } from "react-router-dom";

const EageBotBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Eagle Bot Blogs | Eagle Bot";
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
                <u>Advanced Techniques in Prompt-Based Automation Using AI</u>
              </h1>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}></div>
              <h1>
                Eagle Bot's AI-Powered Cross-Platform (API) Prompt Automation
                Feature: Ushering in the Future of B2C Interactions.
              </h1>
              <p></p>
              <p></p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={EagleBotLogoBlack}
                  alt="description"
                  style={{ width: "50%", height: "300px", marginRight: "20px" }}
                />

                <div style={{ width: "50%" }}>
                  <p>
                    Dear innovators and avid followers of Eagle Bot, we have a
                    thrilling announcement to make. Our relentless pursuit of
                    excellence in the world of Artificial Intelligence has led
                    to the creation of an extraordinary new feature - AI-powered
                    cross-platform automation in <strong>beta*</strong>. This is
                    set to redefine the landscape of API B2C interactions across
                    <strong>
                      {" "}
                      Amazon, Microsoft, Google, Atlassian, WhatsApp, and
                      Twitter{" "}
                    </strong>
                    platforms for starters.
                  </p>
                </div>
              </div>
              <p></p>
              <p></p>
              <h2>Redefining B2C Interactions with AI-Powered Eagle Bot</h2>
              <p></p>
              <p>
                Eagle Bot has always been a frontrunner in the realm of
                AI-driven automation, and our latest feature, underpinned by
                custom advanced Artificial Intelligence, is about to
                revolutionize customer engagement across various platforms. Hold
                on to your seats for the official release on{" "}
                <strong>November 7, 2023 </strong>
                and visit <a href="www.eagle-bot.com">www.eagle-bot.com</a> to
                join the waitlist.
              </p>
              <h2>Microsoft: Empower Business with AI</h2>
              <p></p>
              <p>
                Customers relying on Microsoft tools can now leverage AI-powered
                Eagle Bot for seamless operations. From scheduling meetings to
                executing routine tasks, Eagle Bot ensures that your business
                performs at its best.
              </p>

              <h2>
                Google: Access Information Seamlessly with AI and Automate Tasks
              </h2>
              <p></p>
              <p>
                Eagle Bot, integrated with Google products, provides real-time
                information and intelligent responses that adapt to user needs.
                Make content easily accessible and engage effectively,
                regardless of the platform. Plus, automate tasks such as sending
                emails and scheduling meetings to boost productivity.
              </p>

              <h2>Atlassian: Collaborate Smartly with AI</h2>
              <p></p>
              <p>
                Users collaborating within Atlassian's suite of tools can now
                rely on AI-powered Eagle Bot to streamline their efforts. Create
                and manage project workflows, and access project information
                efficiently.
              </p>

              <h2>
                WhatsApp and Twitter: Enhance Social Engagement and Business
                Productivity with AI
              </h2>
              <p></p>
              <p>
                Social media dynamics can be demanding, but with AI-powered
                Eagle Bot, you'll never miss a beat.
              </p>

              <h2>Amazon: Supercharge Productivity with AI</h2>
              <p></p>
              <p>
                For developers and businesses, AI-powered Eagle Bot is here to
                supercharge your productivity with AI-driven prompt assistance
                that caters to individual needs and preferences, making
                development tasks more efficient and streamlined.
              </p>

              <h2>The Eagle Bot Advantage: Scalable Custom Deployments</h2>
              <p></p>
              <p>
                One of the key advantages of Eagle Bot's AI-powered
                cross-platform automation is scalability through custom
                deployment pipelines running under the hood. This unique feature
                allows for the rapid addition of new APIs, empowering us to
                scale up the number of available automations in the blink of an
                eye based on user feedback.
              </p>

              <h2>Limitations</h2>
              <p></p>
              <p>
                In the initial release, our beta version of the product will
                feature a range of single-command automations, designed to
                provide users with immediate, task-specific solutions. These
                single-command automations are engineered to simplify everyday
                processes and enhance user productivity.
              </p>

              <p>
                However, the true essence of this product lies in its exciting
                future. Our vision is to evolve beyond{" "}
                <strong>single-command automations</strong>. We are committed to
                empowering our users to create and customize intricate workflows
                that align with the unique requirements of their enterprises.
                This expansion is not a distant dream; it's a part of our
                near-future roadmap.
              </p>

              <p>
                <strong>
                  The initial user data from this API prompt-based automation
                  feature would be used to train our underlying custom AI
                  Engines to enable automating business process workflows in the
                  near future just by using prompts.
                </strong>
              </p>

              <p>
                <i>
                  "Imagine a world where users can seamlessly build and
                  fine-tune intricate workflows, effortlessly integrating
                  AI-powered API automations with RPAs where needed into the
                  core of their personal or enterprise operations. That is the
                  vision of this product."
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EageBotBlog;
