import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  color: string;
};

const initialState: InitialState = {
  color: "light",
};

export const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    changeColor: (state) => {
      if (state.color === "light") {
        state.color = "dark"
      } else {
        state.color = "light"
      }
    }
  },
});

export const colorModeActions = colorModeSlice.actions;
const colorModeReducer = colorModeSlice.reducer;
export default colorModeReducer;
