import { useEffect } from "react";
import Style from "./style.module.css";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";

const TermsAndCons = () => {
  useEffect(() => {
    document.title = "Terms & conditions | Eagle Bot";
    return () => {
      document.title = "Eagle Bot";
    };
  });
  return (
    <div className="termsAndConsSection">
      <div className={Style.logo}>
        <img src={EagleBotLogoSvg} alt="EagleBot logo"></img>
      </div>
      <div className={Style.body_container}>
        <div className={Style.menu_container}>
          <h4 style={{ textAlign: "center", marginBottom: "5%" }}>AGENTA</h4>
          <ul>
            <li>
              <a href="#our_services">1. OUR SERVICES</a>
            </li>
            <li>
              <a href="#intellectual_property_rights">
                2. INTELLECTUAL PROPERTY RIGHTS
              </a>
            </li>
            <li>
              <a href="#user_representations">3. USER REPRESENTATIONS</a>
            </li>
            <li>
              <a href="#user_registration">4. USER REGISTRATION</a>
            </li>
            <li>
              <a href="#software">5. SOFTWARE</a>
            </li>
            <li>
              <a href="#prohibited_activities">6. PROHIBITED ACTIVITIES</a>
            </li>
            <li>
              <a href="#user_generated_contributions">
                7. USER GENERATED CONTRIBUTIONS
              </a>
            </li>
            <li>
              <a href="#contribution_license">8. CONTRIBUTION LICENSE</a>
            </li>
            <li>
              <a href="#guidelines_for_reviews">9. GUIDELINES FOR REVIEWS</a>
            </li>
            <li>
              <a href="#services_management">10. SERVICES MANAGEMENT</a>
            </li>
            <li>
              <a href="#privacy_policy">11. PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#term_and_termination">12. TERM AND TERMINATION</a>
            </li>
            <li>
              <a href="#modifications_and_interruptions">
                13. MODIFICATIONS AND INTERRUPTIONS
              </a>
            </li>
            <li>
              <a href="#governing_law">14. GOVERNING LAW</a>
            </li>
            <li>
              <a href="#dispute_resolution">15. DISPUTE RESOLUTION</a>
            </li>
            <li>
              <a href="#corrections">16. CORRECTIONS</a>
            </li>
            <li>
              <a href="#disclaimer">17. DISCLAIMER</a>
            </li>
            <li>
              <a href="#limitations_of_liability">
                18. LIMITATIONS OF LIABILITY
              </a>
            </li>
            <li>
              <a href="#indemnification">19. INDEMNIFICATION</a>
            </li>
            <li>
              <a href="#user_data">20. USER DATA</a>
            </li>
            <li>
              <a href="#electronic_communications_transactions_and_signatures">
                21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </a>
            </li>
            <li>
              <a href="#california_users_and_residents">
                22. CALIFORNIA USERS AND RESIDENTS
              </a>
            </li>
            <li>
              <a href="#miscellaneous">23. MISCELLANEOUS</a>
            </li>
            <li>
              <a href="#cookie_policy">24. COOKIE POLICY</a>
            </li>
            <li>
              <a href="#contact_us">25. CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1 style={{ textAlign: "center" }}>
                Eagle Bot Terms & Conditions
              </h1>
            </div>
            <div className={Style.panel_body}>
              <p style={{ borderBottom: "1px solid gray" }}>
                <strong>Last updated </strong>
                <strong>Sept. 15, 2023</strong>
              </p>
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
                  license agreement ( "EULA" ), the terms of the EULA will
                  govern your use of the software. If such software is not
                  accompanied by a EULA, then we grant to you a non-exclusive,
                  revocable, personal, and non-transferable license to use such
                  software solely in connection with our services and in
                  accordance with these Legal Terms. Any software and any
                  related documentation is provided "ASIS" without warranty of
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
                  <strong>6. PROHIBITED ACTIVITIES</strong>
                </h3>
                <p>
                  You may not access or use the Services for any purpose other
                  than that for which we make the Services available. The
                  Services may not be used in connection with any commercial
                  endeavors except those that are specifically endorsed or
                  approved by us. As a user of the Services, you agree not to:
                  Systematically retrieve data or other content from the
                  Services to create or compile, directly or indirectly, a
                  collection, compilation, database, or directory without
                  written permission from us. Trick, defraud, or mislead us and
                  other users, especially in any attempt to learn sensitive
                  account information such as user passwords. Circumvent,
                  disable, or otherwise interfere with security-related features
                  of the Services, including features that prevent or restrict
                  the use or copying of any Content or enforce limitations on
                  the use of the Services and/or the Content contained therein.
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Services. Use any information obtained from the
                  Services in order to harass, abuse, or harm another person.
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct. Use the Services in a manner
                  inconsistent with any applicable laws or regulations. Engage
                  in unauthorized framing of or linking to the Services. Upload
                  or transmit (or attempt to upload or to transmit) viruses,
                  Trojan horses, or other material, including excessive use of
                  capital letters and spamming(continuous posting of repetitive
                  text), that interferes with any party's uninterrupted use and
                  enjoyment of the Services or modifies, impairs, disrupts,
                  alters, or interferes with the use, features, functions,
                  operation, or maintenance of the Services. Engage in any
                  automated use of the system, such as using scripts to send
                  comments or messages, or using any data mining, robots, or
                  similar data gathering and extraction tools. Delete the
                  copyright or other proprietary rights notice from any Content.
                  Attempt to impersonate another user or person or use the
                  username of another user. Upload or transmit (or attempt to
                  upload or to transmit) any material that acts as a passive or
                  active information collection or transmission mechanism,
                  including without limitation, clear graphics interchange
                  formats ( "gifs" ), 1x1 pixels, web bugs, cookies, or other
                  similar devices (sometimes referred to as "spyware" or
                  "passive collection mechanisms" or "pcms"). Interfere with,
                  disrupt, or create an undue burden on the Services or the
                  networks or services connected to the Services. Harass, annoy,
                  intimidate, or threaten any of our employees or agents engaged
                  in providing any portion of the Services to you. Attempt to
                  bypass any measures of the Services designed to prevent or
                  restrict access to the Services, or any portion of the
                  Services. Copy or adapt the Services' software, including but
                  not limited to Flash, PHP,HTML, JavaScript, or other code.
                  Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software
                  comprising or in any way making up apart of the Services.
                  Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Services, or use or launch any unauthorized
                  script or other software. Use a buying agent or purchasing
                  agent to make purchases on the Services. Make any unauthorized
                  use of the Services, including collecting usernames and/or
                  email addresses of users by electronic or other means for the
                  purpose of sending unsolicited email, or creating user
                  accounts by automated means or under false pretenses. Use the
                  Services as part of any effort to compete with us or otherwise
                  use the Services and/or the Content for any revenue-generating
                  endeavor or commercial enterprise. Use the Services to
                  advertise or offer to sell goods and services. Sell or
                  otherwise transfer your profile.
                </p>
              </div>
              <div
                id="user_generated_contributions"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>7. USER GENERATED CONTRIBUTIONS</strong>
                </h3>
                <p>
                  The Services does not offer users to submit or post content.
                  We may provide you with the opportunity to create, submit,
                  post, display, transmit, perform, publish, distribute, or
                  broadcast content and materials to us or on the Services,
                  including but not limited to text, writings, video, audio,
                  photographs, graphics, comments, suggestions, or personal
                  information or other material (collectively, "Contributions").
                  Contributions may be viewable by other users of the Services
                  and through third-party websites. When you create or make
                  available any Contributions, you thereby represent and warrant
                  that: The creation, distribution, transmission, public
                  display, or performance, and the accessing, downloading, or
                  copying of your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party. You are the creator and owner of or have the
                  necessary licenses, rights, consents, releases, and
                  permissions to use and to authorize us, the Services, and
                  other users of the Services to use your Contributions in any
                  manner contemplated by the Services and these Legal Terms. You
                  have the written consent, release, and/or permission of each
                  and every identifiable individual person in your Contributions
                  to use the name or likeness of each and every such
                  identifiable individual person to enable inclusion and use of
                  your Contributions in any manner contemplated by the Services
                  and these Legal Terms. Your Contributions are not false,
                  inaccurate, or misleading. Your Contributions are not
                  unsolicited or unauthorized advertising, promotional
                  materials, pyramid schemes, chain letters, spam, mass
                  mailings, or other forms of solicitation. Your Contributions
                  are not obscene, lewd, lascivious, filthy, violent, harassing,
                  libelous, slanderous, or otherwise objectionable (as
                  determined by us). Your Contributions do not ridicule, mock,
                  disparage, intimidate, or abuse anyone. Your Contributions are
                  not used to harass or threaten (in the legal sense of those
                  terms) any other person and to promote violence against a
                  specific person or class of people. Your Contributions do not
                  violate any applicable law, regulation, or rule. Your
                  Contributions do not violate the privacy or publicity rights
                  of any third party. Your Contributions do not violate any
                  applicable law concerning child pornography, or otherwise
                  intended to protect the health or well-being of minors. Your
                  Contributions do not include any offensive comments that are
                  connected to race, national origin, gender, sexual preference,
                  or physical handicap. Your Contributions do not otherwise
                  violate, or link to material that violates, any provision of
                  these Legal Terms, or any applicable law or regulation. Any
                  use of the Services in violation of the foregoing violates
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
                  your choices (including settings). By submitting suggestions
                  or other feedback regarding the Services, you agree that we
                  can use and share such feedback for any purpose without
                  compensation to you. We do not assert any ownership over your
                  Contributions. You retain full ownership of all of your
                  Contributions and any intellectual property rights or other
                  proprietary rights associated with your Contributions. We are
                  not liable for any statements or representations in your
                  Contributions provided by you in any area on the Services. You
                  are solely responsible for your Contributions to the Services
                  and you expressly agree to exonerate us from any and all
                  responsibility and to refrain from any legal action against us
                  regarding your Contributions.
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
                  ratings. When posting a review, you must comply with the
                  following criteria: (1) you should have first hand experience
                  with the person/entity being reviewed; (2) your reviews should
                  not contain offensive profanity, or abusive, racist,
                  offensive, or hateful language; (3) your reviews should not
                  contain discriminatory references based on religion, race,
                  gender, national origin, age, marital status, sexual
                  orientation, or disability; (4) your reviews should not
                  contain references to illegal activity; (5) you should not be
                  affiliated with competitors if posting negative reviews; (6)
                  you should not make any conclusions as to the legality of
                  conduct; (7) you may not post any false or misleading
                  statements; and (8) you may not organize a campaign
                  encouraging others to post reviews, whether positive or
                  negative. We may accept, reject, or remove reviews in our sole
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
              <div
                id="services_management"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>10. SERVICES MANAGEMENT</strong>
                </h3>
                <p>
                  We reserve the right, but not the obligation, to: (1) monitor
                  the Services for violations of these Legal Terms; (2) take
                  appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Legal Terms, including
                  without limitation, reporting such user to law enforcement
                  authorities; (3) in our sole discretion and without
                  limitation, refuse, restrict access to, limit the availability
                  of, or disable (to the extent technologically feasible) any of
                  your Contributions or any portion thereof; (4) in our sole
                  discretion and without limitation, notice, or liability, to
                  remove from the Services or otherwise disable all files and
                  content that are excessive in size or are in any way
                  burdensome to our systems; and (5) otherwise manage the
                  Services in a manner designed to protect our rights and
                  property and to facilitate the proper functioning of the
                  Services.
                </p>
              </div>
              <div id="privacy_policy" className={Style.sub_content_section}>
                <h3>
                  <strong>11. PRIVACY POLICY</strong>
                </h3>
                <p>We care about data privacy and security.</p>{" "}
                <p>
                  By using the Services, you agree to be bound by our Privacy
                  Policy posted on the Services, which is incorporated into
                  these Legal Terms. Please be advised the Services are hosted
                  in India, Poland and United States. If you access the Services
                  from any other region of the world with laws or other
                  requirements governing personal data collection, use, or
                  disclosure that differ from applicable laws in India, Poland
                  and United States, then through your continued use of the
                  Services, you are transferring your data to India, Poland and
                  United States, and you expressly consent to have your data
                  transferred to and processed in India, Poland and United
                  States. Further, we do not knowingly accept, request, or
                  solicit information from children or knowingly market to
                  children. Therefore, in accordance with the U.S. Children's
                  Online Privacy Protection Act, if we receive actual knowledge
                  that anyone under the age of 13 has provided personal
                  information to us without the requisite and verifiable
                  parental consent, we will delete that information from the
                  Services as quickly as is reasonably practical.
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
                  you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                  THESE LEGAL TERMS, WERESERVE THE RIGHT TO, IN OUR SOLE
                  DISCRETION AND WITHOUT NOTICEOR LIABILITY, DENY ACCESS TO AND
                  USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                  TO ANY PERSON FOR ANY REASON ORFOR NO REASON, INCLUDING
                  WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY,
                  OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
                  APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
                  PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
                  CONTENT OR INFORMATION THAT YOU POSTED AT ANYTIME, WITHOUT
                  WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend
                  your account for any reason, you are prohibited from
                  registering and creating a new account under your name, a fake
                  or borrowed name, or the name of any third party, even if you
                  may be acting on behalf of the third party in addition to
                  terminating or suspending your account, we reserve the right
                  to take appropriate legal action, including without limitation
                  pursuing civil, criminal, and injunctive redress.
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
                  We reserve the right to change, modify, or remove the contents
                  of the Services at anytime or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Services. We will not be liable
                  to you or any third party for any modification, price change,
                  suspension, or discontinuance of the Services. We cannot
                  guarantee the Services will be available at all times. We may
                  experience hardware, software, or other problems or need to
                  perform maintenance related to the Services, resulting in
                  interruptions, delays, or errors. We reserve the right to
                  change, revise, update, suspend, discontinue, or otherwise
                  modify the Services at any time or for any reason without
                  notice to you. You agree that we have no liability whatsoever
                  for any loss, damage, or inconvenience caused by your
                  inability to access or use the Services during any downtime or
                  discontinuance of the Services. Nothing in these Legal Terms
                  will be construed to obligate us to maintain and support the
                  Services or to supply any corrections, updates, or releases in
                  connection therewith.
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
                  Binding Arbitration If the Parties are unable to resolve a
                  Dispute through informal negotiations, the Dispute (except
                  those Disputes expressly excluded below) will be finally and
                  exclusively resolved by binding arbitration. YOU UNDERSTAND
                  THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE
                  IN COURT AND HAVE A JURY TRIAL. The arbitration shall be
                  commenced and conducted under the Commercial Arbitration Rules
                  of the American Arbitration Association ( "AAA" ) and, where
                  appropriate, the AAA's Supplementary Procedures for Consumer
                  Related Disputes ( "AAA Consumer Rules" ), both of which are
                  available at the American Arbitration Association (AAA)
                  website . Your arbitration fees and your share of arbitrator
                  compensation shall be governed by the AAA Consumer Rules and,
                  where appropriate, limited by the AAA Consumer Rules. The
                  arbitration may be conducted in person, through the submission
                  of documents, by phone, or online. The arbitrator will make a
                  decision in writing, but need not provide a statement of
                  reasons unless requested by either Party. The arbitrator must
                  follow applicable law, and any award may be challenged if the
                  arbitrator fails to do so. Except where otherwise required by
                  the applicable AAA rules or applicable law, the arbitration
                  will take place in United States Of America, California.
                  Except as otherwise provided herein, the Parties may litigate
                  in court to compel arbitration, stay proceedings pending
                  arbitration, or to confirm, modify, vacate, or enter judgment
                  on the award entered by the arbitrator. If for any reason, a
                  Dispute proceeds in court rather than arbitration, the Dispute
                  shall be commenced or prosecuted in the state and federal
                  courts located in INDIA and the Parties hereby consent to, and
                  waive all defenses of lack of personal jurisdiction, and forum
                  non convenience with respect to venue and jurisdiction in such
                  state and federal courts. Application of the United Nations
                  Convention on Contracts for the International Sale of Goods
                  and the Uniform Computer Information Transaction Act (UCITA)
                  are excluded from these Legal Terms. In no event shall any
                  Dispute brought by either Party related in any way to the
                  Services be commenced more than one (1) years after the cause
                  of action arose. If this provision is found to be illegal or
                  unenforceable, then neither Party will elect to arbitrate any
                  Dispute falling within that portion of this provision found to
                  be illegal or unenforceable and such Dispute shall be decided
                  by a court of competent jurisdiction within the courts listed
                  for jurisdiction above, and the Parties agree to submit to the
                  personal jurisdiction of that court. Restrictions The Parties
                  agree that any arbitration shall be limited to the Dispute
                  between the Parties individually. To the full extent permitted
                  by law, (a) no arbitration shall be joined with any other
                  proceeding; (b) there is no right or authority for any Dispute
                  to be arbitrated on a class-action basis or to utilize class
                  action procedures; and (c) there is no right or authority for
                  any Dispute to be brought in a purported representative
                  capacity on behalf of the general public or any other persons.
                  Exceptions to Arbitration The Parties agree that the following
                  Disputes are not subject to the above provisions concerning
                  binding arbitration: (a) any Disputes seeking to enforce or
                  protect, or concerning the validity of, any of the
                  intellectual property rights of a Party; (b) any Dispute
                  related to, or arising from, allegations of theft, piracy,
                  invasion of privacy, or unauthorized use; and (c) any claim
                  for injunctive relief. If this provision is found to be
                  illegal or unenforceable, then neither Party will elect to
                  arbitrate any Dispute falling within that portion of this
                  provision found to be illegal or unenforceable and such
                  Dispute shall be decided by a court of competent jurisdiction
                  within the courts listed for jurisdiction above, and the
                  Parties agree to submit to the personal jurisdiction of that
                  court.
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
                  WILL ASSUME NO LIABILITY OR RESPONSIBILITY FORANY (1) ERRORS,
                  MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                  PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                  RESULTING FROM YOUR ACCESS TO AND USE OF THESERVICES, (3) ANY
                  UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
                  AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                  STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                  TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                  TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TOOR
                  THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                  OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
                  ORDAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
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
              </div>
              <div
                id="limitations_of_liability"
                className={Style.sub_content_section}
              >
                <h3>
                  <strong>18. LIMITATIONS OF LIABILITY </strong>
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
                  AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH
                  PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING CERTAIN US STATE
                  LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
                  IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
                  DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
                  DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY
                  HAVE ADDITIONAL RIGHTS.
                </p>
              </div>
              <div id="indemnification" className={Style.sub_content_section}>
                <h3>
                  <strong>19. INDEMNIFICATION</strong>
                </h3>
                <p>
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys' fees and expenses, made by any
                  third party due to or arising out of: (1)use of the Services;
                  (2) breach of these Legal Terms; (3) any breach of your
                  representations and warranties set forth in these Legal Terms;
                  (4) your violation of the rights of a third party, including
                  but not limited to intellectual property rights; or (5) any
                  overt harmful act toward any other user of the Services with
                  whom you connected via the Services. Notwithstanding the
                  foregoing, we reserve the right, at your expense, to assume
                  the exclusive defense and control of any matter for which you
                  are required to indemnify us, and you agree to cooperate, at
                  your expense, with our defense of such claims. We will use
                  reasonable efforts to notify you of any such claim, action, or
                  proceeding which is subject to this indemnification upon
                  becoming aware of it.
                </p>
              </div>
              <div id="user_data" className={Style.sub_content_section}>
                <h3>
                  <strong>20. USER DATA</strong>
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
                    21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS,AND SIGNATURES
                  </strong>
                </h3>
                <p>
                  Visiting the Services, sending us emails, and completing
                  online forms constitute electronic communications. You consent
                  to receive electronic communications, and you agree that all
                  agreements, notices, disclosures, and other communications we
                  provide to you electronically, via email and on the Services,
                  satisfy any legal requirement that such communication be in
                  writing. YOU HEREBY AGREE TO THEUSE OF ELECTRONIC SIGNATURES,
                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                  DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS
                  INITIATED OR COMPLETED BY US OR VIA THESERVICES. You hereby
                  waive any rights or requirements under any statutes,
                  regulations, rules, ordinances, or other laws in any
                  jurisdiction which require an original signature or delivery
                  or retention of non-electronic records, or to payments or the
                  granting of credits by any means other than electronic means.
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
                  Affairs in writing at 1625 North Market Blvd., Suite N 112,
                  Sacramento, California 95834 or by telephone at (800) 952-5210
                  or (916) 445-1254.
                </p>
              </div>
              <div id="miscellaneous" className={Style.sub_content_section}>
                <h3>
                  <strong>23. MISCELLANEOUS</strong>
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
              <div id="cookie_policy" className={Style.sub_content_section}>
                <h3>
                  <strong>24. COOKIE POLICY</strong>
                </h3>
                <p>
                  This Cookie Policy explains how we uses cookies and similar
                  technologies to recognize you when you visit our website at
                  Eagle Bot ("Website"). It explains what these technologies are
                  and why we use them, as well as your rights to control our use
                  of them. In some cases we may use cookies to collect personal
                  information, or that becomes personal information if we
                  combine it with other information. What are cookies? Cookies
                  are small data files that are placed on your computer or
                  mobile device when you visit a website. Cookies are widely
                  used by website owners in order to make their websites work,
                  or to work more efficiently, as well as to provide reporting
                  information. Cookies set by the website owner (in this case,
                  Antimatterr LLC) are called "first-party cookies." Cookies set
                  by parties other than the website owner are called
                  "third-party cookies." Third-party cookies enable third-party
                  features or functionality to be provided on or through the
                  website (e.g., advertising, interactive content, and
                  analytics). The parties that set these third-party cookies can
                  recognize your computer both when it visits the website in
                  question and also when it visits certain other websites. Why
                  do we use cookies? We use first- and third-party cookies for
                  several reasons. Some cookies are required for technical
                  reasons in order for our Website to operate, and we refer to
                  these as "essential" or "strictly necessary" cookies. Other
                  cookies also enable us to track and target the interests of
                  our users to enhance the experience on our Online Properties.
                  Third parties serve cookies through our Website for
                  advertising, analytics, and other purposes. This is described
                  in more detail below. How can I control cookies? You have the
                  right to decide whether to accept or reject cookies. You can
                  exercise your cookie rights by setting your preferences in the
                  Cookie Consent Manager. The Cookie Consent Manager allows you
                  to select which categories of cookies you accept or reject.
                  Essential cookies cannot be rejected as they are strictly
                  necessary to provide you with services. The Cookie Consent
                  Manager can be found in the notification banner and on our
                  website. If you choose to reject cookies, you may still use
                  our website though your access to some functionality and areas
                  of our website may be restricted. You may also set or amend
                  your web browser controls to accept or refuse cookies. The
                  specific types of first- and third-party cookies served
                  through our Website and the purposes they perform are
                  described in the table below (please note that the specific
                  cookies served may vary depending on the specific Online
                  Properties you visit). How can I control cookies on my
                  browser? As the means by which you can refuse cookies through
                  your web browser controls vary from browser to browser, you
                  should visit your browser's help menu for more information.
                  The following is information about how to manage cookies on
                  the most popular browsers: Eagle Browser Chrome Internet
                  Explorer Firefox Safari Edge Opera In addition, most
                  advertising networks offer you a way to opt out of targeted
                  advertising. If you would like to find out more information,
                  please visit: Digital Advertising Alliance Digital Advertising
                  Alliance of Canada European Interactive Digital Advertising
                  Alliance What about other tracking technologies, like web
                  beacons? Cookies are not the only way to recognize or track
                  visitors to a website. We may use other, similar technologies
                  from time to time, like web beacons (sometimes called
                  "tracking pixels" or "clear gifs"). These are tiny graphics
                  files that contain a unique identifier that enables us to
                  recognize when someone has visited our Website or opened an
                  email including them. This allows us, for example, to monitor
                  the traffic patterns of users from one page within a website
                  to another, to deliver or communicate with cookies, to
                  understand whether you have come to the website from an online
                  advertisement displayed on a third-party website, to improve
                  site performance, and to measure the success of email
                  marketing campaigns. In many instances, these technologies are
                  reliant on cookies to function properly, and so declining
                  cookies will impair their functioning. Do you use Flash
                  cookies or Local Shared Objects? Websites may also use
                  so-called "Flash Cookies" (also known as Local Shared Objects
                  or "LSOs") to, among other things, collect and store
                  information about your use of our services, fraud prevention,
                  and for other site operations. If you do not want Flash
                  Cookies stored on your computer, you can adjust the settings
                  of your Flash player to block Flash Cookies storage using the
                  tools contained in the Website Storage Settings Panel . You
                  can also control Flash Cookies by going to the Global Storage
                  Settings Panel and following the instructions (which may
                  include instructions that explain, for example, how to delete
                  existing Flash Cookies (referred to "information" on the
                  Macromedia site), how to prevent Flash LSOs from being placed
                  on your computer without your being asked, and (for Flash
                  Player 8 and later) how to block Flash Cookies that are not
                  being delivered by the operator of the page you are on at the
                  time). Please note that setting the Flash Player to restrict
                  or limit acceptance of Flash Cookies may reduce or impede the
                  functionality of some Flash applications, including,
                  potentially, Flash applications used in connection with our
                  services or online content. Do you serve targeted advertising?
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
                  to provide these. How often will you update this Cookie
                  Policy? We may update this Cookie Policy from time to time in
                  order to reflect, for example, changes to the cookies we use
                  or for other operational, legal, or regulatory reasons. Please
                  therefore revisit this Cookie Policy regularly to stay
                  informed about our use of cookies and related technologies.
                  The date at the top of this Cookie Policy indicates when it
                  was last updated.
                </p>
              </div>
              <div id="contact_us" className={Style.sub_content_section}>
                <h3>
                  <strong>26. CONTACT US</strong>
                </h3>
                <p>
                  In order to resolve a complaint regarding the Services or to
                  receive further information regarding use of the Services,
                  please contact us at: support@eagle-bot.com
                </p>
              </div>
            </div>
            <div className={Style.footer}>
              {/* <div className={Style.footer_tools}>
                <div className={Style.gotoUp}>
                  <ArrowDropUpIcon color="error" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCons;
