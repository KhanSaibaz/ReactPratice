import React from 'react'
import { useGetUsersQuery } from '../redux/slices/UserApi';


function Users() {
    const { data: users, error: usersError } = useGetUsersQuery();
    console.log(users, 'ghnjmk');


    return (
        <div> <h2>Users</h2>
            {users?.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}</div>
    )
}

export default Users