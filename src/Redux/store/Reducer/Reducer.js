import { createSlice } from "@reduxjs/toolkit";
export const INCDECSlice = createSlice({
  name: "incdec",
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload
    //   },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = INCDECSlice.actions;

export default INCDECSlice.reducer;
