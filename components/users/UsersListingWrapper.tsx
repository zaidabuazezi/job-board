"use client";
import UsersProvider from '@/context/jobs/users/UsersProvider'; 
import UsersStats from './UsersStats';
import UsersSearch from './UsersSearch';
import UsersList from './UsersList';
import { Application, Candidate, Job } from '@/types';


type Props= {

  jobs:Job[];
  applications:Application[];
  candidates:Candidate[];

}

function UserListingWrapper({jobs,applications,candidates}:Props) {

    return (
  <>
     <UsersProvider jobs={jobs} applications={applications} candidates={candidates}>
        <UsersStats/>
        <UsersSearch/>
        <UsersList/>
     </UsersProvider>
  </>
 
    )
}


export default UserListingWrapper ;