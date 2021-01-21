import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "../../libs/axios";
import { CourtState } from "./courtSlice";

// Types
interface MyKnownError {
  errorMessage: string;
}

export const findCourtList = createAsyncThunk<
  CourtState,
  {
    rejectValue: MyKnownError;
  }
>( // 성공 시 리턴 타입
  // { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
  "court/list",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/court/list`);
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
