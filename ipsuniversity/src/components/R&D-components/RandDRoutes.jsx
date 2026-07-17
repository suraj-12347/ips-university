import React from "react";
import { Routes, Route } from "react-router-dom";


import InnovationCell from "./IncuvationCell";
import Navbar5 from "../Navbar3";
import ApprovalRecognition from "../ApprovalRecognition";
import Footer from "../Footer";
//import StartupIncubation from "../pages/innovation/StartupIncubation";
import MousCollaborations from "./MoUsandCollaboration";
 import Patents from "./Patents";
 import GrantFundedProjects from "./GovtFundedProject";
 import ResearchArticles from "./ResearchArticles";
  import BooksBookChapters from "./BookChapter";
 import ConferencePapers from "./PublishedConferencePaper";
 import Journals from "./Journals";

import Activities from "./ResearchActivities";


const RandDRoutes = () => {

  return (

   <>
   
   <Navbar5/>
    <Routes>

      {/* Research & Development */}

      <Route
        path="/innovation-cell"
        element={<InnovationCell />}
      />


      <Route
        path="/startup-incubation"
        element={<InnovationCell />}
      />


      <Route
        path="/mous-collaborations"
        element={<MousCollaborations />}
      />


      <Route
        path="/patents"
        element={<Patents />}
      />


      <Route
        path="/grant-funded-projects"
        element={<GrantFundedProjects />}
      />



      {/* Publications */}

      <Route
        path="/publications/research-articles"
        element={<ResearchArticles />}
      />


      <Route
        path="/publications/books-book-chapters"
        element={<BooksBookChapters />}
      />


      <Route
        path="/publications/conference-papers"
        element={<ConferencePapers />}
      />


      <Route
        path="/publications/journals"
        element={<Journals />}
      />



      {/* Activities */}

      <Route
        path="/activities"
        element={<Activities />}
      />


    </Routes>

    <ApprovalRecognition/>
    <Footer/>
   
   
   </>

  );

};


export default RandDRoutes;