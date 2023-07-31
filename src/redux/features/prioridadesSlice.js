import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  prioridad: {}
};

export const prioridadSlice = createSlice({
  name: "prioridadSlice",
  initialState,
  reducers: {
    noPrioridad: () => initialState,
    setPrioridad: (state, action) => {
      state.prioridad = action.payload;
    },
  },
});

export const { noPrioridad, setPrioridad } = prioridadSlice.actions;
export default prioridadSlice.reducer;