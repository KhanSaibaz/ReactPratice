import { BaseApi } from "../baseQuery/BaseApi"; 

export const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetProductsQuery } = ProductApi;
