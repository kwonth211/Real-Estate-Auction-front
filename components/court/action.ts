import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "../../libs/axios";
import { CourtState } from "./courtSlice";
interface MyKnownError {
  errorMessage: string;
}

// Types

export const findCourtList = createAsyncThunk<CourtState>( // 성공 시 리턴 타입
  // { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
  "court/list",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/court/list`);
      return data;
    } catch (e) {
      // return rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
    }
  }
);
