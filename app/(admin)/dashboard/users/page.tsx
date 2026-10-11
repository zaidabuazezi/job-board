import AdminPageHeader from "@/components/common/AdminPageHeader";
import UserListingWrapper from "@/components/users/UsersListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";
import { getApplications } from "@/services/jobs/applications/applications.service";
import { getCandidates } from "@/services/jobs/candidates/candidates.service";

async function UserPage() {

    const jobsResult=await getJobs();
    const applicationResult=await getApplications();
    const candidatesResult=await getCandidates();

    if(! jobsResult.success) {
        return (
            <div>Error Loading Jobs</div>
        )
    }

    if(! applicationResult.success) {
        return (
            <div>Error loading Applications</div>
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
         title="USERS"
         subtitle={`${candidates.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users/new"
         actionButtonVariant="accent"
         actionButtonText="+ CREATE USER =>"
        />

       <UserListingWrapper jobs={jobs} applications={applications} candidates={candidates}/>
   </>

    )
}


export default UserPage;