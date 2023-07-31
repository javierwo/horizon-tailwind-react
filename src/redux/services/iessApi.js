import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const iessApi = createApi({
  reducerPath: "iessApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getIess: builder.query({
      query: (cedula) => `/get_iess/${cedula}`,
    }),
  }),
});

export const { useGetIessQuery } = iessApi;