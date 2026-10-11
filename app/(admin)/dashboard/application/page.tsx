import { ApplicationData } from "@/data";
import AdminPageHeader from "@/components/common/AdminPageHeader";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";

async function ApplicationsManagementPage() {

    const result=await getJobs();

    if(! result.success) {
        return (
            <div>error loading jobs</div>
        )
    }

    const {data:jobs=[]}=result

    return (
        <>
        <AdminPageHeader
         title="APPLICATIONS"
         subtitle={`${ApplicationData.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users"
         actionButtonVariant="outline"
         actionButtonText="VIEW ALL USERS =>"
        />
        
       <ApplicationsListingWrapper jobs={jobs}/>
       </>
    )
}

export default ApplicationsManagementPage;