import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const EageBrowserSettings = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Eagle Browser OptimizationSettings | Eagle Bot";
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
                <u>Optimize your browsing experience with Eagle Browser</u>
              </h1>
              <div className={Style.panel_body}>
                <div className={Style.sub_content_section}>
                  <h3>
                    <u>With our performance settings, you can:</u>
                  </h3>
                  <p>
                    <ul>
                      <li>Ensure smooth performance of active tabs</li>
                      <li>Prevent specific sites from being deactivated</li>
                      <li>Extend your computer's battery life</li>
                      <li>Browse and search faster</li>
                    </ul>
                  </p>
                  <p>
                    <i>
                      Please note that personalizing performance is not
                      available on mobile devices with iOS and Android, but
                      there are other ways to speed up your browsing experience.
                    </i>
                  </p>
                  <p>
                    To save your computer's memory and ensure smooth performance
                    of active tabs, turn on Memory Saver. Eagle Browser
                    deactivates tabs that you aren't currently using, but when
                    you access an inactive tab, it automatically reloads.
                  </p>
                  <p>
                    <u>
                      <strong>Here's how to turn on Memory Saver:</strong>
                    </u>
                  </p>
                  <p>
                    <ul>
                      <li>Open Eagle Browser on your computer.</li>
                      <li>
                        Click More (three vertical dots) on the top right and
                        select Settings.
                      </li>
                      <li>On the left, select Performance.</li>
                      <li>Toggle Memory Saver on or off.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>
                      To ensure smooth performance of your active video
                    </strong>{" "}
                    and gaming tabs, we recommend turning on Memory Saver.
                    However, please note that some settings and activities on
                    your computer may prevent tab deactivation, such as active
                    audio or video (playback or calls), screen sharing, page
                    notifications, active downloads, partially filled forms,
                    pinned tabs, and connected devices (USB or Bluetooth).
                  </p>
                  <p>
                    <strong>
                      To keep specific sites active and prevent them from being
                      deactivated
                    </strong>
                    , you can add them to your "Always keep these sites active"
                    exclusion list. Here's how to do it:
                  </p>
                  <p>
                    <ul>
                      <li>Open Eagle Browser on your computer.</li>
                      <li>
                        Click More (three vertical dots) on the top right and
                        select Settings.
                      </li>
                      <li>On the left, select Performance.</li>
                      <li>
                        To the right of "Always keep these sites active," select
                        Add.
                      </li>
                      <li>
                        You have two options:
                        <ul>
                          <li>
                            <u>
                              <strong>Add current sites</strong>
                            </u>
                            : Select from available sites that are currently
                            open in a tab. Select the box to the left of the
                            site you want to add, and click Add. To go back,
                            select Cancel.
                          </li>
                          <li>
                            <u>
                              <strong>Add sites manually</strong>
                            </u>
                            : Enter the web address and select Add. To go back,
                            select Cancel.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </p>
                  <p>
                    The web address format for the manual site exclusion policy
                    is:
                    <strong>[scheme://][.]host[:port][/path][@query]</strong>.
                  </p>
                  <p>
                    Here are some examples of how to add sites manually if you
                    want to create an exclusion for:
                  </p>
                  <p>
                    <u>
                      <b>Entire domains and subdomains</b>
                    </u>
                    : Exclude the URL scheme. For example, eagle-bot.com matches
                    and prevents deactivation of subdomains like
                    platform.eagle-bot.com and canvas.eagle-bot.com.
                  </p>

                  <p>
                    <ul>
                      <p>
                        <u>
                          <b>1. Specific domains, but not any subdomains</b>
                        </u>
                        : Include a dot (.) before the URL host. For example,
                        .eagle-bot.com won't match and prevent deactivation of
                        subdomains like www.eagle-bot.com,
                        platform.eagle-bot.com, and canvas.eagle-bot.com.
                      </p>
                      <p>
                        <u>
                          <b>2. Specific subdirectory</b>
                        </u>
                        : Include the URL path. For example,
                        www.eagle-bot.com/contact matches and prevents
                        deactivation of all Eagle-bot Contact pages, but won't
                        prevent deactivation of the www.eagle-bot.com main
                        pages.
                      </p>
                      <p>
                        <u>
                          <b>3. URL host and query components</b>
                        </u>
                        : Asterisks (*) can be used as wildcards. For example,
                        https:// matches and prevents deactivation of all https
                        sites and youtube.com/watch?v=* matches and prevents
                        deactivation of YouTube videos.
                      </p>
                      <p>
                        <u>
                          <b>4. Wildcards for prefix</b>
                        </u>
                        , suffix, or substring matches of the URL host component
                        aren't supported. For example,
                        <strong>eagle-bot.com or eagle-bot.com/</strong> won't
                        match and prevent deactivation.
                      </p>
                    </ul>
                  </p>
                  <p>
                    <strong>
                      To extend your device's battery life and optimize your
                      browsing experience
                    </strong>
                    , you can turn on or off Energy Saver in Eagle Browser.
                    Here's how to do it:
                  </p>
                  <p>
                    <ul>
                      <li>Open Eagle Browser on your computer.</li>
                      <li>
                        Click More (three vertical dots) on the top right and
                        select Settings.
                      </li>
                      <li>On the left, select Performance.</li>
                      <li>Toggle Energy Saver on or off.</li>
                      <li>Select the setting that you want.</li>
                    </ul>
                  </p>
                  <p>
                    When Energy Saver is on, Eagle Browser reduces its image
                    capture rate and other background tasks to help conserve
                    your device's battery. It works automatically whenever your
                    device is unplugged, or when your battery is low. Please
                    note that Energy Saver doesn't turn on when your device is
                    plugged in.
                  </p>
                  <p>
                    To extend your device's battery life for a long road trip or
                    plane ride, we recommend turning on Energy Saver. However,
                    when Energy Saver is on, you may notice changes in gaming
                    and video performance. Energy Saver is available on Windows,
                    Mac, and ChromeOS devices with a battery installed.
                  </p>
                  <p>
                    <strong>
                      To enhance your browsing speed and efficiency
                    </strong>
                    , you can turn on or off Preload Pages in Eagle Browser.
                    Here's how to do it:
                  </p>
                  <p>
                    <ul>
                      <li>Open Eagle Browser on your computer.</li>
                      <li>
                        Click More (three vertical dots) on the top right and
                        select Settings.
                      </li>
                      <li>On the left, select Performance.</li>
                      <li>Toggle Preload Pages on or off.</li>
                      <li>Select the setting that you want.</li>
                    </ul>
                  </p>
                  <p>
                    <b>When Preload Pages is turned on</b>, Eagle Browser
                    preloads pages that you might visit to help you browse and
                    search faster. Please note that to preload pages, Eagle
                    Browser may use cookies (if you allow cookies) and may
                    encrypt and send pages through your favorite search engine
                    to hide your identity from sites. You can learn more about
                    cookies by visiting our help center.
                  </p>
                  <p>
                    To preload some of the pages you're likely to visit, we
                    recommend selecting Standard Preloading. However, if you
                    want to preload even more pages, you can select Extended
                    Preloading. By turning on Preload Pages, you can enjoy
                    faster browsing and searching speeds in Eagle Browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EageBrowserSettings;
