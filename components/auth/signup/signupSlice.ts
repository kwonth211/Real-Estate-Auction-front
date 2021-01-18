import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./action";

// import { Court } from "./";

export type SignUpState = {
  status: string;
  loading: boolean;
  error: any;
};

const initialState: SignUpState = {
  status: null,
  loading: false,
  error: null,
};

export const authSlicce = createSlice({
  name: "auth/signup",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        const { status } = payload;
        state.error = null;
        state.loading = false;
        state.status = status;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { reset } = authSlicce.actions;

export default authSlicce.reducer;
