import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";

function PrincipalPage() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default PrincipalPage;
