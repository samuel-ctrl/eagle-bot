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
              <p className={Style.update}>Last updated Sept. 15, 2023</p>
              <div
                id="agreement_to_our_legal_terms"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>AGREEMENT TO OUR LEGAL TERMS</strong>
                </h3>
                <p>
                  We are Antimatterr LLC ("Company," "we," "us," "our"), a
                  company registered in California, United States.
                </p>
                <p>
                  We operate the website Eagle Bot (the "Site"), as well as any
                  other related products and services that refer or link to
                  these legal terms (the "Legal Terms") (collectively, the
                  "Services").
                </p>
                <p>
                  <strong>
                    AI-Powered Universal Automation Software (AIPUAS)
                    Description:
                  </strong>
                  We provide AI-Powered Universal Automation Software (AIPUAS) -
                  that is a one-stop solution for cutting-edge, AI-driven
                  automation. Seamlessly blending the power of both APIbased and
                  Robotic Process Automation (RPA), our software is engineered
                  with an industry-leading proprietary AI backend engine to
                  ensure efficiency, accuracy, and adaptability.
                </p>
              </div>
              <div id="key_feature" className={Style.sub_content_section}>
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
              </div>
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
                    <a href="#limitations_of_liability">
                      LIMITATIONS OF LIABILITY
                    </a>
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
                  country.
                </p>
                <p>
                  Accordingly, those persons who choose to access the Services
                  from other locations do so on their own initiative and are
                  solely responsible for compliance with local laws, if and to
                  the extent local laws are applicable.
                </p>
                <p>
                  The Services are not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subjected to
                  such laws, you may not use the Services.
                </p>
                <p>
                  You may not use the Services in a way that would violate the
                  Gramm-Leach-Bliley Act (GLBA).
                </p>
              </div>
              <div
                id="intellectual_property_rights"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
                </h3>
                <p>
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  "Content"), as well as the trademarks, service marks, and
                  logos contained therein (the "Marks"). Our Content and Marks
                  are protected by copyright and trademark laws (and various
                  other intellectual property rights and unfair competition
                  laws) and treaties in the United States and around the world.
                </p>
                <p>
                  The Content and Marks are provided in or through the Services
                  "AS IS" for your personal, non-commercial use or internal
                  business purpose only. Your use of our Services Subject to
                  your compliance with these Legal Terms, including the
                  "PROHIBITED ACTIVITIES" section below, we grant you a
                  non-exclusive, non-transferable, revocable license to access
                  the Services; and download or print a copy of any portion of
                  the Content to which you have properly gained access solely
                  for your personal, non-commercial use or internal business
                  purpose.
                </p>
                <p>
                  Except as set out in this section or elsewhere in our Legal
                  Terms, no part of the Services and no Content or Marks may be
                  copied, reproduced, aggregated, republished, uploaded, posted,
                  publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission. If you wish to make any use of the
                  Services, Content, or Marks other than as set out in this
                  section or elsewhere in our Legal Terms, please address your
                  request to support@eagle-bot.com. If we ever grant you the
                  permission to post, reproduce, or publicly display any part of
                  our Services or Content, you must identify us as the owners or
                  licensors of the Services, Content, or Marks and ensure that
                  any copyright or proprietary notice appears or is visible on
                  posting, reproducing, or displaying our Content.
                </p>
                <p>
                  We reserve all rights not expressly granted to you in and to
                  the Services, Content, and Marks. Any breach of these
                  Intellectual Property Rights will constitute a material breach
                  of our Legal Terms and your right to use our Services will
                  terminate immediately. Your submissions Please review this
                  section and the "PROHIBITED ACTIVITIES" section carefully
                  prior to using our Services to understand the (a) rights you
                  give us and (b) obligations you have when you post or upload
                  any content through the Services. Submissions
                </p>
                <p>
                  By directly sending us any question, comment, suggestion,
                  idea, feedback, or other information about the Services
                  ("Submissions"), you agree to assign to us all intellectual
                  property rights in such Submission. You agree that we shall
                  own this Submission and be entitled to its unrestricted use
                  and dissemination for any lawful purpose, commercial or
                  otherwise, without acknowledgment or compensation to you. You
                  are responsible for what you post or upload
                </p>
                <p>
                  By sending us Submissions through any part of the Services you
                  confirm that you have read and agree with our "PROHIBITED
                  ACTIVITIES" and will not post, send, publish, upload, or
                  transmit through the Services any Submission that is illegal,
                  harassing, hateful, harmful, defamatory, obscene, bullying,
                  abusive, discriminatory, threatening to any person or group,
                  sexually explicit, false, inaccurate, deceitful, or misleading
                  to the extent permissible by applicable law, waive any and all
                  moral rights to any such Submission warrant that any such
                  Submission are original to you or that you have the necessary
                  rights and licenses to submit such Submissions and that you
                  have full authority to grant us the above-mentioned rights in
                  relation to your Submissions; and warrant and represent that
                  your Submissions do not constitute confidential information.
                </p>
                <p>
                  You are solely responsible for your Submissions and you
                  expressly agree to reimburse us for any and all losses that we
                  may suffer because of your breach of (a)this section, (b) any
                  third party's intellectual property rights, or (c) applicable
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
                  (9) If you provide any information that is untrue, inaccurate,
                  not current, or incomplete, we have the right to suspend or
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
              <div id="software" className={Style.sub_content_section}>
                <h3>
                  <strong>5. SOFTWARE</strong>
                </h3>
                <p>
                  We may include software for use in connection with our
                  Services. If such software is accompanied by an end user
                  license agreement ("EULA"), the terms of the{" "}
                  <strong>EULA</strong> will govern your use of the software.
                </p>
                <p>
                  If such software is not accompanied by a <strong>EULA</strong>
                  , then we grant to you a non-exclusive, revocable, personal,
                  and non-transferable license to use such software solely in
                  connection with our services and in accordance with these
                  Legal Terms.
                </p>
                <p>
                  Any software and any related documentation is provided "AS IS"
                  without warranty of any kind, either express or implied,
                  including, without limitation, the implied warranties of
                  merchantability, fitness for a particular purpose, or
                  non-infringement. You accept any and all risk arising out of
                  use or performance of any software.
                </p>
                <p>
                  You may not reproduce or redistribute any software except in
                  accordance with the <strong>EULA</strong> or these Legal
                  Terms.
                </p>
              </div>
              <div
                id="prohibited_activities"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>6. PROHIBITED ACTIVITIES</strong>
                </h3>
                <p>
                  You may not access or use the Services for any purpose other
                  than that for which we make the Services available.
                </p>
                <p>
                  The Services may not be used in connection with any commercial
                  endeavors except those that are specifically endorsed or
                  approved by us.
                </p>
                <p>As a user of the Services, you agree not to:</p>
                <ul>
                  <li>
                    Systematically retrieve data or other content from the
                    Services to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us.
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
                    Content or enforce limitations on the use of the Services
                    and/or the Content contained therein.
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
                    party's uninterrupted use and enjoyment of the Services or
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
                    limitation, clear graphics interchange formats ("gifs"), 1x1
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
                </ul>
              </div>
              <div
                id="user_generated_contributions"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>7. USER GENERATED CONTRIBUTIONS</strong>
                </h3>
                <p>
                  The Services do not offer users the ability to submit or post
                  content. However, we may provide you with the opportunity to
                  create, submit, post, display, transmit, perform, publish,
                  distribute, or broadcast content and materials to us or on the
                  Services, including but not limited to text, writings, video,
                  audio, photographs, graphics, comments, suggestions, or
                  personal information or other material (collectively,
                  "Contributions").
                </p>
                <p>
                  Contributions may be viewable by other users of the Services
                  and through third-party websites. When you create or make
                  available any Contributions, you thereby represent and warrant
                  that:
                </p>
                <ul>
                  <li>
                    The creation, distribution, transmission, public display, or
                    performance, and the accessing, downloading, or copying of
                    your Contributions do not and will not infringe the
                    proprietary rights, including but not limited to the
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party.
                  </li>
                  <li>
                    You are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    and to authorize us, the Services, and other users of the
                    Services to use your Contributions in any manner
                    contemplated by the Services and these Legal Terms.
                  </li>
                  <li>
                    You have the written consent, release, and/or permission of
                    each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Services and these Legal Terms.
                  </li>
                  <li>
                    Your Contributions are not false, inaccurate, or misleading.
                  </li>
                  <li>
                    Your Contributions are not unsolicited or unauthorized
                    advertising, promotional materials, pyramid schemes, chain
                    letters, spam, mass mailings, or other forms of
                    solicitation.
                  </li>
                  <li>
                    Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libelous, slanderous, or
                    otherwise objectionable (as determined by us).
                  </li>
                  <li>
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse anyone.
                  </li>
                  <li>
                    Your Contributions are not used to harass or threaten (in
                    the legal sense of those terms) any other person and to
                    promote violence against a specific person or class of
                    people.
                  </li>
                  <li>
                    Your Contributions do not violate any applicable law,
                    regulation, or rule.
                  </li>
                  <li>
                    Your Contributions do not violate the privacy or publicity
                    rights of any third party.
                  </li>
                  <li>
                    Your Contributions do not violate any applicable law
                    concerning child pornography, or otherwise intended to
                    protect the health or well-being of minors.
                  </li>
                  <li>
                    Your Contributions do not include any offensive comments
                    that are connected to race, national origin, gender, sexual
                    preference, or physical handicap.
                  </li>
                  <li>
                    Your Contributions do not otherwise violate, or link to
                    material that violates, any provision of these Legal Terms,
                    or any applicable law or regulation.
                  </li>
                </ul>
                <p>
                  Any use of the Services in violation of the foregoing violates
                  these Legal Terms and may result in, among other things,
                  termination or suspension of your rights to use the Services.
                </p>
              </div>
              <div
                id="contribution_license"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>8. CONTRIBUTION LICENSE</strong>
                </h3>
                <p>
                  You and Services agree that we may access, store, process, and
                  use any information and personal data that you provide and
                  your choices (including settings).
                </p>
                <p>
                  By submitting suggestions or other feedback regarding the
                  Services, you agree that we can use and share such feedback
                  for any purpose without compensation to you.
                </p>
                <p>
                  We do not assert any ownership over your Contributions. You
                  retain full ownership of all of your Contributions and any
                  intellectual property rights or other proprietary rights
                  associated with your Contributions.
                </p>
                <p>
                  We are not liable for any statements or representations in
                  your Contributions provided by you in any area on the
                  Services. You are solely responsible for your Contributions to
                  the Services and you expressly agree to exonerate us from any
                  and all responsibility and to refrain from any legal action
                  against us regarding your Contributions.
                </p>
              </div>
              <div
                id="guidelines_for_reviews"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>9. GUIDELINES FOR REVIEWS</strong>
                </h3>
                <p>
                  We may provide you areas on the Services to leave reviews or
                  ratings.
                </p>
                <p>
                  When posting a review, you must comply with the following
                  criteria:
                </p>
                <ul>
                  <li>
                    You should have first-hand experience with the person/entity
                    being reviewed.
                  </li>
                  <li>
                    Your reviews should not contain offensive profanity, or
                    abusive, racist, offensive, or hateful language.
                  </li>
                  <li>
                    Your reviews should not contain discriminatory references
                    based on religion, race, gender, national origin, age,
                    marital status, sexual orientation, or disability.
                  </li>
                  <li>
                    Your reviews should not contain references to illegal
                    activity.
                  </li>
                  <li>
                    You should not be affiliated with competitors if posting
                    negative reviews.
                  </li>
                  <li>
                    You should not make any conclusions as to the legality of
                    conduct.
                  </li>
                  <li>You may not post any false or misleading statements.</li>
                  <li>
                    You may not organize a campaign encouraging others to post
                    reviews, whether positive or negative.
                  </li>
                </ul>
                <p>
                  We may accept, reject, or remove reviews in our sole
                  discretion. We have absolutely no obligation to screen reviews
                  or to delete reviews, even if anyone considers reviews
                  objectionable or inaccurate.
                </p>
                <p>
                  Reviews are not endorsed by us and do not necessarily
                  represent our opinions or the views of any of our affiliates
                  or partners. We do not assume liability for any review or for
                  any claims, liabilities, or losses resulting from any review.
                </p>
                <p>
                  By posting a review, you hereby grant to us a perpetual,
                  non-exclusive, worldwide, royalty-free, fully paid,
                  assignable, and sublicensable right and license to reproduce,
                  modify, translate, transmit by any means, display, perform,
                  and/or distribute all content relating to the review.
                </p>
              </div>
              <div
                id="services_management"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>10. SERVICES MANAGEMENT</strong>
                </h3>

                <p>We reserve the right, but not the obligation, to:</p>
                <ul>
                  <li>
                    Monitor the Services for violations of these Legal Terms.
                  </li>
                  <li>
                    Take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Legal Terms,
                    including without limitation, reporting such user to law
                    enforcement authorities.
                  </li>
                  <li>
                    In our sole discretion and without limitation, refuse,
                    restrict access to, limit the availability of, or disable
                    (to the extent technologically feasible) any of your
                    Contributions or any portion thereof.
                  </li>
                  <li>
                    In our sole discretion and without limitation, notice, or
                    liability, to remove from the Services or otherwise disable
                    all files and content that are excessive in size or are in
                    any way burdensome to our systems.
                  </li>
                  <li>
                    Otherwise manage the Services in a manner designed to
                    protect our rights and property and to facilitate the proper
                    functioning of the Services.
                  </li>
                </ul>
              </div>
              <div id="privacy_policy" className={Style.sub_content_section}>
                <h3>
                  <strong>11. PRIVACY POLICY</strong>
                </h3>
                <p>We care about data privacy and security.</p>
                <p>
                  By using the Services, you agree to be bound by our&nbsp;
                  <a href="/privacy-policy">Privacy Policy</a>&nbsp;posted on
                  the Services, which is incorporated into these Legal Terms.
                </p>
                <p>
                  Please be advised the Services are hosted in India, Poland,
                  and the United States. If you access the Services from any
                  other region of the world with laws or other requirements
                  governing personal data collection, use, or disclosure that
                  differ from applicable laws in India, Poland, and the United
                  States, then through your continued use of the Services, you
                  are transferring your data to India, Poland, and the United
                  States, and you expressly consent to have your data
                  transferred to and processed in India, Poland, and the United
                  States.
                </p>
                <p>
                  Further, we do not knowingly accept, request, or solicit
                  information from children or knowingly market to children.
                  Therefore, in accordance with the{" "}
                  <strong>U.S. Children's Online Privacy Protection Act</strong>
                  , if we receive actual knowledge that anyone under the age of
                  13 has provided personal information to us without the
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
                  <strong>12. TERM AND TERMINATION</strong>
                </h3>
                <p>
                  These Legal Terms shall remain in full force and effect while
                  you use the Services.
                </p>
                <p>
                  WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS,{" "}
                  <strong>
                    WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
                    NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
                    (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
                    ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                    FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                    CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
                    REGULATION.
                  </strong>
                </p>
                <p>
                  <strong>
                    WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES
                    OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT
                    YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                    DISCRETION.
                  </strong>{" "}
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third
                  party. In addition to terminating or suspending your account,{" "}
                  <strong>
                    WE RESERVE THE RIGHT TO TAKE APPROPRIATE LEGAL ACTION,
                    INCLUDING WITHOUT LIMITATION PURSUING CIVIL, CRIMINAL, AND
                    INJUNCTIVE REDRESS.
                  </strong>
                </p>
              </div>
              <div
                id="modifications_and_interruptions"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>13. MODIFICATIONS AND INTERRUPTIONS</strong>
                </h3>
                <p>
                  These Legal Terms shall remain in full force and effect while
                  you use the Services.
                </p>
                <p>
                  <strong>
                    WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS,
                    WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
                    NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
                    (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
                    ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                    FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                    CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
                    REGULATION.
                  </strong>
                </p>
                <p>
                  <strong>
                    WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES
                    OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT
                    YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                    DISCRETION.
                  </strong>{" "}
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third
                  party. In addition to terminating or suspending your account,{" "}
                  <strong>
                    WE RESERVE THE RIGHT TO TAKE APPROPRIATE LEGAL ACTION,
                    INCLUDING WITHOUT LIMITATION PURSUING CIVIL, CRIMINAL, AND
                    INJUNCTIVE REDRESS.
                  </strong>
                </p>
              </div>
              <div id="governing_law" className={Style.sub_content_section}>
                <h3>
                  <strong>14. GOVERNING LAW</strong>
                </h3>
                <p>
                  These Legal Terms and your use of the Services are governed by
                  and construed in accordance with the laws of the State of
                  California applicable to agreements made and to be entirely
                  performed within the State of California, without regard to
                  its conflict of law principles.
                </p>
              </div>
              <div
                id="dispute_resolution"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>15. DISPUTE RESOLUTION</strong>
                </h3>
                <p>
                  <strong>Binding Arbitration</strong>
                </p>
                <p>
                  If the Parties are unable to resolve a Dispute through
                  informal negotiations, the Dispute (except those Disputes
                  expressly excluded below) will be finally and exclusively
                  resolved by binding arbitration.{" "}
                  <strong>
                    YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE
                    THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
                  </strong>
                </p>
                <p>
                  The arbitration shall be commenced and conducted under the
                  Commercial Arbitration Rules of the American Arbitration
                  Association ("AAA") and, where appropriate, the AAA's
                  Supplementary Procedures for Consumer Related Disputes ("AAA
                  Consumer Rules"), both of which are available at the{" "}
                  <strong>
                    &nbsp;
                    <a href="https://www.adr.org/">
                      American Arbitration Association (AAA) website
                    </a>
                    &nbsp;
                  </strong>
                  . Your arbitration fees and your share of arbitrator
                  compensation shall be governed by the AAA Consumer Rules and,
                  where appropriate, limited by the AAA Consumer Rules.
                </p>
                <p>
                  The arbitration may be conducted in person, through the
                  submission of documents, by phone, or online. The arbitrator
                  will make a decision in writing, but need not provide a
                  statement of reasons unless requested by either Party. The
                  arbitrator must follow applicable law, and any award may be
                  challenged if the arbitrator fails to do so. Except where
                  otherwise required by the applicable AAA rules or applicable
                  law, the arbitration will take place in United States Of
                  America, California.
                </p>
                <p>
                  Except as otherwise provided herein, the Parties may litigate
                  in court to compel arbitration, stay proceedings pending
                  arbitration, or to confirm, modify, vacate, or enter judgment
                  on the award entered by the arbitrator. If for any reason, a
                  Dispute proceeds in court rather than arbitration, the Dispute
                  shall be commenced or prosecuted in the state and federal
                  courts located in INDIA and the Parties hereby consent to, and
                  waive all defenses of lack of personal jurisdiction, and forum
                  non convenience with respect to venue and jurisdiction in such
                  state and federal courts.
                </p>
                <p>
                  Application of the United Nations Convention on Contracts for
                  the International Sale of Goods and the Uniform Computer
                  Information Transaction Act (UCITA) are excluded from these
                  Legal Terms. In no event shall any Dispute brought by either
                  Party related in any way to the Services be commenced more
                  than one (1) year after the cause of action arose. If this
                  provision is found to be illegal or unenforceable, then
                  neither Party will elect to arbitrate any Dispute falling
                  within that portion of this provision found to be illegal or
                  unenforceable and such Dispute shall be decided by a court of
                  competent jurisdiction within the courts listed for
                  jurisdiction above, and the Parties agree to submit to the
                  personal jurisdiction of that court.
                </p>
                <p>
                  <strong>Restrictions</strong>
                </p>
                <p>
                  The Parties agree that any arbitration shall be limited to the
                  Dispute between the Parties individually. To the full extent
                  permitted by law, (a) no arbitration shall be joined with any
                  other proceeding; (b) there is no right or authority for any
                  Dispute to be arbitrated on a class-action basis or to utilize
                  class action procedures; and (c) there is no right or
                  authority for any Dispute to be brought in a purported
                  representative capacity on behalf of the general public or any
                  other persons.
                </p>
                <p>
                  <strong>Exceptions to Arbitration</strong>
                </p>
                <p>
                  The Parties agree that the following Disputes are not subject
                  to the above provisions concerning binding arbitration: (a)
                  any Disputes seeking to enforce or protect, or concerning the
                  validity of, any of the intellectual property rights of a
                  Party; (b) any Dispute related to, or arising from,
                  allegations of theft, piracy, invasion of privacy, or
                  unauthorized use; and (c) any claim for injunctive relief. If
                  this provision is found to be illegal or unenforceable, then
                  neither Party will elect to arbitrate any Dispute falling
                  within that portion of this provision found to be illegal or
                  unenforceable and such Dispute shall be decided by a court of
                  competent jurisdiction within the courts listed for
                  jurisdiction above, and the Parties agree to submit to the
                  personal jurisdiction of that court.
                </p>
              </div>
              <div id="corrections" className={Style.sub_content_section}>
                <h3>
                  <strong>16. CORRECTIONS</strong>
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
                  <strong>17. DISCLAIMER</strong>
                </h3>
                <p>
                  <strong>
                    THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                    BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                    YOUR SOLE RISK.
                  </strong>{" "}
                  TO THE FULLEST EXTENT PERMITTED BY LAW,{" "}
                  <strong>
                    WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                    CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
                    INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                    NON-INFRINGEMENT.
                  </strong>{" "}
                  WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
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
                  THE SERVICES.
                </p>

                <p>
                  <strong>
                    WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                    RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                    OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
                    HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
                    FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT
                    BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
                    ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
                    PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
                    SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
                    USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
                    APPROPRIATE.
                  </strong>
                </p>
              </div>
              <div
                id="limitations_of_liability"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>18. LIMITATIONS OF LIABILITY </strong>
                </h3>
                <p>
                  <strong>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS
                    BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                    INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
                    PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS
                    OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                    SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES.
                  </strong>{" "}
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN,{" "}
                  <strong>
                    OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
                    OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO
                    THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6)
                    MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                  </strong>{" "}
                  CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                  LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
                  LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,{" "}
                  <strong>
                    SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                    APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                  </strong>
                </p>
              </div>
              <div id="indemnification" className={Style.sub_content_section}>
                <h3>
                  <strong>19. INDEMNIFICATION</strong>
                </h3>
                <p>
                  <strong>
                    You agree to defend, indemnify, and hold us harmless,
                    including our subsidiaries, affiliates, and all of our
                    respective officers, agents, partners, and employees, from
                    and against any loss, damage, liability, claim, or demand,
                    including reasonable attorneys' fees and expenses, made by
                    any third party due to or arising out of:
                  </strong>
                </p>

                <ul>
                  <li>
                    <strong>use of the Services;</strong>
                  </li>
                  <li>
                    <strong>breach of these Legal Terms;</strong>
                  </li>
                  <li>
                    <strong>
                      any breach of your representations and warranties set
                      forth in these Legal Terms;
                    </strong>
                  </li>
                  <li>
                    <strong>
                      your violation of the rights of a third party, including
                      but not limited to intellectual property rights;
                    </strong>
                  </li>
                  <li>
                    <strong>
                      any overt harmful act toward any other user of the
                      Services with whom you connected via the Services.
                    </strong>
                  </li>
                </ul>

                <p>
                  <strong>
                    Notwithstanding the foregoing, we reserve the right, at your
                    expense, to assume the exclusive defense and control of any
                    matter for which you are required to indemnify us, and you
                    agree to cooperate, at your expense, with our defense of
                    such claims. We will use reasonable efforts to notify you of
                    any such claim, action, or proceeding which is subject to
                    this indemnification upon becoming aware of it.
                  </strong>
                </p>
              </div>
              <div id="user_data" className={Style.sub_content_section}>
                <h3>
                  <strong>20. USER DATA</strong>
                </h3>
                <p>
                  <strong>
                    We will maintain certain data that you transmit to the
                    Services for the purpose of managing the performance of the
                    Services, as well as data relating to your use of the
                    Services.
                  </strong>{" "}
                  Although we perform regular routine backups of data,{" "}
                  <strong>
                    you are solely responsible for all data that you transmit or
                    that relates to any activity you have undertaken using the
                    Services.
                  </strong>{" "}
                  You agree that{" "}
                  <strong>
                    we shall have no liability to you for any loss or corruption
                    of any such data
                  </strong>
                  , and you hereby{" "}
                  <strong>
                    waive any right of action against us arising from any such
                    loss or corruption of such data.
                  </strong>
                </p>
              </div>
              <div
                id="electronic_communications_transactions_and_signatures"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>
                    21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS,AND SIGNATURES
                  </strong>
                </h3>
                <p>
                  Visiting the Services, sending us emails, and completing
                  online forms constitute electronic communications. You consent
                  to receive electronic communications, and you agree that{" "}
                  <strong>
                    all agreements, notices, disclosures, and other
                    communications we provide to you electronically, via email
                    and on the Services, satisfy any legal requirement that such
                    communication be in writing.
                  </strong>{" "}
                  YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                  DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS
                  INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby{" "}
                  <strong>
                    waive any rights or requirements under any statutes,
                    regulations, rules, ordinances, or other laws in any
                    jurisdiction which require an original signature or delivery
                    or retention of non-electronic records, or to payments or
                    the granting of credits by any means other than electronic
                    means.
                  </strong>
                </p>
              </div>
              <div
                id="california_users_and_residents"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>22. CALIFORNIA USERS AND RESIDENTS</strong>
                </h3>
                <p>
                  If any complaint with us is not satisfactorily resolved, you
                  can contact the Complaint Assistance Unit of the Division of
                  Consumer Services of the California Department of Consumer
                  Affairs in writing at{" "}
                  <strong>
                    1625 North Market Blvd., Suite N 112, Sacramento, California
                    95834
                  </strong>{" "}
                  or by telephone at <strong>(800) 952-5210</strong> or{" "}
                  <strong>(916) 445-1254</strong>.
                </p>
              </div>
              <div id="miscellaneous" className={Style.sub_content_section}>
                <h3>
                  <strong>23. MISCELLANEOUS</strong>
                </h3>
                <p>
                  <strong>
                    These Legal Terms and any policies or operating rules posted
                    by us on the Services or in respect to the Services
                    constitute the entire agreement and understanding between
                    you and us.
                  </strong>{" "}
                  Our failure to exercise or enforce any right or provision of
                  these Legal Terms shall not operate as a waiver of such right
                  or provision. These Legal Terms operate to the fullest extent
                  permissible by law.{" "}
                  <strong>
                    We may assign any or all of our rights and obligations to
                    others at any time.
                  </strong>{" "}
                  <strong>
                    We shall not be responsible or liable for any loss, damage,
                    delay, or failure to act caused by any cause beyond our
                    reasonable control.
                  </strong>{" "}
                  If any provision or part of a provision of these Legal Terms
                  is determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from
                  these Legal Terms and does not affect the validity and
                  enforceability of any remaining provisions.{" "}
                  <strong>
                    There is no joint venture, partnership, employment or agency
                    relationship created between you and us as a result of these
                    Legal Terms or use of the Services.
                  </strong>{" "}
                  You agree that these Legal Terms will not be construed against
                  us by virtue of having drafted them.{" "}
                  <strong>
                    You hereby waive any and all defenses you may have based on
                    the electronic form of these Legal Terms and the lack of
                    signing by the parties hereto to execute these Legal Terms.
                  </strong>
                </p>
              </div>
              <div id="cookie_policy" className={Style.sub_content_section}>
                <h3>
                  <strong>24. COOKIE POLICY</strong>
                </h3>
                <p>
                  <strong>
                    This Cookie Policy explains how we use cookies and similar
                    technologies to recognize you when you visit our website at
                    &nbsp;<a href="https://www.eagle-bot.com"> Eagle Bot</a>
                    &nbsp; ("Website").
                  </strong>{" "}
                  It explains what these technologies are and why we use them,
                  as well as your rights to control our use of them.{" "}
                  <strong>
                    In some cases, we may use cookies to collect personal
                    information, or that becomes personal information if we
                    combine it with other information.
                  </strong>
                </p>

                <p>
                  <strong>What are cookies?</strong> Cookies are small data
                  files that are placed on your computer or mobile device when
                  you visit a website. Cookies are widely used by website owners
                  in order to make their websites work, or to work more
                  efficiently, as well as to provide reporting information.
                  Cookies set by the website owner (in this case, Antimatterr
                  LLC) are called "first-party cookies." Cookies set by parties
                  other than the website owner are called "third-party cookies."
                  Third-party cookies enable third-party features or
                  functionality to be provided on or through the website (e.g.,
                  advertising, interactive content, and analytics). The parties
                  that set these third-party cookies can recognize your computer
                  both when it visits the website in question and also when it
                  visits certain other websites.
                </p>

                <p>
                  <strong>Why do we use cookies?</strong> We use first- and
                  third-party cookies for several reasons. Some cookies are
                  required for technical reasons in order for our Website to
                  operate, and we refer to these as "essential" or "strictly
                  necessary" cookies. Other cookies also enable us to track and
                  target the interests of our users to enhance the experience on
                  our Online Properties. Third parties serve cookies through our
                  Website for advertising, analytics, and other purposes. This
                  is described in more detail below.
                </p>

                <p>
                  <strong>How can I control cookies?</strong> You have the right
                  to decide whether to accept or reject cookies. You can
                  exercise your cookie rights by setting your preferences in the
                  Cookie Consent Manager. The Cookie Consent Manager allows you
                  to select which categories of cookies you accept or reject.
                  Essential cookies cannot be rejected as they are strictly
                  necessary to provide you with services. The Cookie Consent
                  Manager can be found in the notification banner and on our
                  website. If you choose to reject cookies, you may still use
                  our website though your access to some functionality and areas
                  of our website may be restricted. You may also set or amend
                  your web browser controls to accept or refuse cookies.
                </p>

                <p>
                  <strong>How can I control cookies on my browser?</strong> As
                  the means by which you can refuse cookies through your web
                  browser controls vary from browser to browser, you should
                  visit your browser's help menu for more information.
                </p>

                <p>
                  <strong>
                    What about other tracking technologies, like web beacons?
                  </strong>{" "}
                  Cookies are not the only way to recognize or track visitors to
                  a website. We may use other, similar technologies from time to
                  time, like web beacons (sometimes called "tracking pixels" or
                  "clear gifs"). These are tiny graphics files that contain a
                  unique identifier that enables us to recognize when someone
                  has visited our Website or opened an email including them.
                </p>

                <p>
                  <strong>
                    Do you use Flash cookies or Local Shared Objects?
                  </strong>{" "}
                  Websites may also use so-called "Flash Cookies" (also known as
                  Local Shared Objects or "LSOs") to, among other things,
                  collect and store information about your use of our services,
                  fraud prevention, and for other site operations. If you do not
                  want Flash Cookies stored on your computer, you can adjust the
                  settings of your Flash player to block Flash Cookies storage
                  using the tools contained in the Website Storage Settings
                  Panel.
                </p>

                <p>
                  <strong>Do you serve targeted advertising?</strong> Third
                  parties may serve cookies on your computer or mobile device to
                  serve advertising through our Website.
                </p>

                <p>
                  <strong>How often will you update this Cookie Policy?</strong>{" "}
                  We may update this Cookie Policy from time to time in order to
                  reflect, for example, changes to the cookies we use or for
                  other operational, legal, or regulatory reasons.
                </p>

                <p>
                  Please therefore revisit this Cookie Policy regularly to stay
                  informed about our use of cookies and related technologies.
                  The date at the top of this Cookie Policy indicates when it
                  was last updated.
                </p>
              </div>
              <div id="contact_us" className={Style.sub_content_section}>
                <h3>
                  <strong>25. CONTACT US</strong>
                </h3>
                <p>
                  In order to resolve a complaint regarding the Services or to
                  receive further information regarding use of the Services,
                  please contact us at: support@eagle-bot.com
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
