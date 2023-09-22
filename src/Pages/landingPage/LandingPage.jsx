import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Style from "./style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { GoldenButton } from "../../components/button/CustomButton";
import GoldAndPinkImage from "../../assets/images/png/gold-and-pink.png";
import DeviceScreenImage from "../../assets/images/png/device-screen.png";
import DeviceScreenMobileImage from "../../assets/images/png/device-screen-mobile.png";
import LaptopImage from "../../assets/images/png/golden-laptop.png";
import BrowerThumbnail from "../../assets/images/png/browser_thumbnail.png";
import CanvasThumbnail from "../../assets/images/png/canvas_thumbnail.png";
import IntroVideo from "../../assets/videos/eagle_browser_and_chatbot_Intro.mp4";
import CanvasVideo from "../../assets/videos/Canvas_v2.mp4";
import AboutImage from "../../assets/images/png/about-background.png";
import LinkedInSvg from "../../assets/images/svg/linkedin-logo.svg";
import {
  AppleSvg,
  MicrosoftSvg,
  VectorGroupSvg,
  GoldenDesignSvg,
} from "../../components/designs/Design";
import {
  WaitListModel,
  SubscribModel,
  CustomizedSnackbar,
} from "../../components/model/Model";
import { Axios } from "../../services/Axios";
import APIENDPOINTS from "../../components/constent/endpoints";

const LandingPage = ({ from, setFrom }) => {
  const navigate = useNavigate();
  const hideHeaderTimeoutRef = useRef(null);
  const [openWaitListModel, setOpenWaitListModel] = useState(false);
  const [openSubscribModel, setOpenSubscribModel] = useState(false);
  const [openWaitlist, setOpenWaitlist] = useState(false);
  const [openSubscrib, setOpenSubscrib] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSubmitWaitListModel = (data, reset, setIsLoading) => {
    Axios.post(APIENDPOINTS.USER_WAITLIST, {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    })
      .then(function (response) {
        if (response.status === 200) {
          setIsLoading(false);
          setOpenWaitlist(true);
          setOpenWaitListModel(false);
          reset();
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        setOpenError(true);
      });
  };

  const handleSubmitSubscribModel = (data, reset, setIsLoading) => {
    Axios.post(APIENDPOINTS.USER_SUBSCRIBE, {
      email: data.email,
    })
      .then(function (response) {
        if (response.status === 200) {
          setIsLoading(false);
          setOpenSubscrib(true);
          setOpenSubscribModel(false);
          reset();
        }
      })
      .catch(function (error) {
        setOpenError(true);
        setIsLoading(false);
      });
  };

  const handleLogoPress = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  const handleContactUs = () => {
    localStorage.setItem("fromHome", true);
    navigate("/contact");
  };

  useEffect(() => {
    document.title = "Eagle Bot";
    if (from === "contact") {
      setTimeout(() => {
        const element = document.getElementById("goto-footer");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setFrom("");
        }
      }, 500);
    }

    return () => {
      document.title = "Eagle Bot";
    };
  });

  const videoStyle = {
    opacity: isPlaying ? 1 : isHovered ? 0.7 : 1,
  };

  const handleMouseMove = () => {
    setIsHovered(true);

    if (hideHeaderTimeoutRef.current) {
      clearTimeout(hideHeaderTimeoutRef.current);
    }

    hideHeaderTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  return (
    <>
      <div className={Style.banner_section}>
        <div className={Style.logo}>
          <img
            src={EagleBotLogoSvg}
            alt="EagleBot logo"
            onClick={handleLogoPress}
          ></img>
        </div>

        <div className={Style.banner_Content}>
          <div className={Style.content}>
            <div>
              <h1>Meet</h1>
              <h2>Eagle Bot,</h2>
            </div>
            <p>
              Your Ultimate <br />
              Automation Browser.
            </p>
            <GoldenButton
              type={"button"}
              style={{}}
              buttonName={"JOIN WAITLIST"}
              onClick={() => setOpenWaitListModel(true)}
            />
          </div>
        </div>
        <div className={Style.banner_img}>
          <img
            src={GoldAndPinkImage}
            className={Style.vector}
            alt="eagle bot design"
          />
          <img
            src={DeviceScreenImage}
            className={`${Style.device} ${Style.windowView}`}
            alt="eagle bot device image."
          />
          <img
            src={DeviceScreenMobileImage}
            className={`${Style.device} ${Style.mobileView}`}
            alt="eagle bot device image."
          />
        </div>
      </div>
      <div className={Style.hd_about_section}>
        <img
          className={Style.about_img}
          src={AboutImage}
          alt="eagle bot about image"
        ></img>
        <div className={Style.about_section}>
          <h2>About</h2>
          <h3>Eagle Bot</h3>
          <p>
            Elevate your browsing and automation experience to new heights with
            Eagle-Bot, a cutting-edge chat-bot meticulously crafted to
            streamline your digital life. Powered by advanced Natural Language
            Processing, Computer Vision, and AI powered Robotic Process
            Automation (RPA) Engines, Eagle-Bot effortlessly transforms your
            commands into actions, all within a custom browser designed for
            seamless integration.
          </p>
          <div className={Style.videoPanel}>
            <Slider {...settings}>
              <div className={Style.videoContainer}>
                <h4
                  style={{
                    display: isHovered || !isPlaying ? "block" : "none",
                  }}
                >
                  Eagle Browser and Chat-Bot
                </h4>
                <video
                  width={"100%"}
                  height={"auto"}
                  poster={BrowerThumbnail}
                  controls
                  onMouseMove={handleMouseMove}
                  onMouseOut={handleMouseOut}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  style={videoStyle}
                >
                  <source src={IntroVideo} type="video/mp4" label="1080p" />
                  <source src={IntroVideo} type="video/mp4" label="720p" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className={Style.videoContainer}>
                <h4
                  style={{
                    display: isHovered || !isPlaying ? "block" : "none",
                  }}
                >
                  Eagle Canvas
                </h4>
                <video
                  width={"100%"}
                  height={"auto"}
                  poster={CanvasThumbnail}
                  controls
                  onMouseMove={handleMouseMove}
                  onMouseOut={handleMouseOut}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  style={videoStyle}
                >
                  <source src={CanvasVideo} type="video/mp4"></source>
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className={Style.download_section}>
        <h2>Just around the corner!</h2>
        <div className={Style.download_content}>
          <div className={Style.download}>
            <MicrosoftSvg />
          </div>
          <div className={Style.download}>
            <AppleSvg />
          </div>
        </div>
      </div>

      <div className={Style.features_section}>
        <div className={Style.golden_vector} style={{ position: "relative" }}>
          <div className={Style.vector_content}>
            <h3 className={Style.text1}>
              <div className={Style.h4}>01</div>
              Eagle Bot is integrated with a custom chromium browser, providing
              a robust & secure web navigation platform. Explore and surf
              effortlessly.
            </h3>

            <h3 className={Style.text2}>
              <div className={Style.h4}>02</div>
              Eagle Bot's chat functionality takes search to the next level by
              integrating with Google Search, enabling a powerful search
              experience.
            </h3>

            <h3 className={Style.text3}>
              <div className={Style.h4}>03</div>
              Eagle Bot's NLP capabilities are nothing short of groundbreaking.
              Powered by the cutting-edge GPT-4 model, the chat-bot offers an
              unparalleled conversational experience.
            </h3>

            <h3 className={Style.text4}>
              <div className={Style.h4}>04</div>
              Eagle-Bot's innovative integration with DALL-E and Midjourney
              unleashes a world of creativity and customization in visual
              content.
            </h3>

            <h3 className={Style.text5}>
              <div className={Style.h4}>05</div>
              Eagle-Canvas is a remarkable feature within Eagle-Bot,
              revolutionizing the way users craft files using AI-generated
              content.
            </h3>

            <h3 className={Style.text6}>
              <div className={Style.h4}>06</div>
              Eagle-Bot uses prompt-based automation to simplify tech
              interactions. Its feature set allows users to manage tasks across
              various popular platforms.
            </h3>

            <h3 className={Style.text7}>
              <div className={Style.h4}>07</div>
              Eagle-Bot offers advanced cross-platform automation beyond APIs.
              With the 'Train your Bot' feature, guide it once to automate tasks
              on browsers and systems (Mac & Windows).
            </h3>
          </div>
          <VectorGroupSvg />
        </div>

        <div className={Style.features_content}>
          <h2>
            A Browser,
            <br /> Chat Bot,
            <br /> Canvas & Automation Software
          </h2>

          <p>
            Eagle-Bot epitomizes the pinnacle of innovation in the dynamic realm
            of artificial intelligence. In synergy with industry leaders and
            through strategic alliances for content creation, it pushes the
            technological frontier, curating a bespoke and compelling experience
            for its users.
          </p>
        </div>
      </div>

      <>
        <div className={Style.subscribe_section}>
          <h2>
            Experience a new <br></br> way to perform <br></br> Automations.
          </h2>
          <GoldenButton
            type={"button"}
            style={{}}
            buttonName={"SUBSCRIBE"}
            onClick={() => setOpenSubscribModel(true)}
          />
          <img src={LaptopImage} alt="Eagle Bot Golden Laptop"></img>
        </div>
        <div id="goto-footer" className={Style.footer}>
          <div className={Style.logo}>
            <img
              src={EagleBotLogoSvg}
              alt="EagleBot logo"
              onClick={handleLogoPress}
            ></img>
          </div>

          <div className={Style.footer_content}>
            <h3>Be always up to date</h3>
            <p className={Style.footer_text}>
              Have questions or need assistance?
            </p>
            <GoldenButton
              type={"button"}
              buttonName={"CONTACT US"}
              style={{ fontSize: "14px", padding: "12px 24px" }}
              onClick={() => handleContactUs()}
            />
            <div className={Style.social_link}>
              <img
                src={LinkedInSvg}
                alt="LinkedIn logo"
                style={{ width: "36px" }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/eagle-bot/",
                    "_blank"
                  );
                }}
              ></img>
            </div>
          </div>

          <div className={Style.footerDesign}>
            <GoldenDesignSvg />
          </div>
        </div>
        <WaitListModel
          handleClose={() => setOpenWaitListModel(false)}
          open={openWaitListModel}
          OnSubmit={handleSubmitWaitListModel}
        />
        <SubscribModel
          handleClose={() => setOpenSubscribModel(false)}
          open={openSubscribModel}
          OnSubmit={handleSubmitSubscribModel}
        />
        <CustomizedSnackbar
          handleClose={() => setOpenWaitlist(false)}
          open={openWaitlist}
          alertContent={
            "Fantastic news! You have now been added to our waitlist."
          }
          alertType={"success"}
        />
        <CustomizedSnackbar
          handleClose={() => setOpenSubscrib(false)}
          open={openSubscrib}
          alertContent={"Excellent news! You have successfully subscribed."}
          alertType={"success"}
        />
        <CustomizedSnackbar
          handleClose={() => setOpenError(false)}
          open={openError}
          alertContent={"Oop's we can't reach the server, try agin later."}
          alertType={"error"}
        />
      </>
    </>
  );
};

export default LandingPage;
