import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const prioridadesDataApi = createApi({
  reducerPath: "prioridadesDataApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPrioridadesData: builder.query({
      query: (data) => `/get_priorities_data?prioridad=${encodeURIComponent(JSON.stringify(data))}`,
    }),
  }),
});

export const { useGetPrioridadesDataQuery } = prioridadesDataApi;