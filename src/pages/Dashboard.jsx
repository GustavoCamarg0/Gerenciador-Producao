import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import { TableContent } from "../components/TableContent";

function PrincipalPage() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4 dark:bg-gray-900">
            Home <span className="text-gray-400">/ Dashboard</span>
          </span>
          <hr/>
          <div className="h-full bg-gray-200 w-full flex flex-col items-center gap-3 pb-3 dark:bg-gray-800">
            <HeroSection />
            <TableContent />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default PrincipalPage;
