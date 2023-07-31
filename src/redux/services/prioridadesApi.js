import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const prioridadesApi = createApi({
  reducerPath: "prioridadesApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPrioridades: builder.query({
      query: (cedula) => `/get_priorities/${cedula}`,
    }),
  }),
});

export const { useGetPrioridadesQuery } = prioridadesApi;