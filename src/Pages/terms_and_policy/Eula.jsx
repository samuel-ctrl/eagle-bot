import { useEffect } from "react";
import Style from "./style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const Eula = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "End User Licence Agreement | Eagle Bot";
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
              <a href="#question-1">THE APPLICATION</a>
            </li>
            <li>
              <a href="#question-2">SCOPE OF LICENSE</a>
            </li>
            <li>
              <a href="#question-3">TECHNICAL REQUIREMENTS</a>
            </li>
            <li>
              <a href="#question-4">MAINTENANCE AND SUPPORT</a>
            </li>
            <li>
              <a href="#question-5">USE OF DATA</a>
            </li>
            <li>
              <a href="#question-6">USER-GENERATED CONTRIBUTIONS</a>
            </li>
            <li>
              <a href="#question-7">CONTRIBUTION LICENSE</a>
            </li>
            <li>
              <a href="#question-8">LIABILITY</a>
            </li>
            <li>
              <a href="#question-9">WARRANTY</a>
            </li>
            <li>
              <a href="#question-10"> PRODUCT CLAIMS</a>
            </li>
            <li>
              <a href="#question- 11">LEGAL COMPLIANCE</a>
            </li>
            <li>
              <a href="#question-12">CONTACT INFORMATION</a>
            </li>
            <li>
              <a href="#question-13">TERMINATION</a>
            </li>
            <li>
              <a href="#question-14">
                THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY
              </a>
            </li>
            <li>
              <a href="#question-15">INTELLECTUAL PROPERTY RIGHTS</a>
            </li>
            <li>
              <a href="#question-16">APPLICABLE LAW</a>
            </li>
            <li>
              <a href="#question-17">MISCELLANEOUS</a>
            </li>
          </ol>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1>Eagle Bot End User License Agreement Policy</h1>
            </div>
            <div className={Style.panel_body}>
              <p className={Style.update}>Last updated October 27, 2023</p>
              <div id="overview" className={Style.sub_content_section}>
                <p>
                  Eagle Browser is licensed to You (End-User) by Eagle Bot PTE
                  LTD, located and registered at 160 Robinson Rd, #14 04,
                  Singapore 068914, <strong>("Licensor")</strong>, for use only
                  under the terms of this License Agreement.
                </p>
                <p>
                  By downloading the Licensed Application from , and any update
                  thereto (as permitted by this License Agreement), You indicate
                  that You agree to be bound by all of the terms and conditions
                  of this License Agreement, and that You accept this License
                  Agreement. referred to in this License Agreement as &nbsp;
                  <strong>"Services."</strong>
                </p>
                <p>
                  The parties of this License Agreement acknowledge that the
                  Services are not a Party to this License Agreement and are not
                  bound by any provisions or obligations with regard to the
                  Licensed Application, such as warranty, liability, maintenance
                  and support thereof. Eagle Bot PTE LTD, not the Services, is
                  solely responsible for the Licensed Application and the
                  content thereof."
                </p>
                <p>
                  This License Agreement may not provide for usage rules for the
                  Licensed Application that are in conflict with the latest
                  ("Usage Rules"). Eagle Bot PTE LTD acknowledges that it had
                  the opportunity to review the Usage Rules and this License
                  Agreement is not conflicting with them.
                </p>
                <p>
                  This License Agreement may not provide for usage rules for the
                  Licensed Application that are in conflict with the latest
                  <strong>("Usage Rules")</strong>. Eagle Bot PTE LTD
                  acknowledges that it had the opportunity to review the Usage
                  Rules and this License Agreement is not conflicting with them.
                </p>
              </div>

              <div id="question-1" className={Style.sub_content_section}>
                <h3>
                  <strong>1. THE APPLICATION</strong>
                </h3>
                <p>
                  Eagle Browser <strong>("Licensed Application")</strong> is a
                  piece of software created to The Eagle Browser is a Chromium
                  Browser that has been integrated with the Eagle-Bot platform
                  and is customized to perform automations on MacOS and Windows{" "}
                  <strong>("Devices")</strong>. Besides surfing the web, the
                  Eagle browser can be used to perform automations in the
                  browser environment and across local applications on Windows
                  and MacOS
                </p>
                <p>
                  Furthermore, it is used to have conversations with a Open AI
                  GPT Chat-Bot, Perform Generative AI searches using Google
                  Search, Generate and draft AI content using other third
                  parties such as OpenAI and Stable Diffusion, Perform
                  Application Programming Interface (API) automations using
                  popular platforms and Perform local RPA automations on Windows
                  and MacOS.
                </p>
                <p>
                  The Licensed Application is not tailored to comply with
                  industry-specific regulations (Health Insurance Portability
                  and Accountability Act (HIPAA), Federal Information Security
                  Management Act (FISMA), etc.), so if your interactions would
                  be subjected to such laws, you may not use this Licensed
                  Application. You may not use the Licensed Application in a way
                  that would violate the Gramm-Leach-Bliley Act (GLBA)
                </p>
              </div>

              <div id="question-2" className={Style.sub_content_section}>
                <h3>
                  <strong>2. SCOPE OF LICENSE</strong>
                </h3>
                <p>
                  2.1 This license will also govern any updates of the Licensed
                  Application provided by Licensor that replace, repair, and/or
                  supplement the first Licensed Application, unless a separate
                  license is provided for such update, in which case the terms
                  of that new license will govern.
                </p>
                <p>
                  2.2 You may not share or make the Licensed Application
                  available to third parties (unless to the degree allowed by
                  the Usage Rules, and with Eagle Bot PTE LTD's prior written
                  consent), sell, rent, lend, lease or otherwise redistribute
                  the Licensed Application.
                </p>
                <p>
                  2.3 You may not reverse engineer, translate, disassemble,
                  integrate, decompile, remove, modify, combine, create
                  derivative works or updates of, adapt, or attempt to derive
                  the source code of the Licensed Application, or any part
                  thereof (except with Eagle Bot PTE LTD's prior written
                  consent)
                </p>
                <p>
                  2.4 You may not copy (excluding when expressly authorized by
                  this license and the Usage Rules) or alter the Licensed
                  Application or portions thereof. You may create and store
                  copies only on devices that You own or control for backup
                  keeping under the terms of this license, the Usage Rules, and
                  any other terms and conditions that apply to the device or
                  software used. You may not remove any intellectual property
                  notices. You acknowledge that no unauthorized third parties
                  may gain access to these copies at any time. If you sell your
                  Devices to a third party, you must remove the Licensed
                  Application from the Devices before doing so.
                </p>
                <p>
                  2.5 Violations of the obligations mentioned above, as well as
                  the attempt of such infringement, may be subject to
                  prosecution and damages.
                </p>
                <p>
                  2.6 Licensor reserves the right to modify the terms and
                  conditions of licensing.
                </p>
                <p>
                  2.7 Nothing in this license should be interpreted to restrict
                  third-party terms. When using the Licensed Application, You
                  must ensure that You comply with applicable third-party terms
                  and conditions.
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

              <div id="question-3" className={Style.sub_content_section}>
                <h3>
                  <strong>3. TECHNICAL REQUIREMENTS</strong>
                </h3>
                <p>
                  3.1 The Licensed Application requires a firmware version 2.0.0
                  or higher. Licensor recommends using the latest version of the
                  firmware.
                </p>
                <p>
                  3.2 Licensor attempts to keep the Licensed Application updated
                  so that it complies with modified/new versions of the firmware
                  and new hardware. You are not granted rights to claim such an
                  update.
                </p>
                <p>
                  3.3 You acknowledge that it is Your responsibility to confirm
                  and determine that the app end-user device on which You intend
                  to use the Licensed Application satisfies the technical
                  specifications mentioned above
                </p>
                <p>
                  3.4 Licensor reserves the right to modify the technical
                  specifications as it sees appropriate at any time.
                </p>
              </div>

              <div id="question-4" className={Style.sub_content_section}>
                <h3>
                  <strong>4. MAINTENANCE AND SUPPORT</strong>
                </h3>
                <p>
                  4.1 The Licensor is solely responsible for providing any
                  maintenance and support services for this Licensed
                  Application. You can reach the Licensor at the email address
                  listed in the Overview for this Licensed Application.
                </p>
                <p>
                  4.2 Eagle Bot PTE LTD and the End-User acknowledge that the
                  Services have no obligation whatsoever to furnish any
                  maintenance and support services with respect to the Licensed
                  Application.
                </p>
              </div>

              <div id="question-5" className={Style.sub_content_section}>
                <h3>
                  <strong>5. USE OF DATA</strong>
                </h3>
                <p>
                  You acknowledge that Licensor will be able to access and
                  adjust Your downloaded Licensed Application content and Your
                  personal information, and that Licensor's use of such material
                  and information is subject to Your legal agreements with
                  Licensor and Licensor's privacy policy:
                  <a href="http://www.eagle-bot.com/privacy">
                    http://www.eagle-bot.com/privacy
                  </a>
                  .
                </p>
                <p>
                  You acknowledge that the Licensor may periodically collect and
                  use technical data and related information about your device,
                  system, and application software, and peripherals, offer
                  product support, facilitate the software updates, and for
                  purposes of providing other services to you (if any) related
                  to the Licensed Application. Licensor may also use this
                  information to improve its products or to provide services or
                  technologies to you, as long as it is in a form that does not
                  personally identify you.
                </p>
              </div>

              <div id="question-6" className={Style.sub_content_section}>
                <h3>
                  <strong>6. USER-GENERATED CONTRIBUTIONS</strong>
                </h3>
                <p>
                  The Licensed Application does not offer users to submit or
                  post content. We may provide you with the opportunity to
                  create, submit, post, display, transmit, perform, publish,
                  distribute, or broadcast content and materials to us or in the
                  Licensed Application, including but not limited to text,
                  writings, video, audio, photographs, graphics, comments,
                  suggestions, or personal information or other material
                  (collectively, "Contributions"). Contributions may be viewable
                  by other users of the Licensed Application and through
                  third-party websites or applications. As such, any
                  Contributions you transmit may be treated in accordance with
                  the Licensed Application Privacy Policy. When you create or
                  make available any Contributions, you thereby represent and
                  warrant that:
                </p>
                <p>
                  1. The creation, distribution, transmission, public display,
                  or performance, and the accessing, downloading, or copying of
                  your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party.
                </p>{" "}
                <p>
                  2. You are the creator and owner of or have the necessary
                  licenses, rights, consents, releases, and permissions to use
                  and to authorize us, the Licensed Application, and other users
                  of the Licensed Application to use your Contributions in any
                  manner contemplated by the Licensed Application and this
                  License Agreement.
                </p>{" "}
                <p>
                  3. You have the written consent, release, and/or permission of
                  each and every identifiable individual person in your
                  Contributions to use the name or likeness or each and every
                  such identifiable individual person to enable inclusion and
                  use of your Contributions in any manner contemplated by the
                  Licensed Application and this License Agreement.
                </p>{" "}
                <p>
                  4. Your Contributions are not false, inaccurate, or
                  misleading.
                </p>{" "}
                <p>
                  5. Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </p>{" "}
                <p>
                  6. Your Contributions are not obscene, lewd, lascivious,
                  filthy, violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </p>{" "}
                <p>
                  7. Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone.
                </p>{" "}
                <p>
                  8. Your Contributions are not used to harass or threaten (in
                  the legal sense of those terms) any other person and to
                  promote violence against a specific person or class of people.
                </p>{" "}
                <p>
                  9. Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </p>{" "}
                <p>
                  10. Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </p>{" "}
                <p>
                  11. Your Contributions do not violate any applicable law
                  concerning child pornography, or otherwise intended to protect
                  the health or well-being of minors.
                </p>{" "}
                <p>
                  12. Your Contributions do not include any offensive comments
                  that are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </p>{" "}
                <p>
                  13. Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of this License
                  Agreement, or any applicable law or regulation.
                </p>
                <p>
                  Any use of the Licensed Application in violation of the
                  foregoing violates this License Agreement and may result in,
                  among other things, termination or suspension of your rights
                  to use the Licensed Application.
                </p>
              </div>
              <div id="question-7" className={Style.sub_content_section}>
                <h3>
                  <strong>7. CONTRIBUTION LICENSE</strong>
                </h3>
                <p>
                  You agree that we may access, store, process, and use any
                  information and personal data that you provide following the
                  terms of the Privacy Policy and your choices (including
                  settings).
                </p>
                <p>
                  By submitting suggestions of other feedback regarding the
                  Licensed Application, you agree that we can use and share such
                  feedback for any purpose without compensation to you.
                </p>
                <p>
                  We do not assert any ownership over your Contributions. You
                  retain full ownership of all of your Contributions and any
                  intellectual property rights or other proprietary rights
                  associated with your Contributions. We are not liable for any
                  statements or representations in your Contributions provided
                  by you in any area in the Licensed Application. You are solely
                  responsible for your Contributions to the Licensed Application
                  and you expressly agree to exonerate us from any and all
                  responsibility and to refrain from any legal action against us
                  regarding your Contributions.
                </p>
              </div>
              <div id="question-8" className={Style.sub_content_section}>
                <h3>
                  <strong>8. LIABILITY</strong>
                </h3>
                <p>
                  8.1 Licensor's responsibility in the case of violation of
                  obligations and tort shall be limited to intent and gross
                  negligence. Only in case of a breach of essential contractual
                  duties (cardinal obligations), Licensor shall also be liable
                  in case of slight negligence. In any case, liability shall be
                  limited to the foreseeable, contractually typical damages. The
                  limitation mentioned above does not apply to injuries to life,
                  limb, or health.
                </p>
                <p>
                  8.2 Licensor takes no accountability or responsibility for any
                  damages caused due to a breach of duties according to Section
                  2 of this License Agreement. To avoid data loss, You are
                  required to make use of backup functions of the Licensed
                  Application to the extent allowed by applicable third-party
                  terms and conditions of use. You are aware that in case of
                  alterations or manipulations of the Licensed Application, You
                  will not have access to the Licensed Application.
                </p>
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
                  <strong>
                    Please be aware that during the Beta testing phase, Eagle
                    Bot's RPA feature is not intended for handling sensitive
                    data, including but not limited to credentials, financial
                    information, or other highly sensitive data types
                  </strong>
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

              <div id="question-9" className={Style.sub_content_section}>
                <h3>
                  <strong>9. WARRANTY</strong>
                </h3>
                <p>
                  9.1 Licensor warrants that the Licensed Application is free of
                  spyware, trojan horses, viruses, or any other malware at the
                  time of Your download. Licensor warrants that the Licensed
                  Application works as described in the user documentation.
                </p>
                <p>
                  9.2 No warranty is provided for the Licensed Application that
                  is not executable on the device, that has been unauthorizedly
                  modified, handled inappropriately or culpably, combined or
                  installed with inappropriate hardware or software, used with
                  inappropriate accessories, regardless if by Yourself or by
                  third parties, or if there are any other reasons outside of
                  Eagle Bot PTE LTD's sphere of influence that affect the
                  executability of the Licensed Application.
                </p>
                <p>
                  9.3 You are required to inspect the Licensed Application
                  immediately after installing it and notify Eagle Bot PTE LTD
                  about issues discovered without delay by email provided in
                  Contact Information. The defect report will be taken into
                  consideration and further investigated if it has been emailed
                  within a period of one hundred twenty (120) days after
                  discovery.
                </p>
                <p>
                  9.4 If we confirm that the Licensed Application is defective,
                  Eagle Bot PTE LTD reserves a choice to remedy the situation
                  either by means of solving the defect or substitute delivery.
                </p>
                <p>
                  9.5 In the event of any failure of the Licensed Application to
                  conform to any applicable warranty, You may notify the
                  Services Store Operator, and Your Licensed Application
                  purchase price will be refunded to You. To the maximum extent
                  permitted by applicable law, the Services Store Operator will
                  have no other warranty obligation whatsoever with respect to
                  the Licensed Application, and any other losses, claims,
                  damages, liabilities, expenses, and costs attributable to any
                  negligence to adhere to any warranty.
                </p>
                <p>
                  9.6 If the user is an entrepreneur, any claim based on faults
                  expires after a statutory period of limitation amounting to
                  twelve (12) months after the Licensed Application was made
                  available to the user. The statutory periods of limitation
                  given by law apply for users who are consumers.
                </p>
              </div>

              <div id="question-10" className={Style.sub_content_section}>
                <h3>
                  <strong>10. PRODUCT CLAIMS</strong>
                </h3>
                <p>
                  Eagle Bot PTE LTD and the End-User acknowledge that Eagle Bot
                  PTE LTD, and not the Services, is responsible for addressing
                  any claims of the End-User or any third party relating to the
                  Licensed Application or the End-User’s possession and/or use
                  of that Licensed Application, including, but not limited to:
                </p>
                <p>(i) product liability claims.</p>{" "}
                <p>
                  (ii) any claim that the Licensed Application fails to conform
                  to any applicable legal or regulatory requirement; and
                </p>{" "}
                <p>
                  (iii) claims arising under consumer protection, privacy, or
                  similar legislation.
                </p>
              </div>

              <div id="question-11" className={Style.sub_content_section}>
                <h3>
                  <strong>11. LEGAL COMPLIANCE</strong>
                </h3>
                <p>
                  You represent and warrant that You are not located in a
                  country that is subject to a US Government embargo, or that
                  has been designated by the US Government as a "terrorist
                  supporting" country; and that You are not listed on any US
                  Government list of prohibited or restricted parties.
                </p>
              </div>
              <div id="question-12" className={Style.sub_content_section}>
                <h3>
                  <strong>12. CONTACT INFORMATION</strong>
                </h3>
                <p>
                  For general inquiries, complaints, questions or claims
                  concerning the Licensed Application, please contact
                </p>
                <p>
                  160 Robinson Rd, #14 04, Singapore 068914 (OR)
                  support@eagle-bot.com
                </p>
              </div>
              <div id="question-13" className={Style.sub_content_section}>
                <h3>
                  <strong>13. TERMINATION</strong>
                </h3>
                <p>
                  The license is valid until terminated by Eagle Bot PTE LTD or
                  by You. Your rights under this license will terminate
                  automatically and without notice from Eagle Bot PTE LTD if You
                  fail to adhere to any term(s) of this license. Upon License
                  termination, You shall stop all use of the Licensed
                  Application, and destroy all copies, full or partial, of the
                  Licensed Application.
                </p>
              </div>
              <div id="question-14" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    14. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY
                  </strong>
                </h3>
                <p>
                  Eagle Bot PTE LTD represents and warrants that Eagle Bot PTE
                  LTD will comply with applicable third-party terms of agreement
                  when using Licensed Application.
                </p>
                <p>
                  In Accordance with Section 9 of the "Instructions for Minimum
                  Terms of Developer's End-User License Agreement," subsidiaries
                  shall be third-party beneficiaries of this End User License
                  Agreement and — upon Your acceptance of the terms and
                  conditions of this License Agreement, will have the right (and
                  will be deemed to have accepted the right) to enforce this End
                  User License Agreement against You as a third-party
                  beneficiary thereof.
                </p>
              </div>
              <div id="question-15" className={Style.sub_content_section}>
                <h3>
                  <strong>15. INTELLECTUAL PROPERTY RIGHTS</strong>
                </h3>
                <p>
                  Eagle Bot PTE LTD and the End-User acknowledge that, in the
                  event of any third-party claim that the Licensed Application
                  or the End-User's possession and use of that Licensed
                  Application infringes on the third party's intellectual
                  property rights, Eagle Bot PTE LTD, and not the Services, will
                  be solely responsible for the investigation, defense,
                  settlement, and discharge or any such intellectual property
                  infringement claims.
                </p>
              </div>
              <div id="question-16" className={Style.sub_content_section}>
                <h3>
                  <strong>16. APPLICABLE LAW</strong>
                </h3>
                <p>
                  This License Agreement is governed by the laws of Singapore
                  excluding its conflicts of law rules.
                </p>
              </div>
              <div id="question-17" className={Style.sub_content_section}>
                <h3>
                  <strong>17. MISCELLANEOUS</strong>
                </h3>
                <p>
                  17.1 If any of the terms of this agreement should be or become
                  invalid, the validity of the remaining provisions shall not be
                  affected. Invalid terms will be replaced by valid ones
                  formulated in a way that will achieve the primary purpose.
                </p>
                <p>
                  17.2 Collateral agreements, changes and amendments are only
                  valid if laid down in writing. The preceding clause can only
                  be waived in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eula;
