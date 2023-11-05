import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ContactPage from "./Pages/contact/ContactPage";
import { ScrollToTop } from "./components/Utils";
import NotFound from "./Pages/404Page";
import TermsAndCons from "./Pages/terms_and_policy/TermsAndCons";
import PrivacyAndPolicy from "./Pages/terms_and_policy/PrivacyAndPolicy";
import CookiePolicy from "./Pages/terms_and_policy/cookiePolicy";
import Eula from "./Pages/terms_and_policy/Eula";
import MicrosoftTutorial from "./Pages/tutorials/microsoft";
import GoogleTutorial from "./Pages/tutorials/google";
import AWSTutorial from "./Pages/tutorials/aws";
import EagleBrowserStaticPage from "./Pages/static_pages/eagleBrowserStaticPage";
import DefaultSearchShortcuts from "./Pages/static_pages/defaultSearchShortcuts";

function App() {
  const [from, setFrom] = useState("");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="*"
          element={<NotFound from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/termsofuse"
          element={<TermsAndCons from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/privacypolicy"
          element={<PrivacyAndPolicy from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/cookiepolicy"
          element={<CookiePolicy from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/EULA"
          element={<Eula from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/microsoft-tutorial"
          element={<MicrosoftTutorial from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/google-tutorial"
          element={<GoogleTutorial from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/aws-tutorial"
          element={<AWSTutorial from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/eagle-browser-settings"
          element={<EagleBrowserStaticPage from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/default-search-shortcuts-malware"
          element={<DefaultSearchShortcuts from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/"
          element={<LandingPage from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/contact"
          element={<ContactPage from={from} setFrom={setFrom} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
