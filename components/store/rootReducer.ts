import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import courtReducer from "@/components/court/courtSlice";
import landReducer from "@/components/land/landSlice";
// import todosReducer from 'features/todos/todosSlice'
// import usersReducer from 'features/users/usersSlice'
// import visibilityFilterReducer from 'features/visibilityFilter/filtersSlice'
// import authReducer from 'features/auth/authSlice'

const rootReducer = combineReducers({
  court: courtReducer,
  land: landReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
