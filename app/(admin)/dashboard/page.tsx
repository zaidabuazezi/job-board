import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentApplications from "@/components/dashboard/RecentApplication";
import { CandidateData } from "@/data";
import { ApplicationData } from "@/data";
import { getApplications } from "@/services/jobs/applications/applications.service";
import { getJobs } from "@/services/jobs/jobs.services";


async function DashboardPage() {

   const jobsResult=await getJobs();
   const applicationresult=await getApplications();

    if(! jobsResult.success) {
      return (
      <div>Error Loading Jobs</div>
      )
    }

    if(! applicationresult.success) {
      return (
        <div>Error loading Applications</div>
      )
    }

    const {data: jobs=[]}=jobsResult;
    const {data:applications=[]}=applicationresult;

  const interviews = applications.filter(
       (c) => c.status === "INTERVIEW",
      ).length;
    
    const avgScore = (
      applications.reduce((s, c) => s + c.aiScore, 0) /
      applications.length
      ).toFixed(1);

  return (
    <>
      <h1 className="text-4xl font-heading font-bold">OVERVIEW</h1>
      <p className="font-mono text-sm text-muted-foreground mt-1">
        ADMIN DASHBOARD
      </p>
       <DashboardStats 
         activeJobs={jobs.length}
         totalCandidates={CandidateData.length}
         avgScore={avgScore}
         interviews={interviews}
         />

         <RecentApplications applications={applications}/>
    </>
  );
}

export default DashboardPage;