import { useEffect } from "react";
import Style from "./style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Cookie Policy | Eagle Bot";
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
              <a href="#question-1">What are cookies?</a>
            </li>
            <li>
              <a href="#question-2">Why do we use cookies?</a>
            </li>
            <li>
              <a href="#question-3">How can I control cookies?</a>
            </li>
            <li>
              <a href="#question-4">How can I control cookies on my browser?</a>
            </li>
            <li>
              <a href="#question-5">
                What about other tracking technologies, like web beacons?
              </a>
            </li>
            <li>
              <a href="#question-6">
                Do you use Flash cookies or Local Shared Objects?
              </a>
            </li>
            <li>
              <a href="#question-7">Do you serve targeted advertising?</a>
            </li>
            <li>
              <a href="#question-8">
                How often will you update this Cookie Policy?
              </a>
            </li>
            <li>
              <a href="#question-9">Where can I get further information??</a>
            </li>
          </ol>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1>Eagle Bot Cookie Policy</h1>
            </div>
            <div className={Style.panel_body}>
              <p className={Style.update}>Last updated October 27, 2023</p>
              <div id="overview" className={Style.sub_content_section}>
                <h3>
                  <strong>COOKIE POLICY</strong>
                </h3>
                <p>
                  This Cookie Policy explains how Eagle Bot PTE LTD ("Company,"
                  "we," "us," and "our") uses cookies and similar technologies
                  to recognize you when you visit our website at{" "}
                  <a href="https://platform.eagle-bot.com">
                    https://platform.eagle-bot.com
                  </a>{" "}
                  ("Website"). It explains what these technologies are and why
                  we use them, as well as your rights to control our use of
                  them.
                </p>
                <p>
                  In some cases we may use cookies to collect personal
                  information, or that becomes personal information if we
                  combine it with other information.
                </p>
              </div>

              <div id="question-1" className={Style.sub_content_section}>
                <h3>
                  <strong>What are cookies?</strong>
                </h3>
                <p>
                  Cookies are small data files that are placed on your computer
                  or mobile device when you visit a website. Cookies are widely
                  used by website owners in order to make their websites work,
                  or to work more efficiently, as well as to provide reporting
                  information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, Eagle Bot PTE
                  LTD) are called "first-party cookies." Cookies set by parties
                  other than the website owner are called "third-party cookies."
                  Third-party cookies enable third-party features or
                  functionality to be provided on or through the website (e.g.,
                  advertising, interactive content, and analytics). The parties
                  that set these third-party cookies can recognize your computer
                  both when it visits the website in question and also when it
                  visits certain other websites.
                </p>
              </div>

              <div id="question-2" className={Style.sub_content_section}>
                <h3>
                  <strong>Why do we use cookies?</strong>
                </h3>
                <p>
                  We use first- and third-party cookies for several reasons.
                  Some cookies are required for technical reasons in order for
                  our Website to operate, and we refer to these as "essential"
                  or "strictly necessary" cookies. Other cookies also enable us
                  to track and target the interests of our users to enhance the
                  experience on our Online Properties. Third parties serve
                  cookies through our Website for advertising, analytics, and
                  other purposes. This is described in more detail below.
                </p>
              </div>

              <div id="question-3" className={Style.sub_content_section}>
                <h3>
                  <strong>How can I control cookies</strong>
                </h3>
                <p>
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie rights by setting your
                  preferences in the Cookie Consent Manager. The Cookie Consent
                  Manager allows you to select which categories of cookies you
                  accept or reject. Essential cookies cannot be rejected as they
                  are strictly necessary to provide you with services.
                </p>
                <p>
                  The Cookie Consent Manager can be found in the notification
                  banner and on our website. If you choose to reject cookies,
                  you may still use our website though your access to some
                  functionality and areas of our website may be restricted. You
                  may also set or amend your web browser controls to accept or
                  refuse cookies.
                </p>
                <p>
                  The specific types of first- and third-party cookies served
                  through our Website and the purposes they perform are
                  described in the table below (please note that the specific
                  cookies served may vary depending on the specific Online
                  Properties you visit):
                </p>
              </div>

              <div id="question-4" className={Style.sub_content_section}>
                <h3>
                  <strong>How can I control cookies on my browser?</strong>
                </h3>
                <p>
                  As the means by which you can refuse cookies through your web
                  browser controls vary from browser to browser, you should
                  visit your browser's help menu for more information. The
                  following is information about how to manage cookies on the
                  most popular browsers:
                </p>
                <p>
                  <ul>
                    <li>Chrome</li>
                    <li>Eagle Browser</li>
                    <li>Internet Explorer</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                    <li>Opera</li>
                  </ul>
                </p>
                <p>
                  In addition, most advertising networks offer you a way to opt
                  out of targeted advertising. If you would like to find out
                  more information, please visit:
                </p>
                <p>
                  <ul>
                    <li>
                      <a href="http://www.aboutads.info/choices/">
                        Digital Advertising Alliance
                      </a>
                    </li>
                    <li>
                      <a href="https://youradchoices.ca/">
                        Digital Advertising Alliance of Canada
                      </a>
                    </li>
                    <li>
                      <a href="http://www.youronlinechoices.com/">
                        European Interactive Digital Advertising Alliance
                      </a>
                    </li>
                  </ul>
                </p>
              </div>

              <div id="question-5" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    What about other tracking technologies, like web beacons?
                  </strong>
                </h3>
                <p>
                  Cookies are not the only way to recognize or track visitors to
                  a website. We may use other, similar technologies from time to
                  time, like web beacons (sometimes called "tracking pixels" or
                  "clear gifs"). These are tiny graphics files that contain a
                  unique identifier that enables us to recognize when someone
                  has visited our Website or opened an email including them.
                  This allows us, for example, to monitor the traffic patterns
                  of users from one page within a website to another, to deliver
                  or communicate with cookies, to understand whether you have
                  come to the website from an online advertisement displayed on
                  a third-party website, to improve site performance, and to
                  measure the success of email marketing campaigns. In many
                  instances, these technologies are reliant on cookies to
                  function properly, and so declining cookies will impair their
                  functioning.
                </p>
              </div>

              <div id="question-6" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    Do you use Flash cookies or Local Shared Objects?
                  </strong>
                </h3>
                <p>
                  Websites may also use so-called "Flash Cookies" (also known as
                  Local Shared Objects or "LSOs") to, among other things,
                  collect and store information about your use of our services,
                  fraud prevention, and for other site operations.
                </p>
                <p>
                  If you do not want Flash Cookies stored on your computer, you
                  can adjust the settings of your Flash player to block Flash
                  Cookies storage using the tools contained in the{" "}
                  <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">
                    Website Storage Settings
                  </a>{" "}
                  Panel. You can also control Flash Cookies by going to the{" "}
                  <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html">
                    Global Storage Settings
                  </a>{" "}
                  Panel and following the instructions (which may include
                  instructions that explain, for example, how to delete existing
                  Flash Cookies (referred to "information" on the Macromedia
                  site), how to prevent Flash LSOs from being placed on your
                  computer without your being asked, and (for Flash Player 8 and
                  later) how to block Flash Cookies that are not being delivered
                  by the operator of the page you are on at the time).
                </p>
                <p>
                  Please note that setting the Flash Player to restrict or limit
                  acceptance of Flash Cookies may reduce or impede the
                  functionality of some Flash applications, including,
                  potentially, Flash applications used in connection with our
                  services or online content.
                </p>
              </div>
              <div id="question-7" className={Style.sub_content_section}>
                <h3>
                  <strong>Do you serve targeted advertising?</strong>
                </h3>
                <p>
                  Third parties may serve cookies on your computer or mobile
                  device to serve advertising through our Website. These
                  companies may use information about your visits to this and
                  other websites in order to provide relevant advertisements
                  about goods and services that you may be interested in. They
                  may also employ technology that is used to measure the
                  effectiveness of advertisements. They can accomplish this by
                  using cookies or web beacons to collect information about your
                  visits to this and other sites in order to provide relevant
                  advertisements about goods and services of potential interest
                  to you. The information collected through this process does
                  not enable us or them to identify your name, contact details,
                  or other details that directly identify you unless you choose
                  to provide these
                </p>
              </div>
              <div id="question-8" className={Style.sub_content_section}>
                <h3>
                  <strong>How often will you update this Cookie Policy?</strong>
                </h3>
                <p>
                  We may update this Cookie Policy from time to time in order to
                  reflect, for example, changes to the cookies we use or for
                  other operational, legal, or regulatory reasons. Please
                  therefore revisit this Cookie Policy regularly to stay
                  informed about our use of cookies and related technologies.
                </p>
                <p>
                  The date at the top of this Cookie Policy indicates when it
                  was last updated.
                </p>
              </div>

              <div id="question-9" className={Style.sub_content_section}>
                <h3>
                  <strong>Where can I get further information?</strong>
                </h3>
                <p>
                  If you have any questions about our use of cookies or other
                  technologies, please email us at support@eagle-bot.com or by
                  post to:
                </p>
                <p>
                  <strong>Eagle Bot PTE LTD</strong>
                  <br></br>
                  <strong>160 Robinson Rd, #14 04, Singapore 068914</strong>
                  <br></br>
                  <strong>Singapore 068914</strong>
                  <br></br>
                  <strong>Singapore</strong>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
