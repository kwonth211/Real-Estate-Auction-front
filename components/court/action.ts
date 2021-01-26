import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "../../libs/axios";
import { CourtState } from "./courtSlice";

// Types
interface MyKnownError {
  errorMessage: string;
}

//@Todo why arg is required?
export const findCourtList = createAsyncThunk<CourtState>(
// any,
// {
//   rejectValue: MyKnownError;
// }
  "court/list",
  async () => {
    // 성공 시 리턴 타입
    try {
      const { data } = await axios.get(`/court/list`);
      return data;
    } catch (response) {
      const {
        data: { message },
      } = response;
      // return rejectWithValue({
      //   errorMessage: message,
      // });
    }
  }
);
