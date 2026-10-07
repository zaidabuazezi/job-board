import { JobsData } from "@/data";
import JobManagementTable from "@/components/job-management/JobManagementTable";
import AdminPageHeader from "@/components/common/AdminPageHeader";

 function JobsManagementPage() {

  return (
    <>
      <AdminPageHeader
      title="JOB BOSTS"
      subtitle={`${JobsData.length} ACTIVE LISTINGS`}
      actionButtonLink="/dashboard/jobs/new"
      actionButtonVariant="accent"
      actionButtonText="+ CREATE JOB"
      />
      <JobManagementTable jobs={JobsData}/>
    </>
  );
}

export default JobsManagementPage;