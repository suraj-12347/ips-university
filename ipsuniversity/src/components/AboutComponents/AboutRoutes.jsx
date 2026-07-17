import { Routes, Route, Navigate } from "react-router-dom";

// About Pages
import Overview from "./Overview";
import VisionMission from "./VisionMision";
import Leadership from "./Leadership";
import Navbar2 from "../Navbar3";
import ApprovalRecognition from "../ApprovalRecognition";
import Footer from "../Footer";
 import Officials from "./Officials";
 import GovernanceAdministration from "./Governance";
 import GovernanceFramework from "./GovernanceFramework";
import RecognitionApprovals from "./RecognitionApprovals";
import Advisors from "./Advisors";
import WhyIPSUniversity from "./WhyIps";
import Ordinance from "./Ordinance";

const AboutRoutes = () => {
  return (
   <>
   <Navbar2/>
   
   
   <div >
     <Routes>
      {/* Default Route */}
      {/* <Route index element={<Navigate to="overview" replace />} /> */}

      <Route path="overview" element={<Overview />} />
      <Route path="vision-mission" element={<VisionMission />} />
      <Route path="leadership" element={<Leadership />} />
       <Route path="officials" element={<Officials />} />
     <Route
        path="governance-administration"
        element={<GovernanceAdministration />}
      /> 
      <Route
        path="governance-framework"
        element={<GovernanceFramework />}
      />
      <Route
        path="recognition-approvals"
        element={<RecognitionApprovals />}
      />
      <Route path="advisors" element={<Advisors />} />
    
      
      <Route path="why-ips-university" element={<WhyIPSUniversity />} />
      <Route path="ordinance" element={<Ordinance />} />

    
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
   </div>

   <ApprovalRecognition/>
   <Footer/>
   
   
   
   </>
  );
};

export default AboutRoutes;