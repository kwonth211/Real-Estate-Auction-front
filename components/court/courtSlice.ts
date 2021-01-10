import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/components/store/rootReducer";
import { findCourtList } from "./action";

import { Court } from "./";

export type CourtState = {
  courtList: Array<Court>;
  loading: boolean;
  error: any;
};

const initialState: CourtState = {
  courtList: [],
  loading: false,
  error: null,
};
export const courtSlice = createSlice({
  name: "court/list",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findCourtList.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(findCourtList.fulfilled, (state, { payload }) => {
        const { courtList } = payload;
        state.error = null;
        state.loading = false;
        state.courtList = courtList;
      })
      .addCase(findCourtList.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { reset } = courtSlice.actions;

export default courtSlice.reducer;
