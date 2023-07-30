/*
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const apiSliceXXX = createApi({
  reducerPath: "apiSlice", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => "/test", // endpoint
    }),
    getDatosPersonales: builder.mutation({
      query: (cedula  ) => ({
        url: "/get_datos_personales", // endpoint
        method: "POST",
        body: {
          CEDULA: cedula 
        },
      }),
    }),
  }),
});

export const { useGetTestQuery, useGetDatosPersonalesMutation } = apiSliceXXX;
*/