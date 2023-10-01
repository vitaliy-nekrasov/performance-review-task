import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/models';

export const shopApi = createApi({
  reducerPath: "shop/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products/category/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], string>({
      query: (search: string) => ({
        url: search,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = shopApi;