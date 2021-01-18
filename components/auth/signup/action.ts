import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "@/libs/axios";
import { formValue } from "./signupForm";
// import { CourtState } from "./courtSlice";

export const signUp = createAsyncThunk<any, formValue>( // 성공 시 리턴 타입
  // { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
  "auth/signup",
  async ({ email, nickname, name, password }) => {
    try {
      const params = { email, nickname, name, password };
      const { data } = await axios.post(`/auth/signup`, params);
      debugger;
      return data;
    } catch (e) {
      // return rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
    }
  }
);
