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
import EagleBrowserStaticPage from "./Pages/static_pages/eagleBrowserStaticPage";
import DefaultSearchShortcuts from "./Pages/static_pages/defaultSearchShortcuts";
import CloudAcessTutorials from "./Pages/tutorials/cloudAccessTutorials";
import ApiBasedAutomations from "./Pages/static_pages/apiBasedAutomations";
import PricingInformation from "./Pages/static_pages/pricingInformation";

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
          path="/cloud-access-tutorials"
          element={<CloudAcessTutorials from={from} setFrom={setFrom} />}
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
          path="/API-Automations-Information"
          element={<ApiBasedAutomations from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/pricing-information"
          element={<PricingInformation from={from} setFrom={setFrom} />}
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
