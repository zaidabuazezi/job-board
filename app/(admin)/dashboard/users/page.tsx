import AdminPageHeader from "@/components/common/AdminPageHeader";
import { CandidateData } from "@/data";
import UserListingWrapper from "@/components/users/UsersListingWrapper";

function UserPage() {

    return (
   <>
      <AdminPageHeader
         title="USERS"
         subtitle={`${CandidateData.length} ACTIVE LISTINGS`}
         actionButtonLink="/dashboard/users/new"
         actionButtonVariant="accent"
         actionButtonText="+ CREATE USER =>"
        />

       <UserListingWrapper/>
   </>

    )
}


export default UserPage;