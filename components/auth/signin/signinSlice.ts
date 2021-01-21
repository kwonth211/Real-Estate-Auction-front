import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./action";
import Notification from "@/components/common/modal/notification";
// import { Court } from "./";

export type SignInState = {
  status: string;
  loading: boolean;
  error: any;
};

const initialState: SignInState = {
  status: null,
  loading: false,
  error: null,
};

export const signinSlice = createSlice({
  name: "auth/signin",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          state.error = null;
          state.loading = false;
          state.status = payload.status;
        }
      })
      .addCase(signin.rejected, (state, { payload }) => {
        if (payload) {
          const { errorMessage } = payload;
          state.error = errorMessage;
          state.loading = false;
          Notification("error", "에러", errorMessage);
        }
      });
  },
});

export const { reset } = signinSlice.actions;

export default signinSlice.reducer;
