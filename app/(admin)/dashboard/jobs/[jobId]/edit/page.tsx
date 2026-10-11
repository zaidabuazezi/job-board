import AdminPageHeader from "@/components/common/AdminPageHeader";
import EditJobForm from "@/components/job-management/EditJobform";
import JobNotFound from "@/components/jobs/JobNotFound";
import { JobsData } from "@/data";
import { getJob } from "@/services/jobs/jobs.services";
import {Job} from '@/types'

type Props = {
  params: Promise<
  { jobId: string }
  >;
};

async function EditJobPage({ params }: Props) {
  const { jobId } = await params;

  const result=await getJob(jobId);

  if(! result.success) {

    return <JobNotFound />;
  }

   const {data: job} =result;
   

  if (!job) {
    return <JobNotFound />;
  }

  return (
    <>
      <AdminPageHeader
        title="EDIT JOB"
        subtitle={`ID: ${job.id} — ${job.title}`}
        actionButtonLink="/dashboard/jobs"
        actionButtonVariant="outline"
        actionButtonText="← BACK"
      />
      <EditJobForm job={job} />
    </>
  );
}

export default EditJobPage;