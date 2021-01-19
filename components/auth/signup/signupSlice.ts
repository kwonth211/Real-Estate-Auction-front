import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./action";
import Notification from "@/components/common/modal/notification";
// import { Court } from "./";

export type SignupState = {
  status: string;
  loading: boolean;
  error: any;
};

const initialState: SignupState = {
  status: null,
  loading: false,
  error: null,
};

export const signupSlice = createSlice({
  name: "auth/signup",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { status } = payload;
        state.error = null;
        state.loading = false;
        state.status = status;
      })
      .addCase(signup.rejected, (state, { payload: { errorMessage } }) => {
        state.error = errorMessage;
        state.loading = false;
        Notification("error", "에러", errorMessage);
        // Todo Modal Notification.
      });
  },
});

export const { reset } = signupSlice.actions;

export default signupSlice.reducer;
