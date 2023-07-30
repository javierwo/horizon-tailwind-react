import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  value: null
};

export const searchValueSlice = createSlice({
  name: "searchValueSlice",
  initialState,
  reducers: {
    noValue: () => initialState,
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { noValue, setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;