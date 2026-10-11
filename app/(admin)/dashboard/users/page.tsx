import AdminPageHeader from "@/components/common/AdminPageHeader";
import { CandidateData } from "@/data";
import UserListingWrapper from "@/components/users/UsersListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";

async function UserPage() {

    const result=await getJobs();

    if(! result.success) {
        return (
            <div>Error Loading Jobs</div>
        )
    }

    const {data:jobs=[]}=result;

    return (
   <>
      <AdminPageHeader
         title="USERS"
         subtitle={`${CandidateData.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users/new"
         actionButtonVariant="accent"
         actionButtonText="+ CREATE USER =>"
        />

       <UserListingWrapper jobs={jobs}/>
   </>

    )
}


export default UserPage;