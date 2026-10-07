"use client";
import UsersProvider from '@/context/jobs/users/UsersProvider'; 
import UsersStats from './UsersStats';
import UsersSearch from './UsersSearch';
import UsersList from './UsersList';

function UserListingWrapper() {

    return (
  <>
     <UsersProvider>
        <UsersStats/>
        <UsersSearch/>
        <UsersList/>
     </UsersProvider>
  </>
 
    )
}


export default UserListingWrapper ;