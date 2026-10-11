import { JobsData } from "@/data";
import JobManagementTable from "@/components/job-management/JobManagementTable";
import AdminPageHeader from "@/components/common/AdminPageHeader";
import { getJobs } from "@/services/jobs/jobs.services";

async function JobsManagementPage() {

   const result=await getJobs();

   if(! result.success) {
    return (
      <div>Error Loading Jobs</div>
    )
   }

   const {data=[]}=result;


  return (
    <>
      <AdminPageHeader
      title="JOB BOSTS"
      subtitle={`${JobsData.length} ACTIVE LISTINGS`}
      actionButtonLink="/dashboard/jobs/new"
      actionButtonVariant="accent"
      actionButtonText="+ CREATE JOB"
      />
      <JobManagementTable jobs={data}/>
    </>
  );
}

export default JobsManagementPage;