import { BaseApi } from "../baseQuery/BaseApi";

export const userApi=BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUsers: builder.query({
            query: () => "/users",
          })
    })
})

export const {useGetUsersQuery} =userApi