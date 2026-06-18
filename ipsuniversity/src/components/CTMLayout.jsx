import React from "react";
import { Outlet } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const CTMLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar3 />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-2 h-[90vh] overflow-y-auto scrollb">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CTMLayout;