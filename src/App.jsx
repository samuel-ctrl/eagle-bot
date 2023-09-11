import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ContactPage from "./Pages/contact/ContactPage";
import { ScrollToTop } from "./components/Utils";
import NotFound from "./Pages/404Page";

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
