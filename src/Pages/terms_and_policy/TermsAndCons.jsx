import { useEffect } from "react";
import Style from "./style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { GoToUpComp } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

const TermsAndCons = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Terms & conditions | Eagle Bot";
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
              <a href="#our_services">OUR SERVICES</a>
            </li>
            <li>
              <a href="#intellectual_property_rights">
                INTELLECTUAL PROPERTY RIGHTS
              </a>
            </li>
            <li>
              <a href="#user_representations">USER REPRESENTATIONS</a>
            </li>
            <li>
              <a href="#user_registration">USER REGISTRATION</a>
            </li>
            <li>
              <a href="#software">SOFTWARE</a>
            </li>
            <li>
              <a href="#prohibited_activities">PROHIBITED ACTIVITIES</a>
            </li>
            <li>
              <a href="#user_generated_contributions">
                USER GENERATED CONTRIBUTIONS
              </a>
            </li>
            <li>
              <a href="#contribution_license">CONTRIBUTION LICENSE</a>
            </li>
            <li>
              <a href="#guidelines_for_reviews">GUIDELINES FOR REVIEWS</a>
            </li>
            <li>
              <a href="#services_management">SERVICES MANAGEMENT</a>
            </li>
            <li>
              <a href="#privacy_policy">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#term_and_termination">TERM AND TERMINATION</a>
            </li>
            <li>
              <a href="#modifications_and_interruptions">
                MODIFICATIONS AND INTERRUPTIONS
              </a>
            </li>
            <li>
              <a href="#governing_law">GOVERNING LAW</a>
            </li>
            <li>
              <a href="#dispute_resolution">DISPUTE RESOLUTION</a>
            </li>
            <li>
              <a href="#corrections">CORRECTIONS</a>
            </li>
            <li>
              <a href="#disclaimer">DISCLAIMER</a>
            </li>
            <li>
              <a href="#limitations_of_liability">LIMITATIONS OF LIABILITY</a>
            </li>
            <li>
              <a href="#indemnification">INDEMNIFICATION</a>
            </li>
            <li>
              <a href="#user_data">USER DATA</a>
            </li>
            <li>
              <a href="#electronic_communications_transactions_and_signatures">
                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </a>
            </li>
            <li>
              <a href="#california_users_and_residents">
                CALIFORNIA USERS AND RESIDENTS
              </a>
            </li>
            <li>
              <a href="#miscellaneous">MISCELLANEOUS</a>
            </li>
            <li>
              <a href="#cookie_policy">COOKIE POLICY</a>
            </li>
            <li>
              <a href="#contact_us">CONTACT US</a>
            </li>
          </ol>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1>Eagle Bot Terms & Conditions</h1>
            </div>
            <div className={Style.panel_body}>
              <p className={Style.update}>Last updated October 27, 2023</p>
              <div
                id="agreement_to_our_legal_terms"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>AGREEMENT TO OUR LEGAL TERMS</strong>
                </h3>
                <p>
                  We are Eagle Bot PTE LTD, doing business as Eagle Bot
                  ("Company," "we," "us," "our"), a company registered in
                  Singapore at 160 Robinson Rd, #14 04, Singapore 068914,
                  Singapore 068914.
                </p>
                <p>
                  We operate the website{" "}
                  <a href="https://platform.eagle-bot.com">
                    https://platform.eagle-bot.com
                  </a>{" "}
                  (the "Site"), as well as any other related products and
                  services that refer or link to these legal terms (the "Legal
                  Terms") (collectively, the "Services").
                </p>
                <p>
                  You can contact us by email at support@eagle-bot.com, or by
                  mail to 160 Robinson Rd, #14 04, Singapore 068914, Singapore
                  068914, Singapore.
                </p>
                <p>
                  These Legal Terms constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  ("you"), and Eagle Bot PTE LTD, concerning your access to and
                  use of the Services. You agree that by accessing the Services,
                  you have read, understood, and agreed to be bound by all of
                  these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL
                  TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                  SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
                <p>
                  We will provide you with prior notice of any scheduled changes
                  to the Services you are using. The modified Legal Terms will
                  become effective upon posting or notifying you by
                  notifications@eagle-bot.com, as stated in the email message.
                  By continuing to use the Services after the effective date of
                  any changes, you agree to be bound by the modified terms.
                </p>
                <p>
                  The Services are intended for users who are at least 13 years
                  of age. All users who are minors in the jurisdiction in which
                  they reside (generally under the age of 18) must have the
                  permission of, and be directly supervised by, their parent or
                  guardian to use the Services. If you are a minor, you must
                  have your parent or guardian read and agree to these Legal
                  Terms prior to you using the Services.
                </p>
                <p>
                  We recommend that you print a copy of these Legal Terms for
                  your records.
                </p>
              </div>
              {/* <div id="key_feature" className={Style.sub_content_section}>
                <h3>
                  <strong>KEY FEATURE</strong>
                </h3>
                <p>
                  <strong>1. Dual Automation Modes :-</strong> API-based
                  Automation: Directly interface with systems, apps, and
                  services with rich API integrations. This mode provides fast,
                  reliable, and secure connections, ensuring seamless data
                  transfer and operations across popular cloud platforms. -
                  Robotic Process Automation (RPA): Mimic human interactions
                  with digital systems, ideal for automating legacy systems
                  without native API support or for complex GUI-based tasks on
                  your Windows and Mac operating systems. <br></br>
                </p>
                <p>
                  <strong>2. Proprietary AI Backend Engines :-</strong> The
                  software's powerful AI algorithms are built to learn, adapt,
                  and evolve. Whether it's optimizing workflows, predicting
                  system behavior, or making real-time decisions, our AI engines
                  ensure that your automation tasks always stay ahead of the
                  curve.
                </p>
                <p>
                  <strong>3. Custom Browser Integration :-</strong> Enhance your
                  web-based tasks and workflows with our deep chromium browser
                  integration. Perform web scraping, form filling, data
                  extraction, and more, all powered by our refined AI
                  capabilities.
                </p>
                <p>
                  <strong>4. GPT- 4 Chatbot Interface :-</strong> Interact with
                  our software using natural language, thanks to the GPT-4
                  chatbot. Whether you're setting up new tasks, querying system
                  status, or seeking troubleshooting help, the chatbot is there
                  to assist you every step of the way, making the user
                  experience intuitive and friendly.
                </p>
                <p>
                  <strong>5. Canvas for Creative AI Content :-</strong> Unleash
                  your creative potential with our AI-driven canvas feature.
                  Generate artwork, designs, or other visual content powered by
                  artificial intelligence. Whether you're looking to create
                  marketing graphics, unique digital art, or simply
                  experimenting with visual ideas, the canvas becomes your
                  digital playground.
                </p>
                <p>
                  In an age where efficiency, innovation, and adaptability are
                  paramount, AIPUAS sets the gold standard for automation
                  software. Experience the future of automation today! You can
                  contact us by email at support@eagle-bot.com.
                </p>
                <p>
                  These Legal Terms constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  ("you"), and Antimatterr LLC, concerning your access to and
                  use of the Services.
                </p>
                <p>
                  You agree that by accessing the Services, you have read,
                  understood, and agreed to be bound by all of these Legal
                  Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                  YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU
                  MUSTDISCONTINUE USE IMMEDIATELY.
                </p>
                <p>
                  We will provide you with prior notice of any scheduled changes
                  to the Services you are using. The modified Legal Terms will
                  become effective upon posting or notifying you by
                  support@eagle-bot.com, as stated in the email message. By
                  continuing to use the Services after the effective date of any
                  changes, you agree to be bound by the modified terms.
                </p>
                <p>
                  The Services are intended for users who are at least 13 years
                  of age. All users who are minors in the jurisdiction in which
                  they reside (generally under the age of 18)must have the
                  permission of, and be directly supervised by, their parent or
                  guardian to use the Services. If you are a minor, you must
                  have your parent or guardian read and agree to these Legal
                  Terms prior to you using the Services.
                </p>
                <p>
                  We recommend that you print a copy of these Legal Terms for
                  your records.
                </p>
              </div> */}
              <div
                className={`${Style.sub_content_section} ${Style.mobileview_menu}`}
              >
                <h4 className={Style.table_of_content_head}>
                  Table of Contents
                </h4>
                <ol>
                  <li>
                    <a href="#our_services">OUR SERVICES</a>
                  </li>
                  <li>
                    <a href="#intellectual_property_rights">
                      INTELLECTUAL PROPERTY RIGHTS
                    </a>
                  </li>
                  <li>
                    <a href="#user_representations">USER REPRESENTATIONS</a>
                  </li>
                  <li>
                    <a href="#user_registration">USER REGISTRATION</a>
                  </li>
                  <li>
                    <a href="#purchase_and_payment">PURCHASES AND PAYMENT</a>
                  </li>
                  <li>
                    <a href="#free_trail">FREE TRIAL</a>
                  </li>
                  <li>
                    <a href="#cancellation">CANCELLATION</a>
                  </li>
                  <li>
                    <a href="#software"> SOFTWARE</a>
                  </li>
                  <li>
                    <a href="#prohibited_activities">PROHIBITED ACTIVITIES</a>
                  </li>
                  <li>
                    <a href="#user_generated_contributions">
                      USER GENERATED CONTRIBUTIONS
                    </a>
                  </li>
                  <li>
                    <a href="#contribution_license">CONTRIBUTION LICENSE</a>
                  </li>
                  <li>
                    <a href="#guidelines_for_reviews">GUIDELINES FOR REVIEWS</a>
                  </li>
                  <li>
                    <a href="#social_media">SOCIAL MEDIA</a>
                  </li>
                  <li>
                    <a href="#services_management">SERVICES MANAGEMENT</a>
                  </li>
                  <li>
                    <a href="#privacy_policy">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="#terms_and_termination">TERM AND TERMINATION</a>
                  </li>
                  <li>
                    <a href="#modifications_and_interruptions">
                      MODIFICATIONS AND INTERRUPTIONS
                    </a>
                  </li>
                  <li>
                    <a href="#governing_law">GOVERNING LAW</a>
                  </li>
                  <li>
                    <a href="#dispute_resolution">DISPUTE RESOLUTION</a>
                  </li>
                  <li>
                    <a href="#corrections">CORRECTIONS</a>
                  </li>
                  <li>
                    <a href="#disclaimer">DISCLAIMER</a>
                  </li>
                  <li>
                    <a href="#limitaions_of_liability">
                      LIMITATIONS OF LIABILITY
                    </a>
                  </li>
                  <li>
                    <a href="#indemnification">INDEMNIFICATION</a>
                  </li>
                  <li>
                    <a href="#user_date">USER DATA</a>
                  </li>
                  <li>
                    <a href="#electronic_communications_transactions_and_signatures">
                      ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                    </a>
                  </li>
                  <li>
                    <a href="california_users_and_residents">
                      CALIFORNIA USERS AND RESIDENTS
                    </a>
                  </li>
                  <li>
                    <a href="#miscellaneous">MISCELLANEOUS</a>
                  </li>
                  <li>
                    <a href="#contact_us">CONTACT US</a>
                  </li>
                </ol>
              </div>
              <div id="our_services" className={Style.sub_content_section}>
                <h3>
                  <strong>1. OUR SERVICES</strong>
                </h3>
                <p>
                  The information provided when using the Services is not
                  intended for distribution to or use by any person or entity in
                  any jurisdiction or country where such distribution or use
                  would be contrary to law or regulation or which would subject
                  us to any registration requirement within such jurisdiction or
                  country. Accordingly, those persons who choose to access the
                  Services from other locations do so on their own initiative
                  and are solely responsible for compliance with local laws, if
                  and to the extent local laws are applicable.
                </p>
                <p>
                  The Services are not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subjected to
                  such laws, you may not use the Services. You may not use the
                  Services in a way that would violate the Gramm-Leach-Bliley
                  Act (GLBA).
                </p>
              </div>
              <div
                id="intellectual_property_rights"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
                </h3>
                <h4>Our intellectual property</h4>
                <p>{"\n"}</p>
                <p>
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  "Content"), as well as the trademarks, service marks, and
                  logos contained therein (the "Marks").
                </p>
                <p>
                  Our Content and Marks are protected by copyright and trademark
                  laws (and various other intellectual property rights and
                  unfair competition laws) and treaties in the United States and
                  around the world
                </p>
                <p>
                  The Content and Marks are provided in or through the Services
                  "AS IS" for your personal, non-commercial use or internal
                  business purpose only.
                </p>
                <h4>Your use of our Services</h4>
                <p>{"\n"}</p>
                <p>
                  Subject to your compliance with these Legal Terms, including
                  the "PROHIBITED ACTIVITIES" section below, we grant you a
                  non-exclusive, non-transferable, revocable license to:
                </p>
                <ul>
                  <li>access the Services; and</li>
                  <li>
                    download or print a copy of any portion of the Content to
                    which you have properly gained access.
                  </li>
                </ul>
                <p>
                  solely for your personal, non-commercial use or internal
                  business purpose.
                </p>
                <p>
                  Except as set out in this section or elsewhere in our Legal
                  Terms, no part of the Services and no Content or Marks may be
                  copied, reproduced, aggregated, republished, uploaded, posted,
                  publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission.
                </p>
                <p>
                  If you wish to make any use of the Services, Content, or Marks
                  other than as set out in this section or elsewhere in our
                  Legal Terms, please address your request to:{" "}
                  <b>support@eagle-bot.com</b>. If we ever grant you the
                  permission to post, reproduce, or publicly display any part of
                  our Services or Content, you must identify us as the owners or
                  licensors of the Services, Content, or Marks and ensure that
                  any copyright or proprietary notice appears or is visible on
                  posting, reproducing, or displaying our Content
                </p>
                <p>
                  We reserve all rights not expressly granted to you in and to
                  the Services, Content, and Marks.
                </p>
                <p>
                  Any breach of these Intellectual Property Rights will
                  constitute a material breach of our Legal Terms and your right
                  to use our Services will terminate immediately.
                </p>
                <p>
                  This provision does not pertain to content generated by
                  third-party artificial intelligence (AI) providers. Please
                  consult their terms and conditions as outlined below:
                </p>
                <a href="https://openai.com/policies/terms-of-use">
                  1) https://openai.com/policies/terms-of-use
                </a>
                <p>{"\n"}</p>
                <a href="https://stablediffusionweb.com/license.html">
                  2) https://stablediffusionweb.com/license.html
                </a>
                <p>{"\n"}</p>
                <h4>Your submissions</h4>
                <p>{"\n"}</p>
                <p>
                  Please review this section and the "PROHIBITED ACTIVITIES"
                  section carefully prior to using our Services to understand
                  the (a) rights you give us and (b) obligations you have when
                  you post or upload any content through the Services.
                </p>
                <p>
                  <b>Submissions:</b> By directly sending us any question,
                  comment, suggestion, idea, feedback, or other information
                  about the Services ("Submissions"), you agree to assign to us
                  all intellectual property rights in such Submission. You agree
                  that we shall own this Submission and be entitled to its
                  unrestricted use and dissemination for any lawful purpose,
                  commercial or otherwise, without acknowledgment or
                  compensation to you.
                </p>
                <p>
                  <b>You are responsible for what you post or upload:</b> By
                  sending us Submissions through any part of the Services you:
                  <ul>
                    <li>
                      confirm that you have read and agree with our{" "}
                      <b>"PROHIBITED ACTIVITIES"</b> and will not post, send,
                      publish, upload, or transmit through the Services any
                      Submission that is illegal, harassing, hateful, harmful,
                      defamatory, obscene, bullying, abusive, discriminatory,
                      threatening to any person or group, sexually explicit,
                      false, inaccurate, deceitful, or misleading;
                    </li>
                    <li>
                      to the extent permissible by applicable law, waive any and
                      all moral rights to any such Submission;
                    </li>
                    <li>
                      warrant that any such Submission are original to you or
                      that you have the necessary rights and licenses to submit
                      such Submissions and that you have full authority to grant
                      us the above-mentioned rights in relation to your
                      Submissions; and
                    </li>
                    <li>
                      warrant and represent that your Submissions do not
                      constitute confidential information.
                    </li>
                  </ul>
                </p>
                <p>
                  You are solely responsible for your Submissions and you
                  expressly agree to reimburse us for any and all losses that we
                  may suffer because of your breach of (a) this section, (b) any
                  third party’s intellectual property rights, or (c) applicable
                  law.
                </p>
              </div>
              <div
                id="user_representations"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>3. USER REPRESENTATIONS</strong>
                </h3>
                <p>By using the Services, you represent and warrant that:</p>
                <p>
                  (1) all registration information you submit will be true,
                  accurate, current, and complete;
                </p>
                <p>
                  (2) you will maintain the accuracy of such information and
                  promptly update such registration information as necessary;
                </p>
                <p>
                  (3) you have the legal capacity and you agree to comply with
                  these Legal Terms;
                </p>
                <p>(4) you are not under the age of 13;</p>
                <p>
                  (5) you are not a minor in the jurisdiction in which you
                  reside, or if a minor, you have received parental permission
                  to use the Services;
                </p>
                <p>
                  (6) you will not access the Services through automated or
                  non-human means, whether through a bot, script or otherwise;
                </p>
                <p>
                  (7) you will not use the Services for any illegal or
                  unauthorized purpose;
                </p>
                <p>
                  (8) your use of the Services will not violate any applicable
                  law or regulation.
                </p>
                <p>
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate your account and refuse any and all current or
                  future use of the Services (or any portion thereof).
                </p>
              </div>
              <div id="user_registration" className={Style.sub_content_section}>
                <h3>
                  <strong>4.USER REGISTRATION</strong>
                </h3>
                <p>
                  You may be required to register to use the Services. You agree
                  to keep your password confidential and will be responsible for
                  all use of your account and password. We reserve the right to
                  remove, reclaim, or change a username you select if we
                  determine, in our sole discretion, that such username is
                  inappropriate, obscene, or otherwise objectionable.
                </p>
              </div>
              <div
                id="purchases_and_payments"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>5. PURCHASES AND PAYMENT</strong>
                </h3>
                <p>We accept the following forms of payment:</p>
                <p>
                  <ui>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>American Express</li>
                    <li>Discover</li>
                    <li>Paypal</li>
                    <li>China UnionPay</li>
                    <li>AliPay</li>
                    <li>Apple Pay</li>
                    <li>Google Pay</li>
                    <li>Grab Pay</li>
                    <li>Link</li>
                    <li>WeChat Pay</li>
                    <li>SEPA Direct Debit</li>
                    <li>EPS</li>
                    <li>GiroPay</li>
                    <li>iDeal</li>
                    <li>Przelewy24</li>
                    <li>Sofort</li>
                    <li>Pay Now</li>
                    <li>Meses sin intereses</li>
                    <li>Cash App Pay</li>
                    <li>Affirm</li>
                    <li>Afterpay/Clearpay</li>
                    <li>Klarna</li>
                    <li>Canadian pre-authorized debits</li>
                    <li>ACH direct debits</li>
                  </ui>
                </p>
                <p>
                  You agree to provide current, complete, and accurate purchase
                  and account information for all purchases made via the
                  Services. You further agree to promptly update account and
                  payment information, including email address, payment method,
                  and payment card expiration date, so that we can complete your
                  transactions and contact you as needed. Sales tax will be
                  added to the price of purchases as deemed required by us. We
                  may change prices at any time. All payments shall be in Local
                  Currency.
                </p>
                <p>
                  You agree to pay all charges at the prices then in effect for
                  your purchases, and you authorize us to charge your chosen
                  payment provider for any such amounts upon placing your order.
                  If your order is subject to recurring charges, then you
                  consent to our charging your payment method on a recurring
                  basis without requiring your prior approval for each recurring
                  charge, until such time as you cancel the applicable order. We
                  reserve the right to correct any errors or mistakes in
                  pricing, even if we have already requested or received
                  payment.
                </p>
                <p>
                  We reserve the right to refuse any order placed through the
                  Services. We may, in our sole discretion, limit or cancel
                  quantities purchased per person, per household, or per order.
                  These restrictions may include orders placed by or under the
                  same customer account, the same payment method, and/or orders
                  that use the same billing or shipping address. We reserve the
                  right to limit or prohibit orders that, in our sole judgment,
                  appear to be placed by dealers, resellers, or distributors.
                </p>
              </div>
              <div id="free_trail" className={Style.sub_content_section}>
                <h3>
                  <strong>6. FREE TRAIL</strong>
                </h3>
                <p>
                  We offer a 10,000 Eagle Coin worth of free trial to new users
                  who register with the Services. The account will not be
                  charged and the subscription will be suspended until new Eagle
                  Coins are purchased at the end of the free trial.
                </p>
              </div>
              <div id="cancellation" className={Style.sub_content_section}>
                <h3>
                  <strong>7. CANCELLATION</strong>
                </h3>
                <p>
                  All purchases are non-refundable. You can cancel your
                  subscription at any time by logging into your account. Your
                  cancellation will take effect at the end of the current paid
                  term.If you are unsatisfied with our Services, please email us
                  at <a href="support@eagle-bot.com">support@eagle-bot.com</a>.
                </p>
              </div>
              <div id="software" className={Style.sub_content_section}>
                <h3>
                  <strong>8. SOFTWARE</strong>
                </h3>
                <p>
                  We may include desktop software for use in connection with our
                  Services such as the Eagle Browser. This is accompanied by an
                  end user license agreement ("EULA"), the terms of the EULA
                  will govern your use of the software. Any software and any
                  related documentation is provided "AS IS" without warranty of
                  any kind, either express or implied, including, without
                  limitation, the implied warranties of merchantability, fitness
                  for a particular purpose, or non-infringement. You accept any
                  and all risk arising out of use or performance of any
                  software. You may not reproduce or redistribute any software
                  except in accordance with the EULA or these Legal Terms.
                </p>
              </div>
              <div
                id="prohibited_activities"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>9. PROHIBITED ACTIVITIES</strong>
                </h3>
                <p>
                  You may not access or use the Services for any purpose other
                  than that for which we make the Services available. The
                  Services may not be used in connection with any commercial
                  endeavors except those that are specifically endorsed or
                  approved by us.
                </p>
                <p>As a user of the Services, you agree not to:</p>
                <ul>
                  <li>
                    Systematically retrieve data or other content from the
                    Services to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us
                  </li>
                  <li>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </li>
                  <li>
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Services, including
                    features that prevent or restrict the use or copying of any
                    Content or enforce .
                  </li>
                  <li>
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Services.
                  </li>
                  <li>
                    Use any information obtained from the Services in order to
                    harass, abuse, or harm another person.
                  </li>
                  <li>
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </li>
                  <li>
                    Use the Services in a manner inconsistent with any
                    applicable laws or regulations.
                  </li>
                  <li>
                    Engage in unauthorized framing of or linking to the
                    Services.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Services or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Services.
                  </li>
                  <li>
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                  <li>
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </li>
                  <li>
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats ("gifs"), 1×1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as "spyware" or "passive collection
                    mechanisms" or "pcms").
                  </li>
                  <li>
                    Interfere with, disrupt, or create an undue burden on the
                    Services or the networks or services connected to the
                    Services.
                  </li>
                  <li>
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Services
                    to you.
                  </li>
                  <li>
                    Attempt to bypass any measures of the Services designed to
                    prevent or restrict access to the Services, or any portion
                    of the Services.
                  </li>
                  <li>
                    Copy or adapt the Services' software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code.
                  </li>
                  <li>
                    Except as permitted by applicable law, decipher, decompile,
                    disassemble, or reverse engineer any of the software
                    comprising or in any way making up a part of the Services.
                  </li>
                  <li>
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Services, or use or launch any
                    unauthorized script or other software.
                  </li>
                  <li>
                    Use a buying agent or purchasing agent to make purchases on
                    the Services.
                  </li>
                  <li>
                    Make any unauthorized use of the Services, including
                    collecting usernames and/or email addresses of users by
                    electronic or other means for the purpose of sending
                    unsolicited email, or creating user accounts by automated
                    means or under false pretenses.
                  </li>
                  <li>
                    Use the Services as part of any effort to compete with us or
                    otherwise use the Services and/or the Content for any
                    revenue-generating endeavor or commercial enterprise.
                  </li>
                  <li>
                    Use the Services to advertise or offer to sell goods and
                    services.
                  </li>
                  <li>Sell or otherwise transfer your profile.</li>
                  <li>Perform malicious security attacks on the platform.</li>
                  <li>
                    Attempt to break the business logic of the platform to
                    circumvent costs or charges.
                  </li>
                  <li>Attempt to perform a "phishing" attack.</li>
                  <li>
                    Attempt to upload to our systems malware, including, but not
                    limited to, software viruses, trojan horses, worms, time
                    bombs or any other computer codes, files or programs
                    designed to interrupt, destroy, impair or limit the
                    functionality of any computer software, hardware,
                    telecommunications equipment or other device or equipment.
                  </li>
                  <li>
                    Attempt to to reverse engineer, hack into, invade or
                    otherwise gain unauthorized access into any of our systems,
                    communications devices or resources, or any other systems,
                    communications devices or resources (including, but not
                    limited to security probing activities or other attempts to
                    evaluate the security integrity of a network or host system
                    without permission).
                  </li>
                  <li>
                    Attempt to generate or to promote illegal activities, is
                    unlawful, threatening, obscene, abusive, harassing,
                    defamatory, slanderous, libelous, hateful or that violates
                    any section of this Agreement.
                  </li>
                  <li>
                    Generate or post content that promotes, encourages or
                    engages in terrorism, violence against people, animals, or
                    property.
                  </li>
                  <li>
                    Attempt to generate or post any content that in our
                    judgment, is child pornography, child erotica, indecently
                    depicts children, or, that poses any harm or potential harm
                    to any child.
                  </li>
                  <li>
                    Attempt to use the platform's or any personal SMTP service
                    or mail script to send out SPAM over our networks or other
                    systems with a message referencing their website.
                  </li>
                  <li>
                    Attempt to modify the source code of our downloadable
                    software without prior consent.
                  </li>
                </ul>
              </div>
              <div
                id="user_generated_contributions"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>10. USER GENERATED CONTRIBUTIONS</strong>
                </h3>
                <p>
                  The Services does not offer users to submit or post content.
                </p>
              </div>
              <div
                id="contribution_license"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>11. CONTRIBUTION LICENSE</strong>
                </h3>
                <p>
                  You and Services agree that we may access, store, process, and
                  use any information and personal data that you provide
                  following the terms of the Privacy Policy and your choices
                  (including settings).
                </p>
                <p>
                  By submitting suggestions or other feedback regarding the
                  Services, you agree that we can use and share such feedback
                  for any purpose without compensation to you
                </p>
              </div>
              <div
                id="guidelines_for_reviews"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>12. GUIDELINES FOR REVIEWS</strong>
                </h3>
                <p>
                  We may provide you areas on the Services to leave reviews or
                  ratings. When posting a review, you must comply with the
                  following criteria:
                </p>
                <p>
                  (1) you should have firsthand experience with the
                  person/entity being reviewed;
                </p>
                <p>
                  (2) your reviews should not contain offensive profanity, or
                  abusive, racist, offensive, or hateful language;
                </p>
                <p>
                  (3) your reviews should not contain discriminatory references
                  based on religion, race, gender, national origin, age, marital
                  status, sexual orientation, or disability;
                </p>
                <p>
                  (4) your reviews should not contain references to illegal
                  activity;
                </p>
                <p>
                  (5) you should not be affiliated with competitors if posting
                  negative reviews;
                </p>
                <p>
                  (6) you should not make any conclusions as to the legality of
                  conduct;
                </p>
                <p>
                  (7) you may not post any false or misleading statements; and
                </p>
                <p>
                  (8) you may not organize a campaign encouraging others to post
                  reviews, whether positive or negative.
                </p>
                <p>
                  We may accept, reject, or remove reviews at our sole
                  discretion. We have absolutely no obligation to screen reviews
                  or to delete reviews, even if anyone considers reviews
                  objectionable or inaccurate. Reviews are not endorsed by us,
                  and do not necessarily represent our opinions or the views of
                  any of our affiliates or partners. We do not assume liability
                  for any review or for any claims, liabilities, or losses
                  resulting from any review. By posting a review, you hereby
                  grant to us a perpetual, non-exclusive, worldwide,
                  royalty-free, fully paid, assignable, and sublicensable right
                  and license to reproduce, modify, translate, transmit by any
                  means, display, perform, and/or distribute all content
                  relating to review.
                </p>
              </div>
              <div id="social_media" className={Style.sub_content_section}>
                <h3>
                  <strong>13. SOCIAL MEDIA</strong>
                </h3>
                <p>
                  As part of the functionality of the Services, you may link
                  your account with online accounts you have with third-party
                  service providers (each such account, a "Third-Party
                  Account'') by either:
                </p>
                <p>
                  (1) providing your Third-Party Account login information
                  through the Services; or{" "}
                </p>
                <p>
                  (2) allowing us to access your Third-Party Account, as is
                  permitted under the applicable terms and conditions that
                  govern your use of each Third-Party Account. You represent and
                  warrant that you are entitled to disclose your Third-Party
                  Account login information to us and/or grant us access to your
                  Third-Party Account, without breach by you of any of the terms
                  and conditions that govern your use of the applicable
                  Third-Party Account, and without obligating us to pay any fees
                  or making us subject to any usage limitations imposed by the
                  third-party service provider of the Third-Party Account.{" "}
                </p>
                <p>
                  By granting us access to any Third-Party Accounts, you
                  understand that
                </p>
                <p>
                  (1) we may access, make available, and store (if applicable)
                  any content that you have provided to and stored in your
                  Third-Party Account (the "Social Network Content'') so that it
                  is available on and through the Services via your account,
                  including without limitation any friend lists and
                </p>
                <p>
                  (2) we may submit to and receive from your Third-Party Account
                  additional information to the extent you are notified when you
                  link your account with the Third-Party Account. Depending on
                  the Third-Party Accounts you choose and subject to the privacy
                  settings that you have set in such Third-Party Accounts,
                  personally identifiable information that you post to your
                  Third-Party Accounts may be available on and through your
                  account on the Services. Please note that if a Third-Party
                  Account or associated service becomes unavailable or our
                  access to such Third-Party Account is terminated by the
                  third-party service provider, the Social Network Content may
                  no longer be available on and through the Services. You will
                  have the ability to disable the connection between your
                  account on the Services and your Third-Party Accounts at any
                  time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY
                  SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS
                  GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
                  SERVICE PROVIDERS. We make no effort to review any Social
                  Network Content for any purpose, including but not limited to,
                  for accuracy, legality, or non-infringement, and we are not
                  responsible for any Social Network Content. You acknowledge
                  and agree that we may access your email address book
                  associated with a Third-Party Account and your contacts list
                  stored on your mobile device or tablet computer solely for
                  purposes of identifying and informing you of those contacts
                  who have also registered to use the Services.
                </p>
                <p>
                  You can deactivate the connection between the Services and
                  your Third-Party Account by contacting us using the contact
                  information below or through your account settings (if
                  applicable). We will attempt to delete any information stored
                  on our servers that was obtained through such a Third-Party
                  Account, except the username and profile picture that become
                  associated with your account.
                </p>
              </div>
              <div
                id="services_management"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>14. SERVICES MANAGEMENT</strong>
                </h3>
                <p>We reserve the right, but not the obligation, to:</p>
                <p>
                  (1) monitor the Services for violations of these Legal Terms;
                </p>
                <p>
                  (2) take appropriate legal action against anyone who, in our
                  sole discretion, violates the law or these Legal Terms,
                  including without limitation, reporting such user to law
                  enforcement authorities;
                </p>
                <p>
                  (3) in our sole discretion and without limitation, refuse,
                  restrict access to, limit the availability of, or disable (to
                  the extent technologically feasible) any of your Contributions
                  or any portion thereof;
                </p>
                <p>
                  (4) in our sole discretion and without limitation, notice, or
                  liability, to remove from the Services or otherwise disable
                  all files and content that are excessive in size or are in any
                  way burdensome to our systems;
                </p>
                <p>
                  (5) otherwise manage the Services in a manner designed to
                  protect our rights and property and to facilitate the proper
                  functioning of the Services.
                </p>
              </div>
              <div id="privacy_policy" className={Style.sub_content_section}>
                <h3>
                  <strong>15. PRIVACY POLICY</strong>
                </h3>
                <p>
                  We care about data privacy and security. Please review our
                  Privacy Policy:{" "}
                  <a href="https://www.eagle-bot.com/privacypolicy">
                    https://www.eagle-bot.com/privacypolicy
                  </a>{" "}
                  By using the Services, you agree to be bound by our Privacy
                  Policy, which is incorporated into these Legal Terms. Please
                  be advised the Services are hosted in Poland, India and the
                  United States. If you access the Services from any other
                  region of the world with laws or other requirements governing
                  personal data collection, use, or disclosure that differ from
                  applicable laws in Poland, India and United States, then
                  through your continued use of the Services, you are
                  transferring your data to Poland, India and United States, and
                  you expressly consent to have your data transferred to and
                  processed in Poland, India and United States. Further, we do
                  not knowingly accept, request, or solicit information from
                  children or knowingly market to children. Therefore, in
                  accordance with the U.S. Children’s Online Privacy Protection
                  Act, if we receive actual knowledge that anyone under the age
                  of 13 has provided personal information to us without the
                  requisite and verifiable parental consent, we will delete that
                  information from the Services as quickly as is reasonably
                  practical.
                </p>
              </div>
              <div
                id="term_and_termination"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>16. TERM AND TERMINATION</strong>
                </h3>
                <p>
                  These Legal Terms shall remain in full force and effect while
                  you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                  THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                  DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                  USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                  TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
                  WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY,
                  OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
                  APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
                  PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
                  CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
                  WARNING, IN OUR SOLE DISCRETION.
                </p>
                <p>
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third
                  party. In addition to terminating or suspending your account,
                  we reserve the right to take appropriate legal action,
                  including without limitation pursuing civil, criminal, and
                  injunctive redress.
                </p>
              </div>
              <div
                id="modifications_and_interruptions"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>17. MODIFICATIONS AND INTERRUPTIONS</strong>
                </h3>
                <p>
                  We reserve the right to change, modify, or remove the contents
                  of the Services at any time or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Services. We will not be liable
                  to you or any third party for any modification, price change,
                  suspension, or discontinuance of the Services.
                </p>
                <p>
                  We cannot guarantee the Services will be available at all
                  times. We may experience hardware, software, or other problems
                  or need to perform maintenance related to the Services,
                  resulting in interruptions, delays, or errors. We reserve the
                  right to change, revise, update, suspend, discontinue, or
                  otherwise modify the Services at any time or for any reason
                  without notice to you. You agree that we have no liability
                  whatsoever for any loss, damage, or inconvenience caused by
                  your inability to access or use the Services during any
                  downtime or discontinuance of the Services. Nothing in these
                  Legal Terms will be construed to obligate us to maintain and
                  support the Services or to supply any corrections, updates, or
                  releases in connection therewith.
                </p>
              </div>
              <div id="governing_law" className={Style.sub_content_section}>
                <h3>
                  <strong>18. GOVERNING LAW </strong>
                </h3>
                <p>
                  These Legal Terms shall be governed by and defined following
                  the laws of Singapore. Eagle Bot PTE LTD and yourself
                  irrevocably consent that the courts of Singapore shall have
                  exclusive jurisdiction to resolve any dispute which may arise
                  in connection with these Legal Terms.
                </p>
              </div>
              <div
                id="dispute_resolution"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>19. DISPUTE RESOLUTION</strong>
                </h3>
                <p>
                  <h4>Informal Negotiations</h4>
                  <p>
                    To expedite resolution and control the cost of any dispute,
                    controversy, or claim related to these Legal Terms (each a
                    "Dispute" and collectively, the "Disputes") brought by
                    either you or us (individually, a "Party" and collectively,
                    the "Parties"), the Parties agree to first attempt to
                    negotiate any Dispute (except those Disputes expressly
                    provided below) informally for at least thirty (30) days
                    before initiating arbitration. Such informal negotiations
                    commence upon written notice from one Party to the other
                    Party.
                  </p>
                </p>
                <p>
                  <h4>Binding Arbitration</h4>
                  <p>
                    Any dispute arising out of or in connection with these Legal
                    Terms, including any question regarding its existence,
                    validity, or termination, shall be referred to and finally
                    resolved by the International Commercial Arbitration Court
                    under the European Arbitration Chamber (Belgium, Brussels,
                    Avenue Louise, 146) according to the Rules of this ICAC,
                    which, as a result of referring to it, is considered as the
                    part of this clause. The number of arbitrators shall be one
                    (1). The seat, or legal place, or arbitration shall be
                    Singapore, Singapore. The language of the proceedings shall
                    be English. The governing law of these Legal Terms shall be
                    substantive law of Singapore.
                  </p>
                </p>
                <p>
                  <h4>Restrictions</h4>
                  <p>
                    The Parties agree that any arbitration shall be limited to
                    the Dispute between the Parties individually. To the full
                    extent permitted by law, (a) no arbitration shall be joined
                    with any other proceeding; (b) there is no right or
                    authority for any Dispute to be arbitrated on a class-action
                    basis or to utilize class action procedures; and (c) there
                    is no right or authority for any Dispute to be brought in a
                    purported representative capacity on behalf of the general
                    public or any other persons.
                  </p>
                </p>
                <p>
                  <h4>Exceptions to Informal Negotiations and Arbitration</h4>
                  <p>
                    The Parties agree that the following Disputes are not
                    subject to the above provisions concerning informal
                    negotiations binding arbitration: (a) any Disputes seeking
                    to enforce or protect, or concerning the validity of, any of
                    the intellectual property rights of a Party; (b) any Dispute
                    related to, or arising from, allegations of theft, piracy,
                    invasion of privacy, or unauthorized use; and (c) any claim
                    for injunctive relief. If this provision is found to be
                    illegal or unenforceable, then neither Party will elect to
                    arbitrate any Dispute falling within that portion of this
                    provision found to be illegal or unenforceable and such
                    Dispute shall be decided by a court of competent
                    jurisdiction within the courts listed for jurisdiction
                    above, and the Parties agree to submit to the personal
                    jurisdiction of that court.
                  </p>
                </p>
              </div>
              <div id="corrections" className={Style.sub_content_section}>
                <h3>
                  <strong>20. CORRECTIONS</strong>
                </h3>
                <p>
                  There may be information on the Services that contains
                  typographical errors, inaccuracies, or omissions, including
                  descriptions, pricing, availability, and various other
                  information. We reserve the right to correct any errors,
                  inaccuracies, or omissions and to change or update the
                  information on the Services at any time, without prior notice.
                </p>
              </div>
              <div id="disclaimer" className={Style.sub_content_section}>
                <h3>
                  <strong>21. DISCLAIMER</strong>
                </h3>
                <p>
                  THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                  YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                  RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                  WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE
                  SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION,
                  THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
                  WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                  COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY
                  WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
                  WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
                  MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                  PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                  RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
                  UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
                  AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                  STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                  TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                  TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                  THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                  OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                  DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                  CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA
                  THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                  RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                  OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED
                  WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY
                  BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR
                  IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
                  BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
                  SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH
                  ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                  JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                </p>
                <p>
                  <h2>
                    EAGLE BOT “Robotic Process Automation (RPA) DISCLAIMER
                  </h2>
                  <p>
                    The RPA (Robotic Process Automation) feature of Eagle Bot is
                    a first in the world and currently in the Beta testing
                    phase. This feature serves as a tool to enable automation
                    replay with backend AI engines for assistance in Smart RPA
                    Automations. This feature logs keystrokes and mouse clicks
                    and users are hereby advised to exercise caution and
                    prudence when utilizing this feature.
                  </p>
                  <p>
                    <b>
                      Please be aware that during the Beta testing phase, Eagle
                      Bot's RPA feature is not intended for handling sensitive
                      data, including but not limited to credentials, financial
                      information, or other highly sensitive data types.
                    </b>{" "}
                    This will change in the near future, however, presently,
                    users who choose to input such data into the system while
                    training the AI algorithms do so at their own discretion and
                    risk. We will clearly notify all users when there are
                    controls built in to handle sensitive data through the
                    platform and by sending notifications to every user via
                    email.
                  </p>
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
              <div
                id="limitations_of_liability"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>22. LIMITATIONS OF LIABILITY</strong>
                </h3>
                <p>
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                  CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                  OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF
                  WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                  LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF
                  THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                  AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH
                  PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE
                  LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
                  IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
                  DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
                  DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY
                  HAVE ADDITIONAL RIGHTS.
                </p>
              </div>
              <div id="indemnification" className={Style.sub_content_section}>
                <h3>
                  <strong>23. INDEMNIFICATION</strong>
                </h3>
                <p>
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys’ fees and expenses, made by any
                  third party due to or arising out of:
                </p>
                <p>(1) use of the Services;</p>
                <p>(2) breach of these Legal Terms;</p>
                <p>
                  (3) any breach of your representations and warranties set
                  forth in these Legal Terms;
                </p>
                <p>
                  (4) your violation of the rights of a third party, including
                  but not limited to intellectual property rights;
                </p>
                <p>
                  (5) any overt harmful act toward any other user of the
                  Services with whom you connected via the Services.
                </p>
                <p>
                  Notwithstanding the foregoing, we reserve the right, at your
                  expense, to assume the exclusive defense and control of any
                  matter for which you are required to indemnify us, and you
                  agree to cooperate, at your expense, with our defense of such
                  claims. We will use reasonable efforts to notify you of any
                  such claim, action, or proceeding which is subject to this
                  indemnification upon becoming aware of it.
                </p>
              </div>
              <div id="user_data" className={Style.sub_content_section}>
                <h3>
                  <strong>24. USER DATA</strong>
                </h3>
                <p>
                  We will maintain certain data that you transmit to the
                  Services for the purpose of managing the performance of the
                  Services, as well as data relating to your use of the
                  Services. Although we perform regular routine backups of data,
                  you are solely responsible for all data that you transmit or
                  that relates to any activity you have undertaken using the
                  Services. You agree that we shall have no liability to you for
                  any loss or corruption of any such data, and you hereby waive
                  any right of action against us arising from any such loss or
                  corruption of such data.
                </p>
              </div>
              <div
                id="electronic_communications_transactions_and_signatures"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>
                    25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </strong>
                </h3>
                <p>
                  Visiting the Services, sending us emails, and completing
                  online forms constitute electronic communications. You consent
                  to receive electronic communications, and you agree that all
                  agreements, notices, disclosures, and other communications we
                  provide to you electronically, via email and on the Services,
                  satisfy any legal requirement that such communication be in
                  writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                  DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS
                  INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby
                  waive any rights or requirements under any statutes,
                  regulations, rules, ordinances, or other laws in any
                  jurisdiction which require an original signature or delivery
                  or retention of non-electronic records, or to payments or the
                  granting of credits by any means other than electronic means.
                </p>
              </div>
              <div
                id="california_users_and_residents"
                className="{Style.sub_content_section}"
              >
                <h3>
                  <strong>26. CALIFORNIA USERS AND RESIDENTS</strong>
                </h3>
                <p>
                  If any complaint with us is not satisfactorily resolved, you
                  can contact the Complaint Assistance Unit of the Division of
                  Consumer Services of the California Department of Consumer
                  Affairs in writing at 1625 North Market Blvd., Suite N 112,
                  Sacramento, California 95834 or by telephone at (800) 952-5210
                  or (916) 445-1254.
                </p>
              </div>
              <div id="miscellaneous" className="{Style.sub_content_section}">
                <h3>
                  <strong>27. MISCELLANEOUS</strong>
                </h3>
                <p>
                  These Legal Terms and any policies or operating rules posted
                  by us on the Services or in respect to the Services constitute
                  the entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these
                  Legal Terms shall not operate as a waiver of such right or
                  provision. These Legal Terms operate to the fullest extent
                  permissible by law. We may assign any or all of our rights and
                  obligations to others at any time. We shall not be responsible
                  or liable for any loss, damage, delay, or failure to act
                  caused by any cause beyond our reasonable control. If any
                  provision or part of a provision of these Legal Terms is
                  determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from
                  these Legal Terms and does not affect the validity and
                  enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Legal Terms or
                  use of the Services. You agree that these Legal Terms will not
                  be construed against us by virtue of having drafted them. You
                  hereby waive any and all defenses you may have based on the
                  electronic form of these Legal Terms and the lack of signing
                  by the parties hereto to execute these Legal Terms.
                </p>
              </div>
              <div
                id="third_party_services_integration_clause"
                className="{Style.sub_content_section}"
              >
                <h3>
                  <strong>28. Third-Party Services Integration Clause</strong>
                </h3>
                <p>
                  EagleBot may integrate with third-party services to enhance
                  its functionality and features. Users of EagleBot acknowledge
                  and agree that their use of these integrated third-party
                  services is subject to the respective terms and conditions of
                  those service providers. EagleBot disclaims any liability or
                  responsibility for the actions, policies, or terms of these
                  third-party service providers.
                </p>
                <p>
                  Users are encouraged to review and comply with the terms,
                  privacy policies, and usage guidelines of the third-party
                  services they choose to integrate with EagleBot. It is the
                  responsibility of the user to ensure that their usage of
                  EagleBot in conjunction with these third-party services is in
                  accordance with all applicable terms and conditions.
                </p>
                <p>
                  EagleBot reserves the right to modify or discontinue support
                  for third-party integrations at any time, without prior
                  notice. Users are responsible for ensuring the compatibility
                  and compliance of their usage with any updated terms or
                  changes made by the third-party service providers.
                </p>
                <p>
                  By using EagleBot in conjunction with third-party services,
                  users signify their acceptance of this clause and their
                  commitment to adhere to the terms and conditions of these
                  third-party services.
                </p>
                <p>
                  Please review the applicable third-party terms and conditions
                  here:
                </p>
                <p>Microsoft:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://learn.microsoft.com/en-us/legal/microsoft-apis/terms-of-use">
                        https://learn.microsoft.com/en-us/legal/microsoft-apis/terms-of-use
                      </a>
                    </li>
                    <li>
                      <a href="https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use">
                        https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use
                      </a>
                    </li>
                    <li>
                      <a href="https://www.microsoft.com/licensing/terms/welcome/welcomepage">
                        https://www.microsoft.com/licensing/terms/welcome/welcomepage
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Google:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://policies.google.com/terms?hl=en-US">
                        https://policies.google.com/terms?hl=en-US
                      </a>
                    </li>
                    <li>
                      <a href="https://developers.google.com/terms">
                        https://developers.google.com/terms
                      </a>
                    </li>
                    <li>
                      <a href="https://cloud.google.com/terms">
                        https://cloud.google.com/terms
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Apple:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://www.apple.com/sg/legal/internet-services/itunes/vppbusiness/sg/terms.html">
                        https://www.apple.com/sg/legal/internet-services/itunes/vppbusiness/sg/terms.html
                      </a>
                    </li>
                    <li>
                      <a href="https://www.apple.com/in/legal/internet-services/terms/site.html">
                        https://www.apple.com/in/legal/internet-services/terms/site.html
                      </a>
                    </li>
                    <li>
                      <a href="https://developer.apple.com/support/terms/apple-developer-program-license-agreement/">
                        https://developer.apple.com/support/terms/apple-developer-program-license-agreement/
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Amazon:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://aws.amazon.com/service-terms/">
                        https://aws.amazon.com/service-terms/
                      </a>
                    </li>
                    <li>
                      <a href="https://developer.amazon.com/support/legal/tou">
                        https://developer.amazon.com/support/legal/tou
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Atlassian:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://developer.atlassian.com/platform/marketplace/atlassian-developer-terms/">
                        https://developer.atlassian.com/platform/marketplace/atlassian-developer-terms/
                      </a>
                    </li>
                    <li>
                      <a href="https://www.atlassian.com/legal/cloud-terms-of-service">
                        https://www.atlassian.com/legal/cloud-terms-of-service
                      </a>
                    </li>
                    <li>
                      <a href="https://www.atlassian.com/legal/software-license-agreement">
                        https://www.atlassian.com/legal/software-license-agreement
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Meta:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://m.facebook.com/legal/terms">
                        https://m.facebook.com/legal/terms
                      </a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/legal/terms-of-service">
                        https://www.whatsapp.com/legal/terms-of-service
                      </a>
                    </li>
                    <li>
                      <a href="https://developers.facebook.com/terms/dfc_platform_terms/">
                        https://developers.facebook.com/terms/dfc_platform_terms/
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Twitter:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://twitter.com/en/tos">
                        https://twitter.com/en/tos
                      </a>
                    </li>
                    <li>
                      <a href="https://developer.twitter.com/en/developer-terms/agreement-and-policy">
                        https://developer.twitter.com/en/developer-terms/agreement-and-policy
                      </a>
                    </li>
                  </p>
                </ul>
                <p>OpenAI:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://openai.com/policies/terms-of-use">
                        https://openai.com/policies/terms-of-use
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Stable Diffusion AI:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://stablediffusionweb.com/license.html">
                        https://stablediffusionweb.com/license.html
                      </a>
                    </li>
                  </p>
                </ul>
                <p>Stripe:</p>
                <ul>
                  <p>
                    <li>
                      <a href="https://stripe.com/en-in/legal/consumer">
                        https://stripe.com/en-in/legal/consumer
                      </a>
                    </li>
                  </p>
                </ul>
              </div>
              <div id="contact_us" className="{Style.sub_content_section}">
                <h3>
                  <strong>28. CONTACT US</strong>
                </h3>
                <p>
                  In order to resolve a complaint regarding the Services or to
                  receive further information regarding use of the Services,
                  please contact us at:
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
                  <strong>Phone: (+91)9663775458</strong>
                  <br></br>
                  <strong>support@eagle-bot.com</strong>
                  <br></br>
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

export default TermsAndCons;
