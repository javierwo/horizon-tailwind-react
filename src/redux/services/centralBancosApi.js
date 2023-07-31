import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const centralBancosApi = createApi({
  reducerPath: "centralBancosApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCentralBancos: builder.query({
      query: (cedula) => `/get_central_bancos/${cedula}`,
    }),
  }),
});

export const { useGetCentralBancosQuery } = centralBancosApi;