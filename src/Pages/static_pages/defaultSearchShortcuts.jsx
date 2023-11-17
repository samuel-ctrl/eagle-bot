import { useEffect } from "react";
import Style from "../terms_and_policy/style.module.css";
import EagleBotLogoSvg from "../../assets/images/svg/eagle-bot-logo.svg";
import { useNavigate } from "react-router-dom";

const DefaultSearchShortcuts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Eagle Browser Default Search Engine | Eagle Bot";
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
              <h1>Default Search Engine and Shortcuts</h1>
            </div>
            <div className={Style.panel_body}>
              <div className={Style.sub_content_section}>
              <p>
                In Eagle Browser, the address bar (omnibox) can also serve as a
                search box. By default, it uses a search engine that you can
                change according to your preference.
              </p>
              <p>
                In case you encounter any sudden changes in your search engine,
                it is possible that your device has malware. To address this,
                you may learn how to remove the malware and prevent such
                occurrences in the sections below:
              </p>
              <p>
                <strong>
                  To set your default search engine in Eagle Browser
                </strong>
                , follow these steps:
              </p>
              <p>
                <ul>
                  <li>Open Eagle Browser on your computer.</li>
                  <li>
                    Click on the "More" button at the top right corner of the
                    screen and then click on "Settings".
                  </li>
                  <li>Click on "Search engine".</li>
                  <li>
                    Next to "Search engine used in the address bar", click the
                    down arrow.
                  </li>
                  <li>
                    Select a new default search engine from the list of
                    available options.
                  </li>
                </ul>
              </p>
              <p>
                If you encounter issues setting your search engine, it is
                possible that your device has malware. You may seek assistance
                to restore your Eagle Browser settings.
              </p>
              <p>
                <strong>To add, edit, or remove site search shortcuts</strong>,
                follow these steps:
              </p>
              <p>
                <ul>
                  <li>Open Eagle Browser on your computer.</li>
                  <li>
                    Click on the "More" button at the top right corner of the
                    screen and then click on "Settings".
                  </li>
                  <li>
                    On the left side of the screen, click on "Search engine" and
                    then "Manage search engines and site search".
                  </li>
                  <li>
                    To add a site search shortcut, click "Add" beside "Site
                    search" and fill out the required fields before clicking
                    "Add".
                  </li>
                  <li>
                    To edit a site search shortcut, click "Edit" beside the
                    shortcut you want to modify.
                  </li>
                  <li>
                    To set a site search shortcut as default, click "Make
                    default" beside the shortcut.
                  </li>
                  <li>
                    To deactivate a site search shortcut, click "Deactivate"
                    beside the shortcut.
                  </li>
                  <li>
                    To delete a site search shortcut, click "Delete" beside the
                    shortcut.
                  </li>
                </ul>
              </p>
              <p>
                Note that you can set up shortcuts to search specific sites and
                that shortcuts for your open tabs, bookmarks, and browsing
                history are included in your site searches. You can edit or turn
                off these shortcuts, but they can't be deleted. When you
                deactivate a site search shortcut, it moves to the "Inactive
                shortcuts" section. You can also find other suggested sites
                listed in the "Inactive shortcuts" section, and to add them to
                your site search shortcuts, click "Activate". For some search
                sites, the site appears in the "Inactive shortcuts" section only
                after you search on that site.
              </p>
              <h3>Remove Malware</h3>
              <p>
                If you are experiencing any of the following issues, then there
                is a possibility that your computer has unwanted software or
                malware installed on it:
              </p>
              <p>
                <ul>
                  <li>Pop-up ads and new tabs that won't go away</li>
                  <li>
                    Changes to your homepage or search engine in Eagle Browser
                    without your permission
                  </li>
                  <li>
                    Unwanted Eagle Browser extensions or toolbars that keep
                    reappearing
                  </li>
                  <li>
                    Your browsing is hijacked, and you are redirected to
                    unfamiliar pages or ads
                  </li>
                  <li>Receiving alerts about a virus or an infected device</li>
                </ul>
              </p>
              <p>
                To remove unwanted ads, pop-ups, and malware from your computer,
                you can follow these steps:
              </p>
              <p>
                <ul>
                  <li>
                    Scan your computer with anti-malware software to detect and
                    remove any malicious software or programs. There are various
                    free and paid anti-malware software available online.
                  </li>
                  <li>
                    Remove any suspicious or unwanted extensions from your Eagle
                    Browser. To do this, open Eagle Browser, click on the "More"
                    button at the top right corner of the screen, and then click
                    on "Extensions". From there, you can disable or remove any
                    extensions that you do not recognize or trust.
                  </li>
                  <li>
                    Reset your Eagle Browser settings to their default state. To
                    do this, open Eagle Browser, click on the "More" button at
                    the top right corner of the screen, and then click on
                    "Settings". Scroll down to the bottom of the page and click
                    on "Advanced". Then, click on "Reset settings" under the
                    "Reset and clean up" section.
                  </li>
                </ul>
              </p>
              <p>
                <strong>
                  To manually remove any malicious programs or software from
                  your Mac
                </strong>
                , you can follow these steps:
              </p>
              <p>
                <ul>
                  <li>
                    On the left-hand side of the window, click on
                    "Applications".
                  </li>
                  <li>
                    Look for any programs or applications that you do not
                    recognize or remember installing.
                  </li>
                  <li>Right-click on the name of the unwanted program.</li>
                  <li>Click on "Move to Trash".</li>
                  <li>
                    Once you have moved all unwanted programs to the Trash,
                    right-click on the Trash icon at the bottom of the screen.
                  </li>
                  <li>
                    Click on "Empty Trash" to permanently remove the programs
                    from your computer.
                  </li>
                </ul>
              </p>
              <p>
                This process should help you remove any malicious programs or
                software on your Mac. If you continue to experience issues or
                suspect that your Mac may still be infected with malware, seek
                assistance from a professional or use anti-malware software to
                scan and remove any remaining threats.
              </p>
              <p>
                <strong>To avoid malware in the future</strong>, you can take
                the following precautions:
              </p>
              <p>
                1. Beware of websites that may prompt you to download unwanted
                software or files. For instance, avoid downloading files that
                offer copyrighted content for free or winning contests that
                require you to download software.
              </p>
              <p>
                2. Be cautious of encrypted archives such as .zip files that
                require a password. These archives may bypass antivirus
                detection scans and contain malicious software.
              </p>
              <p>
                3. Avoid warnings about viruses or infected devices,
                particularly if you haven’t recently used a virus scanner.
                Scammers may use these warnings to trick you into downloading
                malicious software.
              </p>
              <p>
                4. Avoid insecure connections when visiting websites and do not
                download files from sites that do not start with HTTPS. Learn
                how to check if a website's connection is secure.
              </p>
              <p>
                5. Pay attention to Safe Browsing download warnings. Malicious
                actors may ask you to ignore or turn off warnings to avoid
                antivirus detections.
              </p>
              <p>
                6. If a popup about a program update or download seems
                suspicious, do not click on it. Instead, go to the program's
                official website to download it.
              </p>
              <p>
                By following these steps, you can reduce the risk of malware
                infecting your computer or device in the future.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultSearchShortcuts;
