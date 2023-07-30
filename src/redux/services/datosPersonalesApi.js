import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8088";

export const datosPersonalesApi = createApi({
  reducerPath: "datosPersonalesApi", // nombre del reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getDatosPersonales: builder.query({
      query: (cedula) => `/get_datos_personales/${cedula}`,
    }),
  }),
});

export const { useGetDatosPersonalesQuery } = datosPersonalesApi;