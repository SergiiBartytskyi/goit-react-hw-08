import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterState } from "./filter-types";

const initialState: IFilterState = {
  query: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
