import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Navbar5 from "../Navbar3";
import Footer from "../Footer";

// Admission Pages
import ApplyOnlinePayment from "./ApplyOnlinePayment";
import ImportantDates from "./ImportantDates";
import ScholarshipPolicy from "./ScholarshipPolicy";
import DownloadBrochure from "./DownloadBrochure";
import FeeRefundPolicy from "./FeeRefundPolicy";
import HostelFee from "./HostelFee";
import FeeStructure from "./FeeStructure";

const AdmissionRoutes = () => {
  return (
    <>
      <Navbar5 />

      <Routes>
        {/* Default Route */}
        <Route
          index
          element={<Navigate to="/admission/apply-online-payment" replace />}
        />

        <Route
          path="apply-online-payment"
          element={<ApplyOnlinePayment />}
        />

        <Route
          path="important-dates"
          element={<ImportantDates />}
        />

        <Route
          path="scholarship-policy"
          element={<ScholarshipPolicy />}
        />

        <Route
          path="download-brochure"
          element={<DownloadBrochure />}
        />

         <Route
          path="fee-refund-policy"
          element={<FeeRefundPolicy />}
        />

        <Route
          path="hostel-fee"
          element={<HostelFee />}
        />

        <Route
          path="fee-structure"
          element={<FeeStructure />}
        /> 

        {/* Invalid Route */}
        <Route
          path="*"
          element={<Navigate to="/admissions/apply-online-payment" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default AdmissionRoutes;