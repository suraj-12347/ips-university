import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Navbar5 from "../Navbar3";
import Footer from "../Footer";

// T&P Pages
import AboutTP from "./AboutTP";
import LeadingRecruiters from "./LeadingRecruiters";
import PlacementStatistics from "./PlacementStatistics";
import PlacementRecords from "./PlacementRecords";
import ProminentAlumni from "./ProminentAlumni";
import ContactInfo from "./ContactInfo";
import IndustrialTraining from "./IndustrialTraining";

const TPRoutes = () => {
  return (
    <>
      <Navbar5 />

      <Routes>
        {/* Default Route */}
        <Route
          index
          element={<Navigate to="about-tp" replace />}
        />

        {/* About TP */}
        <Route
          path="about-tp"
          element={<AboutTP />}
        />

        {/* Leading Recruiters */}
        <Route
          path="leading-recruiters"
          element={<LeadingRecruiters />}
        />

        {/* Placements */}
        <Route
          path="placements/statistics"
          element={<PlacementStatistics />}
        />

        <Route
          path="placements/records"
          element={<PlacementRecords />}
        />

        {/* Prominent Alumni */}
        <Route
          path="prominent-alumni"
          element={<ProminentAlumni />}
        />

        {/* Contact */}
        <Route
          path="contact"
          element={<ContactInfo />}
        />

        {/* Industrial Training */}
        <Route
          path="industrial-training"
          element={<IndustrialTraining />}
        />

        {/* Invalid Route */}
        <Route
          path="*"
          element={<Navigate to="about-tp" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default TPRoutes;