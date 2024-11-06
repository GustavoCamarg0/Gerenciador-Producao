import React from "react";
import Footer from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import HeroSection from "../components/HeroSection";

function PrincipalPage() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 ">
          <HeroSection/>
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default PrincipalPage;
