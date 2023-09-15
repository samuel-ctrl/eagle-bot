import { useEffect } from "react";
import Style from "./style.module.css";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";

const PrivacyAndPolicy = () => {
  useEffect(() => {
    document.title = "Terms & conditions | Eagle Bot";
    return () => {
      document.title = "Eagle Bot";
    };
  });
  return (
    <div className="policySection">
      <div className={Style.logo}>
        <img src={EagleBotLogoSvg} alt="EagleBot logo"></img>
      </div>
      <div className={Style.body_container}>
        <div className={Style.menu_container}>
          <h4 style={{ textAlign: "center", marginBottom: "5%" }}>
            SUMMARY OF KEY POINTS
          </h4>
          <ul>
            <li>
              <a href="#question-1">1. WHAT INFORMATION DO WE COLLECT?</a>
            </li>
            <li>
              <a href="#question-2">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#question-3">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#question-4">
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href="#question-5">
                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#question-6">
                6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </a>
            </li>
            <li>
              <a href="#question-7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#question-8">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </li>
            <li>
              <a href="#question-9">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </li>
            <li>
              <a href="#question-10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </li>
            <li>
              <a href="#question-11">
                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#question-12">
                12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#question-13">13. DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </li>
            <li>
              <a href="#question-14">
                14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#question-15">
                15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.card_container}>
          <div className={Style.content_container}>
            <div className={Style.panel_head}>
              <h1 style={{ textAlign: "center" }}>
                Eagle Bot Privacy & Policy
              </h1>
            </div>
            <div className={Style.panel_body}>
              <p style={{ borderBottom: "1px solid gray" }}>
                <strong>Last updated </strong>
                <strong>Sept. 15, 2023</strong>
              </p>
              {/* <div id="" className={Style.sub_content_section}></div> */}
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
                  <li>names</li>
                  <li>email addresses</li>
                </ul>
                <p>
                  <strong>Sensitive Information.</strong> We do not process
                  sensitive information.
                </p>
                <p>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
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
                    To facilitate account creation and authentication and
                    otherwise manage user accounts. We may process your
                    information so you can create and log in to your account, as
                    well as keep your account in working order.
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
                    similar information.
                  </li>
                  <li>
                    To send you marketing and promotional communications. We may
                    process the personal information you send to us for our
                    marketing purposes, if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time. For more information, see "WHAT ARE YOUR
                    PRIVACY RIGHTS?" below.
                  </li>
                  <li>To save or protect an individual's vital interests.</li>
                </ul>
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
                  If you are located in the EU or UK, this section applies to
                  you.
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
                  If you are located in Canada, this section applies to you.
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
                  We may need to share your personal information in the
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
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our Cookie Policy.
                </p>
              </div>
              <div id="question-6" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> We may transfer, store, and process
                  your information in countries other than your own.
                </p>
                <p>
                  Our servers are located in India, Poland, and the United
                  States. If you are accessing our Services from outside India,
                  Poland, and the United States, please be aware that your
                  information may be transferred to, stored, and processed by us
                  in our facilities and by those third parties with whom we may
                  share your personal information (see "WHEN AND WITH WHOM DO WE
                  SHARE YOUR PERSONAL INFORMATION?" above), in other countries.
                </p>
                <p>
                  If you are a resident in the European Economic Area (EEA),
                  United Kingdom (UK), or Switzerland, then these countries may
                  not necessarily have data protection laws or other similar
                  laws as comprehensive as those in your country. However, we
                  will take all necessary measures to protect your personal
                  information in accordance with this privacy notice and
                  applicable law.
                </p>
                <p>
                  <strong>
                    European Commission's Standard Contractual Clauses:
                  </strong>
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
                  provided upon request.
                </p>
                <p>
                  We have implemented similar appropriate safeguards with our
                  third-party service providers and partners, and further
                  details can be provided upon request.
                </p>
              </div>
              <div id="question-7" className={Style.sub_content_section}>
                <h3>
                  <strong>7. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
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
              <div id="question-8" className={Style.sub_content_section}>
                <h3>
                  <strong>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
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
              <div id="question-9" className={Style.sub_content_section}>
                <h3>
                  <strong>9. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
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
                  However, please note that this will not affect the lawfulness
                  of the processing before its withdrawal nor, when applicable
                  law allows, will it affect the processing of your personal
                  information conducted in reliance on lawful processing grounds
                  other than consent.
                </p>
                <p>
                  <strong>
                    Opting out of marketing and promotional communications:
                  </strong>{" "}
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
                  terminate your account, you can: Contact us using the contact
                  information provided. Upon your request to terminate your
                  account, we will deactivate or delete your account and
                  information from our active databases. However, we may retain
                  some information in our files to prevent fraud, troubleshoot
                  problems, assist with any investigations, enforce our legal
                  terms and/or comply with applicable legal requirements.
                </p>
                <p>
                  <strong>Cookies and similar technologies:</strong> Most Web
                  browsers are set to accept cookies by default. If you prefer,
                  you can usually choose to set your browser to remove cookies
                  and to reject cookies. If you choose to remove cookies or
                  reject cookies, this could affect certain features or services
                  of our Services. You may also opt out of interest-based
                  advertising by advertisers on our Services. If you have
                  questions or comments about your privacy rights, you may email
                  us at privacy@eagle-bot.com.
                </p>
              </div>
              <div id="question-10" className={Style.sub_content_section}>
                <h3>
                  <strong>10. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
                </h3>
                <p>
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage, no uniform technology standard for
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
                    12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </strong>
                </h3>
                <p>
                  <strong>In Short:</strong> Yes, if you are a resident of
                  Virginia, you may be granted specific rights regarding access
                  to and use of your personal information.
                </p>
                <p>
                  <strong>Virginia CDPA Privacy Notice</strong>
                </p>
                <p>Under the Virginia Consumer Data Protection Act (CDPA):</p>
                <ul>
                  <li>
                    "Consumer" means a natural person who is a resident of the
                    Commonwealth acting only in an individual or household
                    context. It does not include a natural person acting in a
                    commercial or employment context.
                  </li>
                  <li>
                    "Personal data" means any information that is linked or
                    reasonably linkable to an identified or identifiable natural
                    person. "Personal data" does not include de-identified data
                    or publicly available information.
                  </li>
                  <li>
                    "Sale of personal data" means the exchange of personal data
                    for monetary consideration.
                  </li>
                </ul>
                <p>
                  If this definition "consumer" applies to you, we must adhere
                  to certain rights and obligations regarding your personal
                  data.
                </p>
                <p>
                  <strong>
                    Your rights with respect to your personal data
                  </strong>
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
                </ul>
                <p>
                  We have not sold any personal data to third parties for
                  business or commercial purposes. We will not sell personal
                  data in the future belonging to website visitors, users, and
                  other consumers.
                </p>
                <p>
                  <strong>
                    Exercise your rights provided under the Virginia CDPA
                  </strong>
                </p>
                <p>
                  More information about our data collection and sharing
                  practices can be found in this privacy notice.
                </p>
                <p>
                  You may contact us by email at privacy@eagle-bot.com, by
                  submitting a data subject access request, or by referring to
                  the contact details at the bottom of this document.
                </p>
                <p>
                  <strong>Verification process</strong>
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
                  <strong>Right to appeal</strong>
                </p>
                <p>
                  If we decline to take action regarding your request, we will
                  inform you of our decision and reasoning behind it. If you
                  wish to appeal our decision, please email us at
                  privacy@eagle-bot.com. Within sixty (60) days of receipt of an
                  appeal, we will inform you in writing of any action taken or
                  not taken in response to the appeal, including a written
                  explanation of the reasons for the decisions. If your appeal
                  if denied, you may contact the Attorney General to submit a
                  complaint.
                </p>
              </div>
              <div id="question-13" className={Style.sub_content_section}>
                <h3>
                  <strong>13. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
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
              <div id="question-14" className={Style.sub_content_section}>
                <h3>
                  <strong>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
                </h3>
                <p>
                  If you have questions or comments about this notice, you may
                  contact our Data Protection Officer (DPO), by email at
                  privacy@eagle-bot.com.
                </p>
              </div>

              <div id="question-15" className={Style.sub_content_section}>
                <h3>
                  <strong>
                    15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                  </strong>
                </h3>
                <p>
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it. To request to
                  review, update, or delete your personal information, please
                  fill out and submit a data subject access request here:{" "}
                  <a href="Eagle Bot">Eagle Bot</a>.
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

export default PrivacyAndPolicy;
