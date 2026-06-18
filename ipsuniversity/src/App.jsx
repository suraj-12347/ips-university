import React from "react";
import { Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

import CTMLayout from "./components/CTMLayout";
import Overview from "./pages/CTM";

import HodMessage from "./components/ctm-component/HodMessage";
import FacultyCse from "./components/ctm-component/FacultyCse";
import Scope from "./components/ctm-component/Scope";
import Activities from "./components/ctm-component/Activities";
import SalientFeatures from "./components/ctm-component/SalientFeatures";
import TestinomialCse from "./components/ctm-component/TestinomialCse";
import ReSearch from "./components/ctm-component/ReSearch";
import Events from "./components/ctm-component/Events";
import Achievement from "./components/ctm-component/Achievement";
import Gallery from "./components/ctm-component/Gellary";
import CtmMainPage from "./pages/CtmMainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/ipsctm" element={<CtmMainPage />} />

      {/* CTM Department Routes */}
      <Route path="/page5" element={<CTMLayout />}>
  <Route index element={<Overview />} />

  <Route path="hod-message" element={<HodMessage />} />
  <Route path="faculty" element={<FacultyCse />} />
  <Route path="scope" element={<Scope />} />
  <Route path="activity" element={<Activities />} />
  <Route path="features" element={<SalientFeatures />} />
  <Route path="testimonials" element={<TestinomialCse />} />
  <Route path="research" element={<ReSearch />} />
  <Route path="events" element={<Events />} />
  <Route path="achievements" element={<Achievement />} />
  <Route path="gallery" element={<Gallery />} />
</Route>
    </Routes>
  );
};

export default App;