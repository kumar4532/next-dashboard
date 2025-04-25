import ChatSection from "@/components/ChatSection";
import FinancialCard from "@/components/FinancialCard";
import FranchiseesCard from "@/components/FranchiseeCard";
import InsightCard from "@/components/InsightCard";
import LeadsCard from "@/components/LeadsCard";
import Navbar from "@/components/Navbar";
import ProgressCard from "@/components/ProgressCard";
import QuestionsSection from "@/components/QuestionsSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto">
        <div className="px-8"><Navbar /></div>

        <hr className="mb-8" />

        <div className="px-8 flex flex-wrap justify-center gap-6">
          <ProgressCard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[70%]">
            <FranchiseesCard />
            <InsightCard />
            <FinancialCard />
            <LeadsCard />
          </div>
        </div>

        <hr className="mt-8"/>

        <div className="flex flex-wrap w-full">
          <QuestionsSection />
          <ChatSection />
        </div>
      </div>
    </div>
  );
}
