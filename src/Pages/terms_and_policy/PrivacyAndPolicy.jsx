import { useEffect } from "react";
import Style from "./style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { GoToUpComp } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
const PrivacyAndPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Privacy Policy | Eagle Bot";
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
              <a href="#question-1">WHAT INFORMATION DO WE COLLECT?</a>
            </li>
            <li>
              <a href="#question-2">HOW DO WE PROCESS YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#question-3">
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#question-4">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href="#question-5">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#question-6">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
            </li>
            <li>
              <a href="#question-7">
                IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </a>
            </li>
            <li>
              <a href="#question-8">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#question-9">HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </li>
            <li>
              <a href="#question-10">WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </li>
            <li>
              <a href="#question-11">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </li>
            <li>
              <a href="#question-12">
                DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#question-13">
                DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?E?
              </a>
            </li>
            <li>
              <a href="#question-14">DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </li>
            <li>
              <a href="#question-15">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#question-16">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1>Eagle Bot Privacy Policy</h1>
            </div>
            <div className={Style.panel_body}>
              <p className={Style.update}>Last updated October 27, 2023</p>
              <div id="overview" className={Style.sub_content_section}>
                <h3>
                  <strong>PRIVACY NOTICE</strong>
                </h3>
                <p>
                  This privacy notice for <strong>Eagle Bot PTE LTD</strong>{" "}
                  (doing business as Eagle Bot) ("we," "us," or "our"),
                  describes how and why we might collect, store, use, and/or
                  share ("process") your information when you use our services
                  ("Services"), such as when you:
                </p>
                <ul>
                  <li>
                    Visit our website at &nbsp;
                    <a href="https://platform.eagle-bot.com">
                      https://platform.eagle-bot.com
                    </a>
                    , or any website of ours under the ‘eagle-bot’ domain that
                    links to this privacy notice.
                  </li>
                  <li>
                    Download and use our desktop application (
                    <strong>Eagle Browser</strong>) on Windows and MacOS, or any
                    other application of ours that links to this privacy notice.
                  </li>
                  <li>
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                  </li>
                  <li>
                    Questions or concerns? Reading this privacy notice will help
                    you understand your privacy rights and choices. If you do
                    not agree with our policies and practices, please do not use
                    our Services. If you still have any questions or concerns,
                    please contact us at <strong>privacy@eagle-bot.com</strong>.
                  </li>
                </ul>
                {/* <p>
                  Questions or concerns? Reading this privacy notice will help
                  you understand your privacy rights and choices. If you do not
                  agree with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at &nbsp;
                  <a href="mailto:privacy@eagle-bot.com">
                    privacy@eagle-bot.com.
                  </a>
                </p> */}
              </div>
              <div
                id="summary-of-key-points"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>SUMMARY OF KEY POINTS</strong>
                </h3>
                <p>
                  This summary provides key points from our privacy notice, but
                  you can find out more details about any of these topics by
                  clicking the link following each key point or by using our
                  table of contents below to find the section you are looking
                  for.
                </p>

                <strong>
                  <h6>(a) What personal information do we process?</h6>
                </strong>
                <p>
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use. Learn more about personal information you
                  disclose to us.
                </p>

                <strong>
                  <h6>(b) Do we process any sensitive personal information?</h6>
                </strong>
                <p>
                  We may process sensitive personal information when necessary
                  with your consent or as otherwise permitted by applicable law.
                </p>

                <strong>
                  <h6>(c) Do we receive any information from third parties?</h6>
                </strong>
                <p>We do not receive any information from third parties.</p>

                <strong>
                  <h6>(d) How do we process your information?</h6>
                </strong>
                <p>
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                  We process your information only when we have a valid legal
                  reason to do so.
                </p>

                <h6>
                  <strong>
                    (e) In what situations and with which parties do we share
                    personal information?
                  </strong>
                </h6>
                <p>
                  We may share information in specific situations and with
                  specific third parties.
                </p>

                <strong>
                  <h6>(f) How do we keep your information safe?</h6>
                </strong>
                <p>
                  We have organizational and technical processes and procedures
                  in place to protect your personal information. However, no
                  electronic transmission over the internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information.
                </p>

                <strong>
                  <h6>(g) What are your rights?</h6>
                </strong>
                <p>
                  Depending on where you are located geographically, the
                  applicable privacy law may mean you have certain rights
                  regarding your personal information. Learn more about your
                  privacy rights.
                </p>

                <strong>
                  <h6>(h) How do you exercise your rights?</h6>
                </strong>
                <p>
                  The easiest way to exercise your rights is by visiting &nbsp;
                  <a href="https://www.eagle-bot.com/contact">
                    https://www.eagle-bot.com/contact
                  </a>
                  , or by contacting us. We will consider and act upon any
                  request in accordance with applicable data protection laws.
                </p>

                <p>
                  Want to learn more about what we do with any information we
                  collect? <b>Review the privacy notice in full</b>
                </p>
              </div>

              <div
                className={`${Style.sub_content_section} ${Style.mobileview_menu}`}
              >
                <h4 className={Style.table_of_content_head}>
                  Table of Contents
                </h4>
                <ol>
                  <li>
                    <a href="#question-1">WHAT INFORMATION DO WE COLLECT?</a>
                  </li>
                  <li>
                    <a href="#question-2">
                      HOW DO WE PROCESS YOUR INFORMATION?
                    </a>
                  </li>
                  <li>
                    <a href="#question-3">
                      WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                      INFORMATION?
                    </a>
                  </li>
                  <li>
                    <a href="#question-4">
                      WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </a>
                  </li>
                  <li>
                    <a href="#question-5">
                      DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </a>
                  </li>
                  <li>
                    <a href="#question-6">
                      IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    </a>
                  </li>
                  <li>
                    <a href="#question-7">
                      HOW LONG DO WE KEEP YOUR INFORMATION?
                    </a>
                  </li>
                  <li>
                    <a href="#question-8">
                      HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </a>
                  </li>
                  <li>
                    <a href="#question-9">WHAT ARE YOUR PRIVACY RIGHTS?</a>
                  </li>
                  <li>
                    <a href="#question-10">
                      CONTROLS FOR DO-NOT-TRACK FEATURES
                    </a>
                  </li>
                  <li>
                    <a href="#question-11">
                      DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </a>
                  </li>
                  <li>
                    <a href="#question-12">
                      WHAT CATEGORIES OF PERSONAL INFORMATION DO WE COLLECT?
                    </a>
                  </li>
                  <li>
                    <a href="#question-13">
                      DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </a>
                  </li>
                  <li>
                    <a href="#question-14">
                      DO WE MAKE UPDATES TO THIS NOTICE?
                    </a>
                  </li>
                  <li>
                    <a href="#question-15">
                      HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </a>
                  </li>
                  <li>
                    <a href="#question-16">
                      HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                      FROM YOU?
                    </a>
                  </li>
                </ol>
              </div>

              <div id="question-1" className={Style.sub_content_section}>
                <h3>
                  <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We collect personal information
                  that you provide to us.
                </p>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </p>
                <p>
                  <strong>Personal Information Provided by You.</strong> The
                  personal information that we collect depends on the context of
                  your interactions with us and the Services, the choices you
                  make, and the products and features you use. The personal
                  information we collect may include the following:
                </p>
                <ul>
                  <li>Names</li>
                  <li>Phone numbers</li>
                  <li>Email addresses</li>
                  <li>Mailing addresses</li>
                  <li>Contact preferences</li>
                  <li>Contact or authentication data</li>
                  <li>Billing addresses</li>
                  <li>Debit/credit card numbers</li>
                </ul>
                <p>
                  <strong>Sensitive Information.</strong> When necessary, with
                  your consent or as otherwise permitted by applicable law, we
                  process the following categories of sensitive information:
                  financial data
                </p>
                <p>
                  <strong>Payment Data</strong>. We may collect data necessary
                  to process your payment if you make purchases, such as your
                  payment instrument number, and the security code associated
                  with your payment instrument. All payment data is stored by
                  Stripe. You may find their privacy notice link(s) here:
                  <a href="https://stripe.com/en-in/privacy">
                    https://stripe.com/en-in/privacy
                  </a>
                  .
                </p>
                <p>
                  <strong>Social Media Login Data.</strong> We may provide you
                  with the option to register with us using your existing social
                  media account details, like your Facebook, Twitter, or other
                  social media account. If you choose to register in this way,
                  we will collect the information described in the section
                  called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
                </p>
                <p>
                  <strnog>Application Data</strnog>. If you use our
                  application(s), we also may collect the following information
                  if you choose to provide us with access or permission:
                </p>
                <p>
                  <strong>Geolocation Information</strong>. We may request
                  access or permission to track location-based information from
                  your mobile device, either continuously or while you are using
                  our mobile application(s), to provide certain location-based
                  services. If you wish to change our access or permissions, you
                  may do so in your device's settings.
                </p>
                <p>
                  <strnog>Mobile Device Data</strnog>. We automatically collect
                  device information (such as your mobile device ID, model, and
                  manufacturer), operating system, version information and
                  system configuration information, device and application
                  identification numbers, browser type and version, hardware
                  model Internet service provider and/or mobile carrier, and
                  Internet Protocol (IP) address (or proxy server). If you are
                  using our application(s), we may also collect information
                  about the phone network associated with your mobile device,
                  your mobile device’s operating system or platform, the type of
                  mobile device you use, your mobile device’s unique device ID,
                  and information about the features of our application(s) you
                  accessed. This information is primarily needed to maintain the
                  security and operation of our application(s), for
                  troubleshooting, and for our internal analytics and reporting
                  purposes.
                </p>
                <p>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </p>
                <p>
                  <strong>Information automatically collected In Short</strong>:
                  Some information — such as your Internet Protocol (IP) address
                  and/or browser and device characteristics — is collected
                  automatically when you visit our Services.
                </p>
                <p>
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical information. This
                  information is primarily needed to maintain the security and
                  operation of our Services, and for our internal analytics and
                  reporting purposes.
                </p>
                <p>
                  Like many businesses, we also collect information through
                  cookies and similar technologies. You can find out more about
                  this in our Cookie Notice:
                  <a href="https://www.eagle-bot.com/cookiepolicy">
                    https://www.eagle-bot.com/cookiepolicy
                  </a>
                  .
                </p>
                <p>
                  <strong>The information we collect includes:</strong>
                </p>
                <p>
                  <b>Log and Usage Data.</b> Log and usage data is
                  service-related, diagnostic, usage, and performance
                  information our servers automatically collect when you access
                  or use our Services and which we record in log files.
                  Depending on how you interact with us, this log data may
                  include your IP address, device information, browser type, and
                  settings and information about your activity in the Services
                  (such as the date/time stamps associated with your usage,
                  pages and files viewed, searches, and other actions you take
                  such as which features you use), device event information
                  (such as system activity, error reports (sometimes called
                  "crash dumps"), and hardware{" "}
                </p>
                <p>
                  <b> Device Data</b>. We collect device data such as
                  information about your computer, phone, tablet, or other
                  device you use to access the Services. Depending on the device
                  used, this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, browser type, hardware
                  model, Internet service provider and/or mobile carrier,
                  operating system, and system configuration information.
                </p>
                <p>
                  <b>Location Data.</b> We collect location data such as
                  information about your device's location, which can be either
                  precise or imprecise. How much information we collect depends
                  on the type and settings of the device you use to access the
                  Services. For example, we may use GPS and other technologies
                  to collect geolocation data that tells us your current
                  location (based on your IP address). You can opt out of
                  allowing us to collect this information either by refusing
                  access to the information or by disabling your Location
                  setting on your device. However, if you choose to opt out, you
                  may not be able to use certain aspects of the Services
                </p>
              </div>
              <div id="question-2" className={Style.sub_content_section}>
                <h3>
                  <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We process your information to
                  provide, improve, and administer our Services, communicate
                  with you, for security and fraud prevention, and to comply
                  with the law. We may also process your information for other
                  purposes with your consent.
                </p>
                <p>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
                <ul>
                  <li>
                    To streamline the process of creating and authenticating
                    accounts while effectively managing user profiles, we may
                    handle your data. This enables you to easily establish and
                    access your account while ensuring its smooth operation.
                    It's important to note that accounts on EagleBot are
                    established through third-party authentication services such
                    as Google, Apple, Microsoft, Atlassian, Twitter, AWS and
                    Whatsapp. As a result, the data of users who create accounts
                    on EagleBot is also retained by the authentication providers
                    they use to log in to the application. Please find their
                    privacy policies here:
                    <ul>
                      <li>
                        <a href="https://policies.google.com/privacy?hl=en-US">
                          Google: https://policies.google.com/privacy?hl=en-US
                        </a>
                      </li>
                      <li>
                        <a href="https://privacy.microsoft.com/en-ca/privacystatement">
                          Microsoft:
                          https://privacy.microsoft.com/en-ca/privacystatement
                        </a>
                      </li>
                      <li>
                        <a href="https://www.apple.com/legal/privacy/en-ww/">
                          Apple: https://www.apple.com/legal/privacy/en-ww/
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/en/privacy">
                          Twitter: https://twitter.com/en/privacy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.whatsapp.com/legal/privacy-policy">
                          WhatsApp:
                          https://www.whatsapp.com/legal/privacy-policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers">
                          Atlassian:
                          https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers
                        </a>
                      </li>
                      <li>
                        <a href="https://aws.amazon.com/privacy/">
                          AWS: https://aws.amazon.com/privacy/
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    To deliver and facilitate delivery of services to the user.
                    We may process your information to provide you with the
                    requested service.
                  </li>
                  <li>
                    To respond to user inquiries/offer support to users. We may
                    process your information to respond to your inquiries and
                    solve any potential issues you might have with the requested
                    service.
                  </li>
                  <li>
                    To send administrative information to you. We may process
                    your information to send you details about our products and
                    services, changes to our terms and policies, and other
                    similar information..
                  </li>
                  <li>
                    To fulfill and manage your orders. We may process your
                    information to fulfill and manage your orders, payments,
                    returns, and exchanges made through the Services.
                  </li>
                  <li>
                    To request feedback. We may process your information when
                    necessary to request feedback and to contact you about your
                    use of our Services.
                  </li>
                  <li>
                    To send you marketing and promotional communications. We may
                    process the personal information you send to us for our
                    marketing purposes, if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time. For more information, see "WHAT ARE YOUR
                    PRIVACY RIGHTS?" below.
                  </li>
                  <li>
                    To protect our Services. We may process your information as
                    part of our efforts to keep our Services safe and secure,
                    including fraud monitoring and prevention.
                  </li>
                  <li>
                    To identify usage trends. We may process information about
                    how you use our Services to better understand how they are
                    being used so we can improve them.
                  </li>
                  <li>
                    To determine the effectiveness of our marketing and
                    promotional campaigns. We may process your information to
                    better understand how to provide marketing and promotional
                    campaigns that are most relevant to you.
                  </li>
                  <li>
                    To save or protect an individual's vital interest. We may
                    process your information when necessary to save or protect
                    an individual’s vital interest, such as to prevent harm.
                  </li>
                </ul>
                <h2>EAGLE BOT “Robotic Process Automation (RPA) DISCLAIMER</h2>
                <p>
                  The RPA (Robotic Process Automation) feature of Eagle Bot is a
                  first in the world and currently in the Beta testing phase.
                  This feature serves as a tool to enable automation replay with
                  backend AI engines for assistance in Smart RPA Automations.
                  This feature logs keystrokes and mouse clicks and users are
                  hereby advised to exercise caution and prudence when utilizing
                  this feature.
                </p>
                <p>
                  <strnog>
                    Please be aware that during the Beta testing phase, Eagle
                    Bot's RPA feature is not intended for handling sensitive
                    data, including but not limited to credentials, financial
                    information, or other highly sensitive data types
                  </strnog>
                  . This will change in the near future, however, presently,
                  users who choose to input such data into the system while
                  training the AI algorithms do so at their own discretion and
                  risk. We will clearly notify all users when there are controls
                  built in to handle sensitive data through the platform and by
                  sending notifications to every user via email.
                </p>
                <p>
                  Eagle Bot holds no liabilities or responsibilities for any
                  potential consequences arising from the inclusion of sensitive
                  data in the RPA training process. Users are strongly
                  encouraged to use placeholder or dummy data for training
                  purposes to safeguard sensitive information.
                </p>
                <p>
                  By participating in the Beta testing of Eagle Bot's RPA
                  feature, users acknowledge and accept the terms of this
                  disclaimer, and they assume full responsibility for their
                  actions and data input choices. Eagle Bot is not liable for
                  any issues, losses, or damages that may arise from the misuse
                  or inclusion of sensitive data during the Beta testing of the
                  RPA feature.
                </p>
              </div>
              <div id="question-3" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                    INFORMATION?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We only process your personal
                  information when we believe it is necessary and we have a
                  valid legal reason (i.e., legal basis) to do so under
                  applicable law, like with your consent, to comply with laws,
                  to provide you with services to enter into or fulfill our
                  contractual obligations, to protect your rights, or to fulfill
                  our legitimate business interests.
                </p>
                <p>
                  <u>
                    If you are located in the EU or UK, this section applies to
                    you
                  </u>
                  .
                </p>
                <p>
                  The General Data Protection Regulation (GDPR) and UK GDPR
                  require us to explain the valid legal bases we rely on in
                  order to process your personal information. As such, we may
                  rely on the following legal bases to process your personal
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Consent.</strong> We may process your information if
                    you have given us permission (i.e., consent) to use your
                    personal information for a specific purpose. You can
                    withdraw your consent at any time.
                  </li>
                  <li>
                    <strong>Performance of a Contract.</strong> We may process
                    your personal information when we believe it is necessary to
                    fulfill our contractual obligations to you, including
                    providing our Services or at your request prior to entering
                    into a contract with you.
                  </li>
                  <li>
                    <strong>Legitimate Interests.</strong> We may process your
                    information when we believe it is reasonably necessary to
                    achieve our legitimate business interests, and those
                    interests do not outweigh your interests and fundamental
                    rights and freedoms. For example, we may process your
                    personal information for some of the purposes described in
                    order to:
                  </li>
                  <ul>
                    <li>
                      Send users information about special offers and discounts
                      on our products and services
                    </li>
                    <li>
                      Analyze how our Services are used so we can improve them
                      to engage and retain users
                    </li>
                    <li>Support our marketing activities</li>
                    <li>
                      Diagnose problems and/or prevent fraudulent activities
                    </li>
                    <li>
                      Understand how our users use our products and services so
                      we can improve user experience
                    </li>
                  </ul>
                  <li>
                    <strong>Legal Obligations.</strong> We may process your
                    information where we believe it is necessary for compliance
                    with our legal obligations, such as to cooperate with a law
                    enforcement body or regulatory agency, exercise or defend
                    our legal rights, or disclose your information as evidence
                    in litigation in which we are involved.
                  </li>
                  <li>
                    <strong>Vital Interests.</strong> We may process your
                    information where we believe it is necessary to protect your
                    vital interests or the vital interests of a third party,
                    such as situations involving potential threats to the safety
                    of any person.
                  </li>
                </ul>
                <p>
                  <u>
                    If you are located in Canada, this section applies to you.
                  </u>
                </p>
                <p>
                  We may process your information if you have given us specific
                  permission (i.e., express consent) to use your personal
                  information for a specific purpose, or in situations where
                  your permission can be inferred (i.e., implied consent). You
                  can withdraw your consent at any time.
                </p>
                <p>
                  In some exceptional cases, we may be legally permitted under
                  applicable law to process your information without your
                  consent, including, for example:
                </p>
                <ul>
                  <li>
                    If collection is clearly in the interests of an individual
                    and consent cannot be obtained in a timely way
                  </li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>
                    For business transactions provided certain conditions are
                    met
                  </li>
                  <li>
                    If it is contained in a witness statement and the collection
                    is necessary to assess, process, or settle an insurance
                    claim
                  </li>
                  <li>
                    For identifying injured, ill, or deceased persons and
                    communicating with next of kin
                  </li>
                  <li>
                    If we have reasonable grounds to believe an individual has
                    been, is, or may be a victim of financial abuse
                  </li>
                  <li>
                    If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province
                  </li>
                  <li>
                    If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records
                  </li>
                  <li>
                    If it was produced by an individual in the course of their
                    employment, business, or profession and the collection is
                    consistent with the purposes for which the information was
                    produced
                  </li>
                  <li>
                    If the collection is solely for journalistic, artistic, or
                    literary purposes
                  </li>
                  <li>
                    If the information is publicly available and is specified by
                    the regulations
                  </li>
                </ul>
              </div>
              <div id="question-4" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We may share information in
                  specific situations described in this section and/or with the
                  following third parties.
                </p>
                <p>
                  <strong>
                    Vendors, Consultants, and Other Third-Party Service
                    Providers
                  </strong>
                  . We may share your data with third-party vendors, service
                  providers, contractors, or agents ("third parties") who
                  perform services for us or on our behalf and require access to
                  such information to do that work. We have contracts in place
                  with our third parties, which are designed to help safeguard
                  your personal information. This means that they cannot do
                  anything with your personal information unless we have
                  instructed them to do it. They will also not share your
                  personal information with any organization apart from us. They
                  also commit to protect the data they hold on our behalf and to
                  retain it for the period we instruct. The categories of third
                  parties we may share personal information with are as follows:
                </p>
                <ul>
                  <li>Cloud Computing Services</li>
                  <li>Communication & Collaboration Tools</li>
                  <li>Data Analytics Services</li>
                  <li>Data Storage Service Providers</li>
                  <li>Finance & Accounting Tools</li>
                  <li>Payment Processors</li>
                  <li>Performance Monitoring Tools</li>
                  <li>Sales & Marketing Tools</li>
                  <li>Testing Tools</li>
                  <li>User Account Registration & Authentication Services</li>
                  <li>Website Hosting Service Providers</li>
                  <li>Affiliate Marketing Programs</li>
                </ul>
                <p>
                  We also may need to share your personal information in the
                  following situations:
                </p>
                <ul>
                  <li>
                    <strong>Business Transfers.</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                  </li>
                  <li>
                    <strong>Affiliates.</strong> We may share your information
                    with our affiliates, in which case we will require those
                    affiliates to honor this privacy notice. Affiliates include
                    our parent company and any subsidiaries, joint venture
                    partners, or other companies that we control or that are
                    under common control with us.
                  </li>
                  <li>
                    <strong>Business Partners.</strong> We may share your
                    information with our business partners to offer you certain
                    products, services, or promotions.
                  </li>
                </ul>
              </div>
              <div id="question-5" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We may use cookies and other
                  tracking technologies to collect and store your information.
                </p>
                <p>
                  We may use cookies and similar tracking technologies to access
                  or store information. Specific information about how we use
                  such technologies and how you can refuse certain cookies is
                  set out in our Cookie Notice:
                  <a href="http://www.eagle-bot.com/cookiepolicy">
                    http://www.eagle-bot.com/cookiepolicy
                  </a>
                </p>
              </div>

              <div id="question-6" className={Style.sub_content_section}>
                <h3>
                  <strong>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> If you choose to register or log in
                  to our Services using a social media account, we may have
                  access to certain information about you.
                </p>
                <p>
                  Our Services offer you the ability to register and log in
                  using your third-party social media account details (like your
                  Facebook or Twitter logins). Where you choose to do this, we
                  will receive certain profile information about you from your
                  social media provider. The profile information we receive may
                  vary depending on the social media provider concerned, but
                  will often include your name, email address, friends list (
                  <strong>requires additional user consent</strong>S), and
                  profile picture, as well as other information you choose to
                  make public on such a social media platform.
                </p>
                <p>
                  We will use the information we receive only for the purposes
                  that are described in this privacy notice or that are
                  otherwise made clear to you on the relevant Services. Please
                  note that we do not control, and are not responsible for,
                  other uses of your personal information by your third-party
                  social media provider. We recommend that you review their
                  privacy notice to understand how they collect, use, and share
                  your personal information, and how you can set your privacy
                  preferences on their sites and apps.
                </p>
              </div>

              <div id="question-6" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We may transfer, store, and process
                  your information in countries other than your own.
                </p>
                <p>
                  Our servers are located in the United States, Poland and
                  India. If you are accessing our Services from outside the
                  United States, Poland and India, please be aware that your
                  information may be transferred to, stored, and processed by us
                  in our facilities and by those third parties with whom we may
                  share your personal information (see "WHEN AND WITH WHOM DO WE
                  SHARE YOUR PERSONAL INFORMATION?" above), in and other
                  countries.
                </p>
                <p>
                  IIf you are a resident in the European Economic Area (EEA),
                  United Kingdom (UK), or Switzerland, then these countries may
                  not necessarily have data protection laws or other similar
                  laws as comprehensive as those in your country. However, we
                  will take all necessary measures to protect your personal
                  information in accordance with this privacy notice and
                  applicable law.
                </p>
                <p>
                  <u>European Commission's Standard Contractual Clauses:</u>
                </p>
                <p>
                  We have implemented measures to protect your personal
                  information, including by using the European Commission's
                  Standard Contractual Clauses for transfers of personal
                  information between our group companies and between us and our
                  third-party providers. These clauses require all recipients to
                  protect all personal information that they process originating
                  from the EEA or UK in accordance with European data protection
                  laws and regulations. Our Standard Contractual Clauses can be
                  provided upon request. We have implemented similar appropriate
                  safeguards with our third-party service providers and partners
                  and further details can be provided upon request.
                </p>
              </div>
              <div id="question-8" className={Style.sub_content_section}>
                <h3>
                  <strong>8. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We keep your information for as
                  long as necessary to fulfill the purposes outlined in this
                  privacy notice unless otherwise required by law.
                </p>
                <p>
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements). No
                  purpose in this notice will require us to keep your personal
                  information for longer than the period of time in which users
                  have an account with us.
                </p>
                <p>
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </p>
              </div>
              <div id="question-9" className={Style.sub_content_section}>
                <h3>
                  <strong>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We aim to protect your personal
                  information through a system of organizational and technical
                  security measures.
                </p>
                <p>
                  We have implemented appropriate and reasonable technical and
                  organizational security measures designed to protect the
                  security of any personal information we process. However,
                  despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Services is at your own risk. You should only
                  access the Services within a secure environment.
                </p>
              </div>
              <div id="question-10" className={Style.sub_content_section}>
                <h3>
                  <strong>10. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> In some regions, such as the
                  European Economic Area (EEA), United Kingdom (UK),
                  Switzerland, and Canada, you have rights that allow you
                  greater access to and control over your personal information.
                  You may review, change, or terminate your account at any time.
                </p>
                <p>
                  In some regions (like the EEA, UK, Switzerland, and Canada),
                  you have certain rights under applicable data protection laws.
                  These may include the right (i) to request access and obtain a
                  copy of your personal information, (ii) to request
                  rectification or erasure; (iii) to restrict the processing of
                  your personal information; (vi) if applicable, to data
                  portability; and (vii) not to be subject to automated
                  decision-making. In certain circumstances, you may also have
                  the right to object to the processing of your personal
                  information. You can make such a request by contacting us
                  using the contact details provided in the section "HOW CAN YOU
                  CONTACT US ABOUT THIS NOTICE?" below.
                </p>
                <p>
                  We will consider and act upon any request in accordance with
                  applicable data protection laws.
                </p>
                <p>
                  If you are located in the EEA or UK and you believe we are
                  unlawfully processing your personal information, you also have
                  the right to complain to your Member State data protection
                  authority or UK data protection authority.
                </p>
                <p>
                  If you are located in Switzerland, you may contact the Federal
                  Data Protection and Information Commissioner.
                </p>
                <p>
                  <strong>Withdrawing your consent:</strong> If we are relying
                  on your consent to process your personal information, which
                  may be express and/or implied consent depending on the
                  applicable law, you have the right to withdraw your consent at
                  any time. You can withdraw your consent at any time by
                  contacting us using the contact details provided in the
                  section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                </p>
                <p>
                  However, please note that this will not affect the lawfulness
                  of the processing before its withdrawal nor, when applicable
                  law allows, will it affect the processing of your personal
                  information conducted in reliance on lawful processing grounds
                  other than consent.
                </p>
                <p>
                  <strong>
                    Opting out of marketing and promotional communications:
                  </strong>
                  You can unsubscribe from our marketing and promotional
                  communications at any time by clicking on the unsubscribe link
                  in the emails that we send, or by contacting us using the
                  details provided in the section "HOW CAN YOU CONTACT US ABOUT
                  THIS NOTICE?" below. You will then be removed from the
                  marketing lists. However, we may still communicate with you —
                  for example, to send you service-related messages that are
                  necessary for the administration and use of your account, to
                  respond to service requests, or for other non-marketing
                  purposes.
                </p>
                <p>
                  <strong>Account Information:</strong> If you would at any time
                  like to review or change the information in your account or
                  terminate your account, you can:
                </p>

                <ul>
                  <li>
                    Log in to your account settings and update your user account
                  </li>
                  <li>Contact us using the contact information provided.</li>
                  <li>
                    Upon your request to terminate your account, we will
                    deactivate or delete your account and information from our
                    active databases. However, we may retain some information in
                    our files to prevent fraud, troubleshoot problems, assist
                    with any investigations, enforce our legal terms and/or
                    comply with applicable legal requirements.
                  </li>
                </ul>

                <p>
                  <strong>Cookies and similar technologies</strong>: Most Web
                  browsers are set to accept cookies by default. If you prefer,
                  you can usually choose to set your browser to remove cookies
                  and to reject cookies. If you choose to remove cookies or
                  reject cookies, this could affect certain features or services
                  of our Services. For further information, please see our
                  Cookie Notice:{" "}
                  <a href="http://www.eagle-bot.com/cookiepolicy">
                    http://www.eagle-bot.com/cookiepolicy
                  </a>
                  .
                </p>
                <p>
                  If you have questions or comments about your privacy rights,
                  you may email us at privacy@eagle-bot.com.
                </p>
              </div>
              <div id="question-11" className={Style.sub_content_section}>
                <h3>
                  <strong>11. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
                </h3>
                <p>
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  privacy notice.
                </p>
              </div>
              <div id="question-12" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                    RIGHTS??
                  </strong>
                </h3>
                <p>
                  <strong>In Short: </strong> If you are a resident of
                  California, Colorado, Connecticut, Utah or Virginia, you are
                  granted specific rights regarding access to your personal
                  information.
                </p>
                <p>
                  <u>What categories of personal information do we collect?</u>
                </p>
                <p>
                  We have collected the following categories of personal
                  information in the past twelve (12) months:
                </p>
                <table className={Style.table}>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Examples</th>
                      <th>Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A. Identifiers</td>
                      <td>
                        Contact details, such as real name, alias, postal
                        address, telephone or mobile contact number, unique
                        personal identifier, online identifier, Internet
                        Protocol address, email address, and account name
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        B. Personal information categories listed in the
                        California Customer Records statute
                      </td>
                      <td>Education, employment, and employment history.</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        C. Protected classification characteristics under
                        California or federal law
                      </td>
                      <td>Gender and date of birth</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>D. Commercial information</td>
                      <td>
                        Transaction information, purchase history, financial
                        details, and payment information for purchases made on
                        the Eagle Bot Platform
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>E. Biometric information</td>
                      <td>Fingerprints and voiceprints</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>F. Internet or other similar network activity</td>
                      <td>
                        Browsing history, search history, online behavior,
                        interest data, and interactions with our and other
                        websites, applications, systems, and advertisements on
                        the Eagle Browser
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>G. Geolocation data</td>
                      <td>Device location</td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        H. Audio, electronic, visual, thermal, olfactory, or
                        similar information
                      </td>
                      <td>
                        Images and audio, video or call recordings created in
                        connection with our business activities
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>I. Professional or employment-related information</td>
                      <td>
                        Business contact details in order to provide you our
                        Services at a business level or job title, work history,
                        and professional qualifications if you apply for a job
                        with us
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>J. Education Information</td>
                      <td>Student records and directory information</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        K. Inferences drawn from collected personal information
                      </td>
                      <td>
                        Inferences drawn from any of the collected personal
                        information listed above to create a profile or summary
                        about, for example, an individual's preferences and
                        characteristics
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>L. Sensitive Personal Information</td>
                      <td>
                        Account login information, debit or credit card numbers
                        and precise geolocation
                      </td>
                      <td>YES</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We will use and retain the collected personal information as
                  needed to provide the Services or for:
                </p>
                <p>Category A - As long as the user has an account with us</p>
                <p>Category D - As long as the user has an account with us</p>
                <p>Category F - As long as the user has an account with us</p>
                <p>Category G - As long as the user has an account with us</p>
                <p>Category L - As long as the user has an account with us</p>
                <p>
                  Category L information may be used, or disclosed to a service
                  provider or contractor, for additional, specified purposes.
                  You have the right to limit the use or disclosure of your
                  sensitive personal information.
                </p>
                <p>
                  We may also collect other personal information outside of
                  these categories through instances where you interact with us
                  in person, online, or by phone or mail in the context of:
                </p>
                <ul>
                  <li>Receiving help through our customer support channels;</li>
                  <li>Participation in customer surveys or contests; and</li>
                  <li>
                    Facilitation in the delivery of our Services and to respond
                    to your inquiries
                  </li>
                </ul>
                <p>How do we use and share your personal information?</p>
                <p>
                  <b>
                    We do not engage in the SALE of any user data collected. The
                    sole purpose of collecting this data is to ensure the proper
                    functioning of the Eagle Bot platform.
                  </b>
                </p>
                <p>
                  Learn about how we use your personal information in the
                  section, "HOW DO WE PROCESS YOUR INFORMATION?"
                </p>
                <p>
                  <strnog>
                    Will your information be shared with anyone else?
                  </strnog>
                </p>
                <p>
                  We may disclose your personal information with our service
                  providers pursuant to a written contract between us and each
                  service provider. Learn more about how we disclose personal
                  information in the section, "WHEN AND WITH WHOM DO WE SHARE
                  YOUR PERSONAL INFORMATION?"
                </p>
                <p>
                  We may use your personal information for our own business
                  purposes, such as for undertaking internal research for
                  technological development and demonstration. This is not
                  considered to be "selling" your personal information.
                </p>
                <p>
                  We have not sold or shared any personal information to third
                  parties for a business or commercial purpose in the preceding
                  twelve (12) months
                </p>
                <p>
                  <b>California Residents</b>
                </p>
                <p>
                  California Civil Code Section 1798.83, also known as the
                  "Shine The Light" law permits our users who are California
                  residents to request and obtain from us, once a year and free
                  of charge, information about categories of personal
                  information (if any) we disclosed to third parties for direct
                  marketing purposes and the names and addresses of all third
                  parties with which we shared personal information in the
                  immediately preceding calendar year. If you are a California
                  resident and would like to make such a request, please submit
                  your request in writing to us using the contact information
                  provided below.
                </p>
                <p>
                  If you are under 18 years of age, reside in California, and
                  have a registered account with the Services, you have the
                  right to request removal of unwanted data that you publicly
                  post on the Services. To request removal of such data, please
                  contact us using the contact information provided below and
                  include the email address associated with your account and a
                  statement that you reside in California. We will make sure the
                  data is not publicly displayed on the Services, but please be
                  aware that the data may not be completely or comprehensively
                  removed from all our systems (e.g., backups, etc.).
                </p>
                <p>
                  <strong>CCPA Privacy Notice</strong>
                </p>
                <p>
                  This section applies only to California residents. Under the
                  California Consumer Privacy Act (CCPA), you have the rights
                  listed below.
                </p>
                <p>
                  The California Code of Regulations defines a "residents" as:
                </p>
                <p>
                  (1) every individual who is in the State of California for
                  other than a temporary or transitory purpose and
                </p>
                <p>
                  (2) every individual who is domiciled in the State of
                  California who is outside the State of California for a
                  temporary or transitory purpose
                </p>
                <p>All other individuals are defined as "non-residents."</p>
                <p>
                  If this definition of "resident" applies to you, we must
                  adhere to certain rights and obligations regarding your
                  personal information.
                </p>
                <p>Your rights with respect to your personal data</p>
                <p>
                  <u>
                    Right to request deletion of the data — Request to delete
                  </u>
                </p>
                <p>
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation, or any processing that may be
                  required to protect against illegal activities.
                </p>
                <p>
                  <u>Right to be informed — Request to know</u>
                </p>
                <p>Depending on the circumstances, you have a right to know:</p>
                <ul>
                  <li>whether we collect and use your personal information;</li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li>
                    whether we sell or share personal information to third
                    parties;
                  </li>
                  <li>
                    the categories of personal information that we sold, shared,
                    or disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal
                    information was sold, shared, or disclosed for a business
                    purpose;
                  </li>
                  <li>
                    the business or commercial purpose for collecting, selling,
                    or sharing personal information; and
                  </li>
                  <li>
                    the specific pieces of personal information we collected
                    about you.
                  </li>
                  <li>
                    In accordance with applicable law, we are not obligated to
                    provide or delete consumer information that is de-identified
                    in response to a consumer request or to re-identify
                    individual data to verify a consumer request.
                  </li>
                </ul>
                <p>
                  <u>
                    Right to Non-Discrimination for the Exercise of a Consumer’s
                    Privacy Rights
                  </u>
                </p>
                <p>
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </p>
                <p>
                  Right to Limit Use and Disclosure of Sensitive Personal
                  Information
                </p>
                <p>If the business collects any of the following:</p>
                <ul>
                  <li>
                    social security information, drivers' licenses, state ID
                    cards, passport numbers
                  </li>
                  <li>account login information</li>
                  <li>
                    credit card numbers, financial account information, or
                    credentials allowing access to such accounts
                  </li>
                  <li>precise geolocation</li>
                  <li>
                    racial or ethnic origin, religious or philosophical beliefs,
                    union membership
                  </li>
                  <li>
                    the contents of email and text, unless the business is the
                    intended recipient of the communication
                  </li>
                  <li>genetic data, biometric data, and health data</li>
                  <li>data concerning sexual orientation and sex life</li>
                  <li>
                    you have the right to direct that business to limit its use
                    of your sensitive personal information to that use which is
                    necessary to perform the Services.
                  </li>
                </ul>
                <p>
                  Once a business receives your request, they are no longer
                  allowed to use or disclose your sensitive personal information
                  for any other purpose unless you provide consent for the use
                  or disclosure of sensitive personal information for additional
                  purposes.
                </p>
                <p>
                  Please note that sensitive personal information that is
                  collected or processed without the purpose of inferring
                  characteristics about a consumer is not covered by this right,
                  as well as the publicly available information.
                </p>
                <p>
                  To exercise your right to limit use and disclosure of
                  sensitive personal information, please email
                  privacy@eagle-bot.com or visit:
                  <a href="https://www.eagle-bot.com/contact">
                    https://www.eagle-bot.com/contact
                  </a>
                  .
                </p>
                <p>
                  <b>Verification process</b>
                </p>
                <p>
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g., phone or email) that you have previously
                  provided to us. We may also use other verification methods as
                  the circumstances dictate.
                </p>
                <p>
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification.
                  However, if we cannot verify your identity from the
                  information already maintained by us, we may request that you
                  provide additional information for the purposes of verifying
                  your identity and for security or fraud-prevention purposes.
                  We will delete such additionally provided information as soon
                  as we finish verifying you.
                </p>
                <p>
                  <strong>Other privacy rights</strong>
                  <ul>
                    <li>
                      You may object to the processing of your personal
                      information.
                    </li>
                    <li>
                      You may request correction of your personal data if it is
                      incorrect or no longer relevant, or ask to restrict the
                      processing of the information.
                    </li>
                    <li>
                      You can designate an authorized agent to make a request
                      under the CCPA on your behalf. We may deny a request from
                      an authorized agent that does not submit proof that they
                      have been validly authorized to act on your behalf in
                      accordance with the CCPA.
                    </li>
                    <li>
                      You may request to opt out from future selling or sharing
                      of your personal information to third parties. Upon
                      receiving an opt-out request, we will act upon the request
                      as soon as feasibly possible, but no later than fifteen
                      (15) days from the date of the request submission.
                    </li>
                    <li>
                      To exercise these rights, you can contact us by visiting{" "}
                      <a href="https://www.eagle-bot.com/contact">
                        https://www.eagle-bot.com/contact
                      </a>
                      , by email at{" "}
                      <a href="mailto:privacy@eagle-bot.com">
                        privacy@eagle-bot.com
                      </a>
                      , by visiting{" "}
                      <a href="https://www.eagle-bot.com/contact">
                        https://www.eagle-bot.com/contact
                      </a>
                      , or by referring to the contact details at the bottom of
                      this document. If you have a complaint about how we handle
                      your data, we would like to hear from you.
                    </li>
                  </ul>
                  <p>
                    <b>Colorado Residents</b>
                  </p>
                  <p>
                    This section applies only to Colorado residents. Under the
                    Colorado Privacy Act (CPA), you have the rights listed
                    below. However, these rights are not absolute, and in
                    certain cases, we may decline your request as permitted by
                    law.
                  </p>
                  <ul>
                    <li>
                      Right to be informed whether or not we are processing your
                      personal data
                    </li>
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccuracies in your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>
                      Right to obtain a copy of the personal data you previously
                      shared with us
                    </li>
                    <li>
                      Right to opt out of the processing of your personal data
                      if it is used for targeted advertising, the sale of
                      personal data, or profiling in furtherance of decisions
                      that produce legal or similarly significant effects
                      ("profiling")
                    </li>
                    <li>
                      To submit a request to exercise these rights described
                      above, please email{" "}
                      <a href="mailto:privacy@eagle-bot.com">
                        privacy@eagle-bot.com
                      </a>{" "}
                      or visit{" "}
                      <a href="https://www.eagle-bot.com/contact">
                        https://www.eagle-bot.com/contact
                      </a>
                      .
                    </li>
                  </ul>
                  <p>
                    If we decline to take action regarding your request and you
                    wish to appeal our decision, please email us at
                    privacy@eagle-bot.com. Within forty-five (45) days of
                    receipt of an appeal, we will inform you in writing of any
                    action taken or not taken in response to the appeal,
                    including a written explanation of the reasons for the
                    decisions.
                  </p>
                </p>
                <p>
                  <b>Connecticut Residents</b>
                </p>
                <p>
                  This section applies only to Connecticut residents. Under the
                  Connecticut Data Privacy Act (CTDPA), you have the rights
                  listed below. However, these rights are not absolute, and in
                  certain cases, we may decline your request as permitted by
                  law.
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your
                    personal data
                  </li>
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccuracies in your personal data</li>
                  <li>Right to request deletion of your personal data</li>
                  <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising, the sale of personal
                    data, or profiling in furtherance of decisions that produce
                    legal or similarly significant effects ("profiling")
                  </li>
                  <li>
                    To submit a request to exercise these rights described
                    above, please email privacy@eagle-bot.com or visit{" "}
                    <a href="https://www.eagle-bot.com/contact">
                      https://www.eagle-bot.com/contact
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  If we decline to take action regarding your request and you
                  wish to appeal our decision, please email us at
                  privacy@eagle-bot.com. Within sixty (60) days of receipt of an
                  appeal, we will inform you in writing of any action taken or
                  not taken in response to the appeal, including a written
                  explanation of the reasons for the decisions.
                </p>
                <p>
                  <b>Utah Residents</b>
                </p>
                <p>
                  This section applies only to Utah residents. Under the Utah
                  Consumer Privacy Act (UCPA), you have the rights listed below.
                  However, these rights are not absolute, and in certain cases,
                  we may decline your request as permitted by law.
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your
                    personal data
                  </li>
                  <li>Right to access your personal data</li>
                  <li>Right to request deletion of your personal data</li>
                  <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising or the sale of personal
                    data
                  </li>
                  <li>
                    To submit a request to exercise these rights described
                    above, please email privacy@eagle-bot.com or visit{" "}
                    <a href="https://www.eagle-bot.com/contact">
                      https://www.eagle-bot.com/contact
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  <b>Virginia Residents</b>
                </p>
                <p>Under the Virginia Consumer Data Protection Act (VCDPA):</p>
                <p>
                  "Consumer" means a natural person who is a resident of the
                  Commonwealth acting only in an individual or household
                  context. It does not include a natural person acting in a
                  commercial or employment context.
                </p>
                <p>
                  "Personal data" means any information that is linked or
                  reasonably linkable to an identified or identifiable natural
                  person. "Personal data" does not include de-identified data or
                  publicly available information.
                </p>
                <p>
                  "Sale of personal data" means the exchange of personal data
                  for monetary consideration.
                </p>
                <p>
                  If this definition of "consumer" applies to you, we must
                  adhere to certain rights and obligations regarding your
                  personal data.
                </p>
                <p>Your rights with respect to your personal data</p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your
                    personal data
                  </li>
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccuracies in your personal data</li>
                  <li>Right to request deletion of your personal data</li>
                  <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising, the sale of personal
                    data, or profiling in furtherance of decisions that produce
                    legal or similarly significant effects ("profiling")
                  </li>
                  <li>
                    Exercise your rights provided under the Virginia VCDPA
                  </li>
                  <li>
                    You may contact us by email at privacy@eagle-bot.com or
                    visit{" "}
                    <a href="https://www.eagle-bot.com/contact">
                      https://www.eagle-bot.com/contact
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  If you are using an authorized agent to exercise your rights,
                  we may deny a request if the authorized agent does not submit
                  proof that they have been validly authorized to act on your
                  behalf.
                </p>
                <p>
                  <b>Verification process</b>
                </p>
                <p>
                  We may request that you provide additional information
                  reasonably necessary to verify you and your consumer's
                  request. If you submit the request through an authorized
                  agent, we may need to collect additional information to verify
                  your identity before processing your request.
                </p>
                <p>
                  Upon receiving your request, we will respond without undue
                  delay, but in all cases, within forty-five (45) days of
                  receipt. The response period may be extended once by
                  forty-five (45) additional days when reasonably necessary. We
                  will inform you of any such extension within the initial
                  45-day response period, together with the reason for the
                  extension.
                </p>
                <p>
                  <b>Right to appeal</b>
                </p>
                <p>
                  If we decline to take action regarding your request, we will
                  inform you of our decision and reasoning behind it. If you
                  wish to appeal our decision, please email us at
                  privacy@eagle-bot.com. Within sixty (60) days of receipt of an
                  appeal, we will inform you in writing of any action taken or
                  not taken in response to the appeal, including a written
                  explanation of the reasons for the decisions. If your appeal
                  is denied, you may contact the Attorney General to submit a
                  complaint.
                </p>
              </div>

              <div id="question-13" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> You may have additional rights
                  based on the country you reside in.
                </p>
                <p>
                  <b>Australia and New Zealand</b>
                </p>
                <p>
                  We collect and process your personal information under the
                  obligations and conditions set by Australia's Privacy Act 1988
                  and New Zealand's Privacy Act 2020 (Privacy Act).
                </p>
                <p>
                  This privacy notice satisfies the notice requirements defined
                  in both Privacy Acts, in particular: what personal information
                  we collect from you, from which sources, for which purposes,
                  and other recipients of your personal information.
                </p>
                <p>
                  If you do not wish to provide the personal information
                  necessary to fulfill their applicable purpose, it may affect
                  our ability to provide our services, in particular:
                </p>
                <ul>
                  <li>offer you the products or services that you want</li>
                  <li>respond to or help with your requests</li>
                  <li>manage your account with us</li>
                  <li>confirm your identity and protect your account</li>
                  <li>
                    At any time, you have the right to request access to or
                    correction of your personal information. You can make such a
                    request by contacting us by using the contact details
                    provided in the section "HOW CAN YOU REVIEW, UPDATE, OR
                    DELETE THE DATA WE COLLECT FROM YOU?"
                  </li>
                </ul>
                <p>
                  If you believe we are unlawfully processing your personal
                  information, you have the right to submit a complaint about a
                  breach of the Australian Privacy Principles to the Office of
                  the Australian Information Commissioner and a breach of New
                  Zealand's Privacy Principles to the Office of New Zealand
                  Privacy Commissioner.
                </p>
                <p>
                  <b>Republic of South Africa</b>
                </p>
                <p>
                  At any time, you have the right to request access to or
                  correction of your personal information. You can make such a
                  request by contacting us by using the contact details provided
                  in the section "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA
                  WE COLLECT FROM YOU?"
                </p>
                <p>
                  If you are unsatisfied with the manner in which we address any
                  complaint with regard to our processing of personal
                  information, you can contact the office of the regulator, the
                  details of which are:
                </p>
                <p>The Information Regulator (South Africa)</p>
                <p>General enquiries: enquiries@inforegulator.org.za</p>
                <p>
                  Complaints (complete POPIA/PAIA form 5):
                  PAIAComplaints@inforegulator.org.za &
                  POPIAComplaints@inforegulator.org.za
                </p>
              </div>
              <div id="question-14" className={Style.sub_content_section}>
                <h3>
                  <strong>14. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
                </h3>
                <p>
                  <strong>In Short:</strong> Yes, we will update this notice as
                  necessary to stay compliant with relevant laws.
                </p>
                <p>
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                </p>
              </div>
              <div id="question-15" className={Style.sub_content_section}>
                <h3>
                  <strong>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
                </h3>
                <p>
                  If you have questions or comments about this notice, you may
                  contact our Data Protection Officer (DPO) by email at
                  privacy@eagle-bot.com , or contact us by post at:
                </p>
                <p>Eagle Bot PTE LTD</p>
                <p>160 Robinson Rd, #14 04, Singapore 068914</p>
                <p>Singapore 068914</p>
                <p>Singapore</p>
              </div>
              <div id="question-16" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                  </strong>
                </h3>
                <p>
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it. To request to
                  review, update, or delete your personal information, please
                  visit:{" "}
                  <a href="https://www.eagle-bot.com/contact">
                    https://www.eagle-bot.com/contact
                  </a>{" "}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.footer_section}>
        <div className={Style.footer}>
          <GoToUpComp />
          <p className={Style.copyRigthText}>
            Copyright © 2023 Eagle-Bot - An Antimatterr Product. All Rights
            Reserved.
          </p>
          <p className={Style.SupportText}>
            Contact us at support@eagle-bot.com
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolicy;
