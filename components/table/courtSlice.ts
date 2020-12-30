import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/components/store/rootReducer";
import { fetchTodos } from "./service";
// Utils
// import { mockIncrement } from "utilities/mockAPI";

// Async actions
export const incrementByAmountAsync = createAsyncThunk(
  "counter/incrementByAmount",
  async (payload: number, { rejectWithValue }) => {
    try {
      //   const response = await mockIncrement(payload);
      //   return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Types
type CourtState = {
  courtList: Array<any>;
  loading: boolean;
  error: any;
};

const initialState: CourtState = {
  courtList: [],
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value = state.value + 1;
    // },
    // decrement: (state) => {
    //   state.value = state.value - 1;
    // },
    // incrementByAmount: (state, { payload }: PayloadAction<number>) => {
    //   state.value = state.value + payload;
    // },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    // [incrementByAmountAsync.pending.type]: (state) => {
    //   state.loading = "pending";
    // },
    // [incrementByAmountAsync.fulfilled.type]: (
    //   state,
    //   { payload }: PayloadAction<number>
    // ) => {
    //   state.loading = "idle";
    //   state.value = state.value + payload;
    // },
    // [incrementByAmountAsync.rejected.type]: (state, { payload }) => {
    //   state.loading = "idle";
    //   state.error = payload;
    // },
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.courtList = payload;
      })
      .addCase(fetchTodos.rejected, (state, { payload }) => {
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
