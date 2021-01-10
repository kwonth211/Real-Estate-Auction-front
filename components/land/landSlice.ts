import { createSlice } from "@reduxjs/toolkit";
import { Land } from "./";
import { findLand } from "./action";

export type LandState = {
  landList: Array<Land>;
  loading: boolean;
  error: any;
};

const initialState: LandState = {
  landList: [],
  loading: false,
  error: null,
};

export const landSlice = createSlice({
  name: "land/find",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findLand.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(findLand.fulfilled, (state, { payload }) => {
        const { landList } = payload;
        state.error = null;
        state.loading = false;
        state.landList = landList;
      })
      .addCase(findLand.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});
// export const selectLand = (state: RootState) => state.land;

export default landSlice.reducer;
