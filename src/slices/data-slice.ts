import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fileExplorerData } from "../mock-data/mock-data";

interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: fileExplorerData,
};

const dataSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
