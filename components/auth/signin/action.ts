import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "@/libs/axios";
import { formValue } from "./signin";
// import { CourtState } from "./courtSlice";

interface MyKnownError {
  errorMessage: string;
}

export const signin = createAsyncThunk<
  any,
  formValue,
  { rejectValue: MyKnownError }
>("auth/signin", async ({ email, password }, { rejectWithValue }) => {
  try {
    const params = { email, password };
    const { data } = await axios.get(`/auth/signin`, { params });
    return data;
  } catch (response) {
    const {
      data: { message },
    } = response;
    return rejectWithValue({
      errorMessage: message,
    });
  }
});
