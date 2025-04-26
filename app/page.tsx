'use client'

import { useState } from "react";
import ChatSection from "@/components/ChatSection";
import FinancialCard from "@/components/FinancialCard";
import FranchiseesCard from "@/components/FranchiseeCard";
import InsightCard from "@/components/InsightCard";
import LeadsCard from "@/components/LeadsCard";
import Navbar from "@/components/Navbar";
import ProgressCard from "@/components/ProgressCard";
import QuestionsSection from "@/components/QuestionsSection";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react"; // optional icon

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      <div className={`fixed md:relative z-50 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}>
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 h-full overflow-y-auto">
        <div className="flex items-center justify-between md:px-8 px-6">
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu />
          </button>
          <Navbar />
        </div>

        <hr className="mb-8" />

        <div className="px-8 flex flex-col md:flex-row justify-center gap-6">
          <ProgressCard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:w-[70%] w-full">
            <FranchiseesCard />
            <InsightCard />
            <FinancialCard />
            <LeadsCard />
          </div>
        </div>

        <hr className="mt-8" />

        <div className="flex flex-col md:flex-row w-full">
          <QuestionsSection />
          <ChatSection />
        </div>
      </div>
    </div>
  );
}