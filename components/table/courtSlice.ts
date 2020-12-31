import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/components/store/rootReducer";
import { axios } from "../../libs/axios";

// Utils

interface MyKnownError {
  errorMessage: string;
}

// interface FindCourtListAttribute {
//   status: number;
//   courtList: Array<any>;
//   completed: boolean;
// }
type CourtState = {
  courtList: Array<any>;
  loading: boolean;
  error: any;
};

export const findCourtList = createAsyncThunk<CourtState>( // 성공 시 리턴 타입
  // { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
  "court/list",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/court`);
      return data;
    } catch (e) {
      // return rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
    }
  }
);

// Types

const initialState: CourtState = {
  courtList: [],
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
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

// Slice action creators
export const {
  // increment,
  // decrement,
  // incrementByAmount,
  reset,
} = counterSlice.actions;

export const selectCourt = (state: RootState) => state.court;

export default counterSlice.reducer;
