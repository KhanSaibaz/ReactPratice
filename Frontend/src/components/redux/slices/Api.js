import { BaseApi } from "../baseQuery/BaseApi";

export const userApi=BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUsers: builder.query({
            query: () => "/users",
          }),

          getProduct:builder.query({
            query:()=>"./comments"
          })
    })
})

export const {useGetUsersQuery,useGetProductQuery} =userApi