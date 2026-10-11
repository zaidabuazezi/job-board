"use client";
import UsersProvider from '@/context/jobs/users/UsersProvider'; 
import UsersStats from './UsersStats';
import UsersSearch from './UsersSearch';
import UsersList from './UsersList';
import { Job } from '@/types';


type Props= {

  jobs:Job[]

}

function UserListingWrapper({jobs}:Props) {

    return (
  <>
     <UsersProvider jobs={jobs}>
        <UsersStats/>
        <UsersSearch/>
        <UsersList/>
     </UsersProvider>
  </>
 
    )
}


export default UserListingWrapper ;