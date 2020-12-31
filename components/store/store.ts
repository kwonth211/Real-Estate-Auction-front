import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
// import { createFirestoreInstance } from 'redux-firestore'

// import firebase from 'app/firebase'
// import rrfConfig from 'app/config'
import rootReducer, { RootState } from "@/components/store/rootReducer";

const middleware = getDefaultMiddleware({
  serializableCheck: false,
  //   thunk: {
  //     extraArgument: { getFirebase },
  //   },
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const rrfProps = {
  //   config: rrfConfig,
  dispatch: store.dispatch,
};

// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("./rootReducer", () => {
//     const newRootReducer = require("./rootReducer").default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
