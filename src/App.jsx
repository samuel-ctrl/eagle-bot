import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ContactPage from "./Pages/contact/ContactPage";
import { ScrollToTop } from "./components/Utils";
import NotFound from "./Pages/404Page";
import TermsAndCons from "./Pages/terms_and_policy/TermsAndCons";
import PrivacyAndPolicy from "./Pages/terms_and_policy/PrivacyAndPolicy";
import CookiePolicy from "./Pages/terms_and_policy/cookiePolicy";
import Eula from "./Pages/terms_and_policy/Eula"

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
          path="/terms-and-conditions"
          element={<TermsAndCons from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/privacy-policy"
          element={<PrivacyAndPolicy from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/cookie-policy"
          element={<CookiePolicy from={from} setFrom={setFrom} />}
        ></Route>
        <Route
          path="/end-user-license-agreement"
          element={<Eula from={from} setFrom={setFrom} />}
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
