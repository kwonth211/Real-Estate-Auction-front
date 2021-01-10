import { createAsyncThunk } from "@reduxjs/toolkit";
import { LandState } from "./landSlice";
import { axios } from "../../libs/axios";

interface MyKnownError {
  errorMessage: string;
}
export const findLand = createAsyncThunk<
  LandState,
  number,
  { rejectValue: MyKnownError }
>("land/find", async (courtId) => {
  // 성공 시 리턴 타입
  try {
    const { data } = await axios.get(`/land/${courtId}`);

    return data;
  } catch (e) {
    // return rejectWithValue({
    //   errorMessage: "알 수 없는 에러가 발생했습니다.",
    // });
  }
});
