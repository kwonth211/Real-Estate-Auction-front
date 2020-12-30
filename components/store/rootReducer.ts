import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import courtReducer from "@/components/table/courtSlice";
// import todosReducer from 'features/todos/todosSlice'
// import usersReducer from 'features/users/usersSlice'
// import visibilityFilterReducer from 'features/visibilityFilter/filtersSlice'
// import authReducer from 'features/auth/authSlice'

const rootReducer = combineReducers({
  court: courtReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
