import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/components/store/rootReducer";
import { axios } from "../../libs/axios";

import { Land } from "@/interface/";

interface MyKnownError {
  errorMessage: string;
}

type LandState = {
  landList: Array<Land>;
  loading: boolean;
  error: any;
};

const initialState: LandState = {
  landList: [],
  loading: false,
  error: null,
};
export const findLand = createAsyncThunk<
  LandState,
  number,
  { rejectValue: MyKnownError }
>("land/find", async (courtId) => {
  // 성공 시 리턴 타입
  try {
    const { data } = await axios.get(`/land/${courtId}`);

    return data;
  } catch (e) {
    // return rejectWithValue({
    //   errorMessage: "알 수 없는 에러가 발생했습니다.",
    // });
  }
});

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
export const selectLand = (state: RootState) => state.land;

export default landSlice.reducer;
