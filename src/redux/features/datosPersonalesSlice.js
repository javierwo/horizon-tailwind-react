{/** 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { 
  data: {}
};

export const datosPersonalesSlice = createSlice({
  name: "datosPersonalesSlice",
  initialState,
  reducers: {
    noData: () => initialState,
    getDatosPersonales: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { noData, getDatosPersonales } = datosPersonalesSlice.actions;

//  Export the datosPersonalesSlice.reducer to be included in the store.
export default datosPersonalesSlice.reducer;

*/}