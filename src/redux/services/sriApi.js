import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const sriApi = createApi({
  reducerPath: "sriApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSri: builder.query({
      query: (cedula) => `/get_sri/${cedula}`,
    }),
  }),
});

export const { useGetSriQuery } = sriApi;