import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getBlogs: builder.query<any, void>({
      query: () => "/posts",
    }),
    getBlog: builder.query<[], string | string[] | undefined>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useLazyGetBlogQuery } = api;
