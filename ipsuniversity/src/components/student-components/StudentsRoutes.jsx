import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Navbar5 from "../../components/Navbar3";
import Footer from "../../components/Footer";

// Student Zone Pages
import StudentsCouncil from "./StudentsCounsil";
import DuplicateIDCardRequest from "./DuplicateIdCardReq";
 import FacilitiesDifferentlyAbled from "./StudentFacilities";
import StudentFeedback from "./StudentFeedback";

// // Professional Clubs
import CSI from "./CSI";
import ISTE from "./ISTE";
import StandardClub from "./StandardClub";
 import AdministrativeClub from "./AdministrativeClub";

// // Social Committee
 import NSS from "./NSS";
import NCC from "./NCC";
 import Pahal from "./Pahal";

// // Other Pages
// import AirboysClub from "./AirboysClub";
import TechnoParv from "./TechnoParv";

import Villay from "./Villay";

const StudentsRoutes = () => {
  return (
    <>
      <Navbar5 />

      <Routes>
        {/* Default Route */}
        {/* <Route
          index
          element={<Navigate to="students-council" replace />}
        /> */}

        {/* Student's Council */}
        <Route
          path="students-council"
          element={<StudentsCouncil />}
        />

        {/* Duplicate ID Card */}
        <Route
          path="duplicate-id-card-request"
          element={<DuplicateIDCardRequest />}
        />

        {/* Facilities */}
        <Route
          path="facilities-for-differently-abled"
          element={<FacilitiesDifferentlyAbled />}
        />

        {/* Student Feedback */}
        <Route
          path="student-feedback"
          element={<StudentFeedback />}
        />

        {/* Professional Clubs */}
        <Route
          path="professional-clubs/csi"
          element={<CSI />}
        />

        <Route
          path="professional-clubs/iste"
          element={<ISTE />}
        />

        <Route
          path="professional-clubs/standard-club"
          element={<StandardClub />}
        />

        <Route
          path="professional-clubs/administrative-club"
          element={<AdministrativeClub />}
        />

        {/* Social Committee */}
        <Route
          path="social-committee/nss"
          element={<NSS />}
        />

        <Route
          path="social-committee/ncc"
          element={<NCC />}
        />

        <Route
          path="social-committee/pahal"
          element={<Pahal />}
        />

        {/* Airboys Club */}
        {/* <Route
          path="airboys-club"
          element={<AirboysClub />}
        /> */}

        {/* Fest */}
        <Route
          path="fest/photos"
          element={<TechnoParv />}
        />

        <Route
          path="fest/videos"
          element={<Villay />}
        />

        {/* Invalid Route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default StudentsRoutes;