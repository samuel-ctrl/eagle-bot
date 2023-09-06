import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ContactPage from "./Pages/contact/ContactPage";
import { ScrollToTop } from "./components/Utils";
import NotFound from "./Pages/404Page";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="contact/" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
