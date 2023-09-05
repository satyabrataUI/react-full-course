import { configureStore } from "@reduxjs/toolkit";
import INCDECSlice from "./Reducer/Reducer";
export default configureStore({
  reducer: {
    incdec: INCDECSlice,
  },
});
