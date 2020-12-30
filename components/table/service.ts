import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../libs/axios";

interface MyKnownError {
  errorMessage: string;
}

interface TodosAttributes {
  id: number;
  text: string;
  completed: boolean;
}

export const fetchTodos = createAsyncThunk<
  TodosAttributes[], // 성공 시 리턴 타입
  number, // input type
  { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
>("todos/fetchTodos", async (userId, thunkAPI) => {
  try {
    const { data } = await axios.get(`/court`);
    return data;
  } catch (e) {
    // return rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
  }
});
