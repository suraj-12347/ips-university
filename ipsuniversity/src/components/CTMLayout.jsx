import React from "react";
import { Outlet } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const CTMLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar3 />

      <div className="flex md:mt-30 lg:mt-30 mt-30">
        <Sidebar />

        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CTMLayout;