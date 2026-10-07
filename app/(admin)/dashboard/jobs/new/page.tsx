import AdminPageHeader from "@/components/common/AdminPageHeader";
import { JobsData } from "@/data";
import CreateJobForm from "@/components/job-management/CreateJobForm";

function MyNew() {
    return (
        <>
        <AdminPageHeader
      title="CREATE JOB"
      subtitle="NEW LISTING"
      actionButtonLink="/dashboard/jobs"
      actionButtonVariant="outline"
      actionButtonText="BACK TO JOBS"
      />
      <CreateJobForm/>
        </>
    )
}

export default MyNew;