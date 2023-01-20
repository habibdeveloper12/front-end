import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Dropdown, Modal } from "react-bootstrap";
const Navber = () => {
  const [privacyshow, setPrivacyShow] = useState(false);

  const privacyhandleClose = () => setPrivacyShow(false);
  const privacyhandleShow = () => setPrivacyShow(true);
  const [termsshow, setTermsShow] = useState(false);

  const termshandleClose = () => setTermsShow(false);
  const termshandleShow = () => setTermsShow(true);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [user] = useAuthState(auth);

  return (
    <div className="bg-light fixed-top " sticky="top">
      <Navbar className="px-5 sm:px-2" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">
                <img className="w-50 " src="/picture/logo.png" />
              </Nav.Link>
              <span className="mt-4">
                <Nav.Link href="/">Home</Nav.Link>
              </span>
              <span className="mt-4 lg:mx-3 lg:px-2">
                <Nav.Link href="/course">Courses</Nav.Link>
              </span>
              <span className="mt-4 me-3">
                {user && <Nav.Link href="/dashboard">Dashbaord</Nav.Link>}
              </span>

              <span className="mt-4">
                <Nav.Link href="/contact">Contact</Nav.Link>
              </span>
              {/* <span
                onClick={privacyhandleShow}
                className="mt-2 text-secondary pinter px-2"
              >
                Privacy Policy
              </span> */}
              {/* <span onClick={termshandleShow} className="mt-2 text-secondary pinter px-2">
                Terms and Conditions
                </span> */}
            </Nav>
            <div className="d-flex gap-3">
              {/* <span onClick={() => navigate("/myCart")} className="myCart">
                <AiOutlineShoppingCart />
              </span>
              <span className="cartlength me-5">{cart?.length}</span> */}
              {/* <Dropdown>
      <Dropdown.Toggle className="fs-5 fw-bolder text-success mt-1" id="dropdown-basis">
      Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
              {/* <span
                onClick={() => navigate("/login")}
                className="fs-5 fw-bolder text-success mt-1 navberDropdow"
              >
                Login
              </span> */}

              <span class="nav-item dropdown">
                <span
                  class="nav-link  dropdown-toggle fs-5 fw-bolder text-success "
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Login{" "}
                </span>
                <ul class="dropdown-menu mt-1">
                  <li onClick={() => navigate("/login")}>
                    <span class="dropdown-item" href="#">
                      User Login
                    </span>
                  </li>
                  <li onClick={() => navigate("/adviserLogin")}>
                    <span class="dropdown-item">Course Owner Login</span>
                  </li>
                </ul>
              </span>

              {user ? (
                <span
                  onClick={() => signOut(auth)}
                  className="fs-5 fw-bolder border border-4 bg-success text-white px-3 py-1 rounded-pill"
                >
                  LogOut
                </span>
              ) : (
                <span class="nav-item dropdown">
                  <span
                    class="fs-5 fw-bolder border border-4 bg-success text-white px-3 py-1 rounded-pill"
                    data-bs-toggle="dropdown"
                  >
                    Sign Up
                  </span>
                  <ul class="dropdown-menu mt-1">
                    <li onClick={() => navigate("/signUp")}>
                      <span class="dropdown-item">User SignUp</span>
                    </li>
                    <li onClick={() => navigate("/adviserSignUp")}>
                        <span class="dropdown-item">Course Owner SignUp</span>
                    </li>
                  </ul>
                </span>
                // <span
                //   onClick={() => navigate("/signUp")}
                //   className="fs-5 fw-bolder border border-4 bg-success text-white px-3 py-1 rounded-pill"
                // >
                //   Sign Up
                // </span>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={privacyshow} onHide={privacyhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. We use Your Personal data to provide and improve the
          Service. By using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy. This Privacy
          Policy has been created with the help of the Privacy Policy Generator.
          Interpretation and Definitions Interpretation The words of which the
          initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same
          meaning regardless of whether they appear in singular or in plural.
          Definitions For the purposes of this Privacy Policy: Account means a
          unique account created for You to access our Service or parts of our
          Service. Company (referred to as either "the Company", "We", "Us" or
          "Our" in this Agreement) refers to Michigan's Best Golf Deals. Cookies
          are small files that are placed on Your computer, mobile device or any
          other device by a website, containing the details of Your browsing
          history on that website among its many uses. Country refers to:
          Michigan, United States Device means any device that can access the
          Service such as a computer, a cellphone or a digital tablet. Personal
          Data is any information that relates to an identified or identifiable
          individual. Service refers to the Website. Service Provider means any
          natural or legal person who processes the data on behalf of the
          Company. It refers to third-party companies or individuals employed by
          the Company to facilitate the Service, to provide the Service on
          behalf of the Company, to perform services related to the Service or
          to assist the Company in analyzing how the Service is used. Usage Data
          refers to data collected automatically, either generated by the use of
          the Service or from the Service infrastructure itself (for example,
          the duration of a page visit). Website refers to Michigan's Best Golf
          Deals, accessible from http://www.michigansbestgolfdeals.com You means
          the individual accessing or using the Service, or the company, or
          other legal entity on behalf of which such individual is accessing or
          using the Service, as applicable. Collecting and Using Your Personal
          Data Types of Data Collected Personal Data While using Our Service, We
          may ask You to provide Us with certain personally identifiable
          information that can be used to contact or identify You. Personally
          identifiable information may include, but is not limited to: Email
          address First name and last name Phone number Address, State,
          Province, ZIP/Postal code, City Usage Data Usage Data Usage Data is
          collected automatically when using the Service. Usage Data may include
          information such as Your Device's Internet Protocol address (e.g. IP
          address), browser type, browser version, the pages of our Service that
          You visit, the time and date of Your visit, the time spent on those
          pages, unique device identifiers and other diagnostic data. When You
          access the Service by or through a mobile device, We may collect
          certain information automatically, including, but not limited to, the
          type of mobile device You use, Your mobile device unique ID, the IP
          address of Your mobile device, Your mobile operating system, the type
          of mobile Internet browser You use, unique device identifiers and
          other diagnostic data. We may also collect information that Your
          browser sends whenever You visit our Service or when You access the
          Service by or through a mobile device. Tracking Technologies and
          Cookies We use Cookies and similar tracking technologies to track the
          activity on Our Service and store certain information. Tracking
          technologies used are beacons, tags, and scripts to collect and track
          information and to improve and analyze Our Service. The technologies
          We use may include: Cookies or Browser Cookies. A cookie is a small
          file placed on Your Device. You can instruct Your browser to refuse
          all Cookies or to indicate when a Cookie is being sent. However, if
          You do not accept Cookies, You may not be able to use some parts of
          our Service. Unless you have adjusted Your browser setting so that it
          will refuse Cookies, our Service may use Cookies. Web Beacons. Certain
          sections of our Service and our emails may contain small electronic
          files known as web beacons (also referred to as clear gifs, pixel
          tags, and single-pixel gifs) that permit the Company, for example, to
          count users who have visited those pages or opened an email and for
          other related website statistics (for example, recording the
          popularity of a certain section and verifying system and server
          integrity). Cookies can be "Persistent" or "Session" Cookies.
          Persistent Cookies remain on Your personal computer or mobile device
          when You go offline, while Session Cookies are deleted as soon as You
          close Your web browser. Learn more about cookies on the Privacy
          Policies website article. We use both Session and Persistent Cookies
          for the purposes set out below: Necessary / Essential Cookies Type:
          Session Cookies Administered by: Us Purpose: These Cookies are
          essential to provide You with services available through the Website
          and to enable You to use some of its features. They help to
          authenticate users and prevent fraudulent use of user accounts.
          Without these Cookies, the services that You have asked for cannot be
          provided, and We only use these Cookies to provide You with those
          services. Cookies Policy / Notice Acceptance Cookies Type: Persistent
          Cookies Administered by: Us Purpose: These Cookies identify if users
          have accepted the use of cookies on the Website. Functionality Cookies
          Type: Persistent Cookies Administered by: Us Purpose: These Cookies
          allow us to remember choices You make when You use the Website, such
          as remembering your login details or language preference. The purpose
          of these Cookies is to provide You with a more personal experience and
          to avoid You having to re-enter your preferences every time You use
          the Website. For more information about the cookies we use and your
          choices regarding cookies, please visit our Cookies Policy or the
          Cookies section of our Privacy Policy. Use of Your Personal Data The
          Company may use Personal Data for the following purposes: To provide
          and maintain our Service, including to monitor the usage of our
          Service. To manage Your Account: to manage Your registration as a user
          of the Service. The Personal Data You provide can give You access to
          different functionalities of the Service that are available to You as
          a registered user. For the performance of a contract: the development,
          compliance and undertaking of the purchase contract for the products,
          items or services You have purchased or of any other contract with Us
          through the Service. To contact You: To contact You by email,
          telephone calls, SMS, or other equivalent forms of electronic
          communication, such as a mobile application's push notifications
          regarding updates or informative communications related to the
          functionalities, products or contracted services, including the
          security updates, when necessary or reasonable for their
          implementation. To provide You with news, special offers and general
          information about other goods, services and events which we offer that
          are similar to those that you have already purchased or enquired about
          unless You have opted not to receive such information. To manage Your
          requests: To attend and manage Your requests to Us. For business
          transfers: We may use Your information to evaluate or conduct a
          merger, divestiture, restructuring, reorganization, dissolution, or
          other sale or transfer of some or all of Our assets, whether as a
          going concern or as part of bankruptcy, liquidation, or similar
          proceeding, in which Personal Data held by Us about our Service users
          is among the assets transferred. For other purposes: We may use Your
          information for other purposes, such as data analysis, identifying
          usage trends, determining the effectiveness of our promotional
          campaigns and to evaluate and improve our Service, products, services,
          marketing and your experience. We may share Your personal information
          in the following situations: With Service Providers: We may share Your
          personal information with Service Providers to monitor and analyze the
          use of our Service, to contact You. For business transfers: We may
          share or transfer Your personal information in connection with, or
          during negotiations of, any merger, sale of Company assets, financing,
          or acquisition of all or a portion of Our business to another company.
          With Affiliates: We may share Your information with Our affiliates, in
          which case we will require those affiliates to honor this Privacy
          Policy. Affiliates include Our parent company and any other
          subsidiaries, joint venture partners or other companies that We
          control or that are under common control with Us. With business
          partners: We may share Your information with Our business partners to
          offer You certain products, services or promotions. With other users:
          when You share personal information or otherwise interact in the
          public areas with other users, such information may be viewed by all
          users and may be publicly distributed outside. With Your consent: We
          may disclose Your personal information for any other purpose with Your
          consent. Retention of Your Personal Data The Company will retain Your
          Personal Data only for as long as is necessary for the purposes set
          out in this Privacy Policy. We will retain and use Your Personal Data
          to the extent necessary to comply with our legal obligations (for
          example, if we are required to retain your data to comply with
          applicable laws), resolve disputes, and enforce our legal agreements
          and policies. The Company will also retain Usage Data for internal
          analysis purposes. Usage Data is generally retained for a shorter
          period of time, except when this data is used to strengthen the
          security or to improve the functionality of Our Service, or We are
          legally obligated to retain this data for longer time periods.
          Transfer of Your Personal Data Your information, including Personal
          Data, is processed at the Company's operating offices and in any other
          places where the parties involved in the processing are located. It
          means that this information may be transferred to — and maintained on
          — computers located outside of Your state, province, country or other
          governmental jurisdiction where the data protection laws may differ
          than those from Your jurisdiction. Your consent to this Privacy Policy
          followed by Your submission of such information represents Your
          agreement to that transfer. The Company will take all steps reasonably
          necessary to ensure that Your data is treated securely and in
          accordance with this Privacy Policy and no transfer of Your Personal
          Data will take place to an organization or a country unless there are
          adequate controls in place including the security of Your data and
          other personal information. Delete Your Personal Data You have the
          right to delete or request that We assist in deleting the Personal
          Data that We have collected about You. Our Service may give You the
          ability to delete certain information about You from within the
          Service. You may update, amend, or delete Your information at any time
          by signing in to Your Account, if you have one, and visiting the
          account settings section that allows you to manage Your personal
          information. You may also contact Us to request access to, correct, or
          delete any personal information that You have provided to Us. Please
          note, however, that We may need to retain certain information when we
          have a legal obligation or lawful basis to do so. Disclosure of Your
          Personal Data Business Transactions If the Company is involved in a
          merger, acquisition or asset sale, Your Personal Data may be
          transferred. We will provide notice before Your Personal Data is
          transferred and becomes subject to a different Privacy Policy. Law
          enforcement Under certain circumstances, the Company may be required
          to disclose Your Personal Data if required to do so by law or in
          response to valid requests by public authorities (e.g. a court or a
          government agency). Other legal requirements The Company may disclose
          Your Personal Data in the good faith belief that such action is
          necessary to: Comply with a legal obligation Protect and defend the
          rights or property of the Company Prevent or investigate possible
          wrongdoing in connection with the Service Protect the personal safety
          of Users of the Service or the public Protect against legal liability
          Security of Your Personal Data The security of Your Personal Data is
          important to Us, but remember that no method of transmission over the
          Internet, or method of electronic storage is 100% secure. While We
          strive to use commercially acceptable means to protect Your Personal
          Data, We cannot guarantee its absolute security. Children's Privacy
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers. If We need to rely
          on consent as a legal basis for processing Your information and Your
          country requires consent from a parent, We may require Your parent's
          consent before We collect and use that information. Links to Other
          Websites Our Service may contain links to other websites that are not
          operated by Us. If You click on a third party link, You will be
          directed to that third party's site. We strongly advise You to review
          the Privacy Policy of every site You visit. We have no control over
          and assume no responsibility for the content, privacy policies or
          practices of any third party sites or services. Changes to this
          Privacy Policy We may update Our Privacy Policy from time to time. We
          will notify You of any changes by posting the new Privacy Policy on
          this page. We will let You know via email and/or a prominent notice on
          Our Service, prior to the change becoming effective and update the
          "Last updated" date at the top of this Privacy Policy. You are advised
          to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
          Contact Us If you have any questions about this Privacy Policy, You
          can contact us: By visiting this page on our website:
          http://www.michigansbestgolfdeals.com
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={privacyhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={privacyhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={termsshow} onHide={termshandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY, THEY CONTAIN IMPORTANT
          INFORMATION REGARDING YOUR LEGAL RIGHTS INCLUDING MANDATORY
          ARBITRATION, NO CLASS RELIEF, AND WAIVER OF YOUR RIGHT TO A JURY
          TRIAL. BY USING THE SITE OR ANY ONLINE SERVICES YOU AGREE TO THESE
          TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE,
          PLEASE DO NOT USE THE SITE OR THE ONLINE SERVICES. 1. Acceptance of
          Terms of Service If you do not agree with any of these Terms of
          Service ("Terms of Service" or "Terms"), including the Privacy Policy
          incorporated herein, please do not use this Site or our online
          services. By using this Site you will be deemed to have irrevocably
          agreed to these Terms. Some areas of this Site may be subject to
          additional terms and conditions, which you should read carefully
          before making any use of those areas. Such additional terms will not
          change or replace these Terms regarding use of this Site, unless
          otherwise expressly stated. These Terms of Service apply when you
          interact digitally with the Internet sites operated by NBCUniversal
          Media, LLC and its affiliates and subsidiaries ("NBCUniversal" or
          "We", "Our" or "Us"), (the "Site" or "Sites"), games, interactive TV,
          and any other services, products and any related software or mobile
          and/or tablet applications offered by NBCUniversal (collectively
          "online services" or "services"). Note that in some instances, both
          these Terms of Service and separate additional terms or licenses,
          guidelines, rules or terms of service will apply to your use of some
          online services offered and/or operated by NBCUniversal (in each such
          instance, and collectively, "Additional Terms"). These Additional
          Terms will be posted in connection with the applicable online services
          and will be in addition to these Terms of Service. Where any direct
          conflict exists between these Terms of Service, or any Additional
          Terms, and the applicable Privacy Policy the terms of the Privacy
          Policy shall take precedence; however provisions unique to these Terms
          of Service (e.g., arbitration) will remain in effect as outlined here.
          NBCUniversal may modify these Terms of Service prospectively from time
          to time in its sole discretion. Your continued use or accessing of the
          online services following the posting of any changes to the Terms of
          Service constitutes your acceptance of such changes. You agree to be
          notified of changes to the Terms of Service via posting of updates on
          the Site. This is a general audience Site for adults. We will assume
          (and by using this Site you warrant that) you have legal capacity to
          enter into the agreement set out in these Terms of Service (i.e., that
          you are of sufficient age and mental capacity and are otherwise
          entitled to be legally bound in contract). To access this Site or some
          of the resources it has to offer, you may be asked to provide
          registration details. It is a condition of use of these online
          services that all the details you provide be correct, current, and
          complete. If we at NBCUniversal believe the details are not correct,
          current, or complete, we have the right to refuse you access to the
          online services, or any of its resources, and to terminate or suspend
          your account. Please note that these Terms may be revised and
          reissued, prospectively by posting updated terms on this Site. You
          consent and agree to receive notices of updates of these Terms through
          our posting of updated Terms on the Site. You should visit this page
          regularly to review the current terms. Your continued use of the Site
          will be deemed as irrevocable acceptance of any revisions. EACH TIME
          YOU SIGN IN TO OR OTHERWISE USE THE ONLINE SERVICES YOU ARE ENTERING
          INTO A NEW AGREEMENT WITH US ON THE THEN APPLICABLE TERMS AND
          CONDITIONS AND YOU AGREE THAT WE MAY NOTIFY YOU OF OTHER TERMS BY
          POSTING THEM ON THE SITE OR ONLINE SERVICES (OR IN ANY OTHER
          REASONABLE MANNER OF NOTICE WHICH WE ELECT), AND THAT YOUR USE OF THE
          SERVICE AFTER SUCH NOTICE CONSTITUTES YOUR GOING FORWARD AGREEMENT TO
          THE OTHER TERMS FOR YOUR NEW USE AND TRANSACTIONS. Therefore, you
          should review the posted Terms of Service and any applicable
          Additional Terms each time you use the online services (at least prior
          to each transaction or submission). The Additional Terms will be
          effective as to new use and transactions as of the time that we post
          them, or such later date as may be specified in them or in other
          notice to you. However, the Terms of Service (and any applicable
          Additional Terms) that applied when you previously used the online
          services will continue to apply to such prior use (i.e., changes and
          additions are prospective only) except as mutually agreed. In the
          event any notice to you of new, revised or Additional Terms is
          determined by a tribunal to be insufficient, the prior agreement shall
          continue until sufficient notice to establish a new agreement occurs.
          You should frequently check the home page, your message account (if
          applicable) and the e-mail you associated with your account for
          notices, all of which you agree are reasonable means of providing you
          notice. You can reject any new, revised or additional Terms of Service
          by discontinuing use of the Site and related online services. 2.
          Permitted Uses Your use of the online services shall be limited solely
          to your personal and non-commercial use. The online services contain
          material that is derived in whole or in part from material supplied
          and owned by NBCUniversal as well as third parties ("Content"). As
          between NBCUniversal and You, NBCUniversal owns all right, title and
          interest in and to the copyrights, trademarks, service marks, trade
          names, and all other intellectual and proprietary rights throughout
          the world associated with the online services and Content. You
          acknowledge NBCUniversal's valid intellectual and proprietary property
          rights in the online services and Content and that your use of the
          online services is limited to the access, viewing and downloading of
          Content, all solely as authorized by NBCUniversal. Nothing in these
          Terms of Service shall be deemed to convey to you any right, title or
          interest in or to the online services or Content or to any portion
          thereof except for the limited rights expressly granted herein. You
          may use the online services solely for personal and non-commercial
          uses. You may not either directly or through the use of any personal
          computer, browser, laptop, tablet, mobile phone or other device (each
          a "device") or other means remove, alter, bypass, avoid, interfere
          with, or circumvent (i) any copyright, trademark, or other proprietary
          notices marked on the online services or Content, (ii) any digital
          rights management mechanism, device, or other content protection or
          access control measure associated with the online services or Content,
          or (iii) any advertisement on the online services and/or within
          Content. You may not either directly or through the use of any device
          or other means copy, download, stream, reproduce, duplicate, archive,
          distribute, upload, publish, modify, translate, broadcast, perform,
          display, sell, transmit or retransmit the online services or Content
          unless expressly permitted by NBCUniversal in writing. You may not
          incorporate Content into, or stream or retransmit the Content via, any
          hardware or software application or make the online services or any
          Content available via frames or in-line links, and you may not
          otherwise surround or obfuscate the Content or online services with
          any third party content, materials or branding. You may also not use
          any software robots, spider, crawlers, or other data gathering or
          extraction tools, whether automated or manual, to access, acquire,
          copy, monitor, scrape or aggregate Content or any portion of the
          online services. See Section 22 for terms applicable to use of links
          to the online services. You may not knowingly or intentionally take
          any action that may impose an unreasonable burden or load on the
          online services or its servers and infrastructures. You may not build
          a business, in whole or in part, resell, redistribute or recirculate
          or make any other commercial use of, or create derivative works or
          materials utilizing any portion of the online services or Content,
          whether or not for profit. To the extent that NBCUniversal makes
          Content available to you via a widget, embedded player or other
          technology that allows you to embed or stream Content on or to another
          site, you may not modify, enhance, remove, interfere with, or
          otherwise alter in any way any portion of such technology, any digital
          rights management mechanism, device, or other content protection or
          access control measure associated with Content, or any advertisement
          delivered with Content. You are also prohibited from disabling,
          modifying, interfering with or otherwise circumventing any technology
          to allow users to view Content without: (i) displaying visibly both
          Content and all surrounding elements (including the graphical user
          interface, any advertising, copyright notices, and trademarks); and
          (ii) having full access to all functionality permitting viewing of
          Content, including, without limitation, all video quality and display
          functionality and all interactive, elective or click-through
          advertising functionality. 3.Registration, Passwords, Unauthorized Use
          of Your Account, and Sharing of Social Features In order to access
          certain features of this Site, or to conduct a transaction through one
          of our transactional channels, you may be required to register for an
          account ("Account"). If you register for an Account, you agree to: (a)
          provide true, accurate and complete information about yourself as
          prompted by the registration form; and (b) maintain and promptly
          update such information to keep it true, accurate, current and
          complete as permitted through the functionality of the Site. You
          acknowledge and agree that NBCUniversal will have no liability
          associated with or arising from your failure to maintain accurate
          information about yourself, including, without limitation, your
          failure to receive important information and updates about the Site.
          If NBCUniversal has reasonable grounds to suspect that the information
          you provided on the registration form or otherwise is untrue,
          inaccurate or incomplete, NBCUniversal may suspend or terminate your
          Account and refuse any and all current or future use of the Site (or
          any portion thereof). As part of the registration and account creation
          process necessary to obtain access to portions of the Sites that
          require a fee or payment, you will have to create a user account with
          a password. You will provide NBCUniversal with certain registration
          information, all of which must be accurate and updated. You shall not
          (i) select a subscriber ID already used by another person; (ii) use a
          subscriber ID in which another person has rights without such person's
          authorization; or (iii) use a subscriber ID or password that
          NBCUniversal, in its sole discretion, deems offensive or
          inappropriate. Any usernames and passwords used for this Site or
          services are for individual use only. You are responsible for all use
          of your Account under any user name or password by any person or
          entity and for ensuring that your Account complies fully with the
          provisions of the Terms. You are solely responsible for maintaining
          the security and confidentiality of the password you use to access
          your Account. Any fraudulent, abusive, or otherwise illegal activity
          may be grounds for termination of your Account, in NBCUniversal's sole
          discretion, and NBCUniversal may refer you to appropriate law
          enforcement agencies. You may terminate your Account at any time by
          sending an e-mail to: webmaster@golfchannel.com. You agree to
          immediately notify NBCUniversal of any unauthorized use of your
          password or Account or any other breach of security. You are
          responsible for taking precautions and providing security measures
          best suited for your situation and intended use of the online services
          and Site. NBCUniversal has the right to provide user billing, account,
          content or use records and related information under certain
          circumstances (such as response to legal responsibility, lawful
          process, orders, subpoenas, or warrants, or to protect our rights,
          customers or business). Please note that anyone able to provide your
          personally identifiable information will be able to access your
          Account so you should take reasonable steps to protect this
          information. You are responsible for all charges incurred up to the
          time the Account is terminated. You understand and agree that the Site
          and/or online services may include a social network and your
          activities (e.g., video viewing, interactions with members and/or
          advertisers) may be shared with others both on and off the online
          services. If you don't want your activities on such social network to
          be shared, your only option is to deactivate the related social
          network account.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={termshandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={termshandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navber;
