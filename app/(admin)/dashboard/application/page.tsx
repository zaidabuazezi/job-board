import { ApplicationData } from "@/data";
import AdminPageHeader from "@/components/common/AdminPageHeader";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";

function ApplicationsManagementPage() {
    return (
        <>
        <AdminPageHeader
         title="APPLICATIONS"
         subtitle={`${ApplicationData.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users"
         actionButtonVariant="outline"
         actionButtonText="VIEW ALL USERS =>"
        />
        
       <ApplicationsListingWrapper/>
       </>
    )
}

export default ApplicationsManagementPage;