import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "@/libs/axios";
import { formValue } from "./signup";
// import { CourtState } from "./courtSlice";

interface MyKnownError {
  errorMessage: string;
}

export const signup = createAsyncThunk<
  any,
  formValue,
  { rejectValue: MyKnownError }
>( // 성공 시 리턴 타입
  "auth/signup",
  // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
  async ({ email, nickname, name, password }, { rejectWithValue }) => {
    try {
      const params = { email, nickname, name, password };
      const { data } = await axios.post(`/auth/signup`, params);
      return data;
    } catch (response) {
      const {
        data: { message },
      } = response;
      return rejectWithValue({
        errorMessage: message,
      });
    }
  }
);
