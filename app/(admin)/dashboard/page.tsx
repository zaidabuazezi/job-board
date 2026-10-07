import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentApplications from "@/components/dashboard/RecentApplication";
import { JobsData } from "@/data";
import { CandidateData } from "@/data";
import { ApplicationData } from "@/data";


 function DashboardPage() {


  const interviews = ApplicationData.filter(
       (c) => c.status === "INTERVIEW",
      ).length;
    
    const avgScore = (
        ApplicationData.reduce((s, c) => s + c.aiScore, 0) /
        ApplicationData.length
      ).toFixed(1);

  return (
    <>
      <h1 className="text-4xl font-heading font-bold">OVERVIEW</h1>
      <p className="font-mono text-sm text-muted-foreground mt-1">
        ADMIN DASHBOARD
      </p>
       <DashboardStats 
         activeJobs={JobsData.length}
         totalCandidates={CandidateData.length}
         avgScore={avgScore}
         interviews={interviews}
         />

         <RecentApplications applications={ApplicationData}/>
    </>
  );
}

export default DashboardPage;