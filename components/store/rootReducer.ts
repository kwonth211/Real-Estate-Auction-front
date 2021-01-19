import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import courtReducer from "@/components/court/courtSlice";
import landReducer from "@/components/land/landSlice";
import signupReducer from "@/components/auth/signup/signupSlice";
import signinReducer from "@/components/auth/signin/signinSlice";

//Todo combine Reducer not auth
const authReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
});

const rootReducer = combineReducers({
  court: courtReducer,
  land: landReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
