import React from 'react'
import { useGetUsersQuery } from '../redux/slices/UserApi';
import CommonBtn from '../constants/CommonBtn';


function Users() {
    const { data: users, error: usersError, isLoading, isFetching, isSuccess, isError, refetch } = useGetUsersQuery();

    const handleRefech=()=>{
        refetch()
    }

    return (
        <div>
            <h2>Users</h2>
            {users?.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
            <CommonBtn title={'Refetch'}  sx={{backgroundColor:'#1976D2',color:'#fff'}} onClick={handleRefech}/>
        </div>
    )
}

export default Users