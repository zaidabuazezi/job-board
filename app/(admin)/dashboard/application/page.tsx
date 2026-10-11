
import AdminPageHeader from "@/components/common/AdminPageHeader";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";
import { getApplications } from "@/services/jobs/applications/applications.service";
import {getCandidates} from'@/services/jobs/candidates/candidates.service';

async function ApplicationsManagementPage() {

    const jobsResult=await getJobs();
    const applicationResult=await getApplications();
    const candidatesResult=await getCandidates();

    if(! jobsResult.success) {
        return (
            <div>error loading jobs</div>
        )
    }

    if(! applicationResult.success) {
        return (
            <div>Error loading applications</div>
        )
    }

    if(! candidatesResult.success) {
        return (
            <div>Error loading Candidates</div>
        )
    }

    const {data:jobs=[]}=jobsResult;
    const {data:applications=[]}=applicationResult;
   const {data:candidates=[]}=candidatesResult;


    return (
        <>
        <AdminPageHeader
         title="APPLICATIONS"
         subtitle={`${applications.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users"
         actionButtonVariant="outline"
         actionButtonText="VIEW ALL USERS =>"
        />
        
       <ApplicationsListingWrapper jobs={jobs} applications={applications} candidates={candidates}/>
       </>
    )
}

export default ApplicationsManagementPage;